import tls from "node:tls";
import { randomUUID } from "node:crypto";

type SmtpOptions = {
  host: string;
  port: number;
  username: string;
  password: string;
};

type EmailMessage = {
  from: string;
  fromName: string;
  to: string[];
  replyTo: string;
  subject: string;
  text: string;
  html: string;
};

type SmtpReply = {
  code: number;
  message: string;
};

function encodeHeader(value: string) {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function encodeBody(value: string) {
  const encoded = Buffer.from(value, "utf8").toString("base64");
  return encoded.match(/.{1,76}/g)?.join("\r\n") ?? "";
}

function createMimeMessage(message: EmailMessage) {
  const boundary = `devprodigee-${randomUUID()}`;
  const messageIdDomain = message.from.split("@")[1] || "devprodigee.com";
  const headers = [
    `From: ${encodeHeader(message.fromName)} <${message.from}>`,
    `To: ${message.to.join(", ")}`,
    `Reply-To: ${message.replyTo}`,
    `Subject: ${encodeHeader(message.subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${randomUUID()}@${messageIdDomain}>`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ];

  return [
    ...headers,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    encodeBody(message.text),
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    encodeBody(message.html),
    `--${boundary}--`,
    "",
  ].join("\r\n");
}

export async function sendSmtpEmail(options: SmtpOptions, message: EmailMessage) {
  const socket = tls.connect({
    host: options.host,
    port: options.port,
    servername: options.host,
    rejectUnauthorized: true,
  });

  socket.setTimeout(20_000);

  let buffer = "";
  let replyLines: string[] = [];
  const replyQueue: SmtpReply[] = [];
  const waiters: Array<(reply: SmtpReply) => void> = [];
  let socketError: Error | null = null;

  function pushReply(reply: SmtpReply) {
    const waiter = waiters.shift();
    if (waiter) waiter(reply);
    else replyQueue.push(reply);
  }

  socket.on("data", (chunk) => {
    buffer += chunk.toString("utf8");
    let lineEnd = buffer.indexOf("\r\n");

    while (lineEnd !== -1) {
      const line = buffer.slice(0, lineEnd);
      buffer = buffer.slice(lineEnd + 2);
      replyLines.push(line);

      if (/^\d{3} /.test(line)) {
        const code = Number(line.slice(0, 3));
        pushReply({ code, message: replyLines.join("\n") });
        replyLines = [];
      }

      lineEnd = buffer.indexOf("\r\n");
    }
  });

  socket.on("error", (error) => {
    socketError = error;
  });

  const nextReply = () => new Promise<SmtpReply>((resolve, reject) => {
    if (socketError) {
      reject(socketError);
      return;
    }

    const queued = replyQueue.shift();
    if (queued) {
      resolve(queued);
      return;
    }

    const timeout = setTimeout(() => {
      reject(new Error("SMTP server response timed out."));
    }, 20_000);

    waiters.push((reply) => {
      clearTimeout(timeout);
      resolve(reply);
    });
  });

  const expect = async (allowedCodes: number[], label: string) => {
    const reply = await nextReply();
    if (!allowedCodes.includes(reply.code)) {
      throw new Error(`${label} failed (${reply.code}): ${reply.message}`);
    }
    return reply;
  };

  const command = async (value: string, allowedCodes: number[], label: string) => {
    socket.write(`${value}\r\n`);
    return expect(allowedCodes, label);
  };

  try {
    await new Promise<void>((resolve, reject) => {
      if (socket.readyState === "open") {
        resolve();
        return;
      }
      socket.once("secureConnect", resolve);
      socket.once("error", reject);
    });

    await expect([220], "SMTP greeting");
    await command(`EHLO ${options.host}`, [250], "EHLO");
    await command("AUTH LOGIN", [334], "SMTP authentication");
    await command(Buffer.from(options.username).toString("base64"), [334], "SMTP username");
    await command(Buffer.from(options.password).toString("base64"), [235], "SMTP password");
    await command(`MAIL FROM:<${message.from}>`, [250], "MAIL FROM");

    for (const recipient of message.to) {
      await command(`RCPT TO:<${recipient}>`, [250, 251], `RCPT TO ${recipient}`);
    }

    await command("DATA", [354], "DATA");
    const mimeMessage = createMimeMessage(message)
      .split("\r\n")
      .map((line) => (line.startsWith(".") ? `.${line}` : line))
      .join("\r\n");
    socket.write(`${mimeMessage}\r\n.\r\n`);
    await expect([250], "Message delivery");
    await command("QUIT", [221], "QUIT");
  } finally {
    socket.end();
    socket.destroy();
  }
}

import { NextResponse } from "next/server";
import { sendSmtpEmail } from "@/lib/smtp";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function cleanTextList(value: unknown, maxItems: number, maxLength: number) {
  if (Array.isArray(value)) {
    return value
      .map((item) => cleanText(item, maxLength))
      .filter(Boolean)
      .slice(0, maxItems);
  }

  const singleValue = cleanText(value, maxLength);
  return singleValue ? [singleValue] : [];
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // A filled honeypot normally indicates an automated spam submission.
    if (cleanText(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = cleanText(body.name, 100);
    const email = cleanText(body.email, 180).toLowerCase();
    const company = cleanText(body.company, 150);
    const platform = cleanText(body.platform, 100);
    const selectedServices = cleanTextList(body.services ?? body.service, 8, 150);
    const service = selectedServices.join(", ");
    const message = cleanText(body.message, 5000);
    const consent = body.consent === true;

    if (!name || !EMAIL_PATTERN.test(email) || !service || !message || !consent) {
      return NextResponse.json(
        { ok: false, error: "Please complete all required fields with valid information." },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST ?? "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT ?? "465");
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? smtpUser;
    const recipients = (process.env.CONTACT_TO_EMAILS ?? "usman@devprodigee.com,yahya@devprodigee.com")
      .split(",")
      .map((item) => item.trim())
      .filter((item) => EMAIL_PATTERN.test(item));

    if (!smtpUser || !smtpPassword || !fromEmail || recipients.length === 0 || !Number.isFinite(smtpPort)) {
      console.error("Contact form SMTP environment variables are incomplete.");
      return NextResponse.json(
        { ok: false, error: "The enquiry service is temporarily unavailable. Please try again shortly." },
        { status: 503 },
      );
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      company: escapeHtml(company || "Not provided"),
      platform: escapeHtml(platform || "Not selected"),
      service: escapeHtml(service),
      message: escapeHtml(message).replaceAll("\n", "<br />"),
    };

    const subject = `New website enquiry from ${name}${company ? ` — ${company}` : ""}`;
    const text = [
      "A new project enquiry was submitted on DevProdigee.com.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Primary platform: ${platform || "Not selected"}`,
      `Services: ${service}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    const html = `
      <div style="margin:0;background:#f4f7fb;padding:32px;font-family:Arial,sans-serif;color:#2b3543">
        <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #dfe6ee;border-radius:18px;overflow:hidden">
          <div style="background:#2b3543;padding:24px 28px;color:#ffffff">
            <div style="font-size:12px;letter-spacing:1.8px;text-transform:uppercase;color:#8fc2ff;font-weight:700">DevProdigee website</div>
            <h1 style="margin:8px 0 0;font-size:24px;line-height:1.3">New project enquiry</h1>
          </div>
          <div style="padding:28px">
            <table role="presentation" style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6">
              <tr><td style="padding:8px 0;color:#718096;width:150px">Full name</td><td style="padding:8px 0;font-weight:700">${safe.name}</td></tr>
              <tr><td style="padding:8px 0;color:#718096">Work email</td><td style="padding:8px 0;font-weight:700"><a href="mailto:${safe.email}" style="color:#166cd2">${safe.email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#718096">Company</td><td style="padding:8px 0;font-weight:700">${safe.company}</td></tr>
              <tr><td style="padding:8px 0;color:#718096">Primary platform</td><td style="padding:8px 0;font-weight:700">${safe.platform}</td></tr>
              <tr><td style="padding:8px 0;color:#718096">Requested services</td><td style="padding:8px 0;font-weight:700">${safe.service}</td></tr>
            </table>
            <div style="margin-top:22px;border-top:1px solid #e7edf4;padding-top:22px">
              <div style="font-size:12px;letter-spacing:1.4px;text-transform:uppercase;color:#718096;font-weight:700">Project details</div>
              <p style="margin:10px 0 0;font-size:15px;line-height:1.75">${safe.message}</p>
            </div>
          </div>
        </div>
      </div>`;

    await sendSmtpEmail(
      { host: smtpHost, port: smtpPort, username: smtpUser, password: smtpPassword },
      {
        from: fromEmail,
        fromName: "DevProdigee Website",
        to: recipients,
        replyTo: email,
        subject,
        text,
        html,
      },
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact enquiry delivery failed:", error);
    return NextResponse.json(
      { ok: false, error: "We could not send your enquiry. Please try again in a moment." },
      { status: 500 },
    );
  }
}

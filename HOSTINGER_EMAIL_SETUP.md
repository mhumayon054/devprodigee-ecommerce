# Contact Form Email Setup

The updated contact form sends enquiries directly to:

- usman@devprodigee.com
- yahya@devprodigee.com

Before deploying, add these environment variables in Vercel or your Node.js hosting panel:

```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=hello@devprodigee.com
SMTP_PASSWORD=YOUR_HOSTINGER_MAILBOX_PASSWORD
CONTACT_FROM_EMAIL=hello@devprodigee.com
CONTACT_TO_EMAILS=usman@devprodigee.com,yahya@devprodigee.com
```

`SMTP_USER` and `CONTACT_FROM_EMAIL` should be a real Hostinger mailbox. You may use `usman@devprodigee.com` instead of `hello@devprodigee.com` if that is the mailbox whose password you have.

After adding the variables, redeploy the site and submit one test enquiry. The visitor's email app will not open; the form sends from the server.

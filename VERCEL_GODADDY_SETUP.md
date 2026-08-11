# DevProdigee eCommerce — Vercel + GoDaddy Setup

Production domain: `devprodigee-ecommerce.com`

## 1. Add the domain in Vercel

1. Open the Vercel project where this website is already deployed.
2. Go to **Settings → Domains**.
3. Add `devprodigee-ecommerce.com`.
4. Also add `www.devprodigee-ecommerce.com`.
5. Vercel will show the exact DNS records required for the project. Use the values shown by Vercel as the source of truth.

Typical Vercel configuration for external DNS is:

- Apex/root (`@`) → `A` record to the IP Vercel shows (commonly `76.76.21.21`).
- `www` → `CNAME` to the Vercel CNAME target shown in the dashboard (commonly a `cname.vercel-dns-*.com` value).

## 2. Configure DNS in GoDaddy

1. Open GoDaddy → Domain Portfolio → `devprodigee-ecommerce.com` → **DNS**.
2. Remove or replace conflicting website records for `@` and `www` only.
3. Add the exact `A` and `CNAME` values Vercel shows.
4. Do **not** delete MX/TXT records that belong to email once email is configured.
5. Return to Vercel and wait until the domain shows **Valid Configuration**.

## 3. Production environment variable in Vercel

Add this in **Vercel → Project → Settings → Environment Variables**:

```env
NEXT_PUBLIC_SITE_URL=https://devprodigee-ecommerce.com
```

Then redeploy the project.

## 4. SMTP/contact form

The contact form is already wired to `/api/contact` and supports SMTP through environment variables. When the mailbox details are available, add these values in Vercel:

```env
SMTP_HOST=
SMTP_PORT=465
SMTP_USER=
SMTP_PASSWORD=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAILS=
```

`CONTACT_TO_EMAILS` can contain multiple recipient addresses separated by commas.

After adding SMTP values, redeploy and submit a test enquiry from the Contact page.

## 5. Logo

The shared logo component now uses:

`public/logo.webp`

That automatically updates the navbar, footer and 404 page because they all use the same `LogoMark` component.

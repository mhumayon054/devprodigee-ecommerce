# DevProdigee eCommerce: Vercel and DNS Setup

Production domain: `ecommerce.devprodigee.com`

## 1. Add the domain in Vercel

1. Open the Vercel project where this website is already deployed.
2. Go to **Settings > Domains**.
3. Add `ecommerce.devprodigee.com`.
4. Confirm Vercel displays the required DNS target for the subdomain.
5. Vercel will show the exact DNS records required for the project. Use the values shown by Vercel as the source of truth.

For this subdomain, Vercel normally requests a `CNAME` record for host `ecommerce`. Always use the exact target shown in the Vercel dashboard.

## 2. Configure DNS in GoDaddy

1. Open the DNS manager for `devprodigee.com`.
2. Find any existing record with host `ecommerce`.
3. Add or update the `ecommerce` CNAME using the exact value Vercel shows.
4. Do **not** delete MX/TXT records that belong to email once email is configured.
5. Return to Vercel and wait until the domain shows **Valid Configuration**.

## 3. Production environment variable in Vercel

Add this in **Vercel > Project > Settings > Environment Variables**:

```env
NEXT_PUBLIC_SITE_URL=https://ecommerce.devprodigee.com
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

`public/logo-original.webp`

That automatically updates the navbar, footer and 404 page because they all use the same `LogoMark` component.

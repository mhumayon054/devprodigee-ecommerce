# DevProdigee eCommerce — Next.js Website

A responsive multi-page eCommerce growth agency website built in **Next.js 16, React 19, TypeScript and Tailwind CSS**.

The project is a React/Next.js implementation. It does not contain Vue or Nuxt code.

## Pages

- Home
- Services
- Portfolio and detailed eBay case studies
- About Us
- Contact Us
- Custom 404 and runtime error pages
- Automatically generated `sitemap.xml` and `robots.txt`

## Brand system

- Primary colour: `#166CD2`
- Dark colour: `#2B3543`
- Font: Nunito Sans
- Allowed font weights: 400, 500, 600 and 700
- Responsive floating navigation inspired by the supplied DevProdigee reference

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 3
- Next Image
- Next Font
- Server Components by default
- Client Components only for navigation, FAQs and the contact form

## Run locally

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the detected framework as Next.js.
4. Add `NEXT_PUBLIC_SITE_URL` with the final production domain.
5. Deploy.

## Main editable files

### Content and contact details

`data/site.ts`

This file contains:

- Navigation
- Platform list
- Services
- Process steps
- Case studies and metrics
- General FAQs
- Platform-specific FAQs
- Company email and location

### Placeholder logo

`components/logo-mark.tsx`

Replace the placeholder mark with your final logo. A recommended approach is to place the final logo in `public/` and render it using `next/image`.

### Colours and global styles

`app/globals.css` and `tailwind.config.ts`

### Page files

- `app/page.tsx`
- `app/services/page.tsx`
- `app/portfolio/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`

### Case-study images

`public/case-studies/`

## Contact form behaviour

The contact form now submits through the server and sends each enquiry directly through Hostinger SMTP. It does not open the visitor's email application. By default, enquiries are delivered to:

- `usman@devprodigee.com`
- `yahya@devprodigee.com`

Configure the SMTP mailbox in your hosting environment using the variables shown in `.env.example`:

```bash
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=hello@devprodigee.com
SMTP_PASSWORD=your-mailbox-password
CONTACT_FROM_EMAIL=hello@devprodigee.com
CONTACT_TO_EMAILS=usman@devprodigee.com,yahya@devprodigee.com
```

The SMTP password is intentionally not stored in the ZIP. Add it in Vercel/Hostinger environment variables before deploying.

## SEO included

- Page-specific metadata
- Open Graph metadata
- JSON-LD organisation schema
- `sitemap.xml`
- `robots.txt`
- Semantic headings
- Descriptive case-study image alt text

## Before going live

Update these items:

1. Final logo
2. Company email and phone details
3. Final production domain in `NEXT_PUBLIC_SITE_URL`
4. Approved portfolio screenshots and client permissions
5. Privacy policy and terms pages if required
6. Analytics and conversion tracking
7. A production form-delivery provider if email-client submission is not sufficient

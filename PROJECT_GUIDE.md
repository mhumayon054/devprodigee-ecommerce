# Project Guide

## Architecture

The site uses the Next.js App Router.

- `app/` contains routes, page metadata and global files.
- `components/` contains reusable React components.
- `data/site.ts` is the central content source.
- `public/` contains static images and the favicon.

Pages and layouts are React Server Components by default. Components that require state or browser APIs begin with `"use client"`.

## Content workflow

Edit structured content in `data/site.ts` instead of duplicating it across pages. This keeps service cards, navigation, footer links, platform sections, FAQs and portfolio content consistent.

## Adding a case study

1. Add the approved performance image to `public/case-studies/`.
2. Add a new object to `caseStudies` in `data/site.ts`.
3. Include a unique `id`, image path, metrics, challenge, solution and result.
4. The portfolio summary and detailed section will render automatically.

## Replacing the logo

Edit `components/logo-mark.tsx`. Keep the outer Link and accessible label, then replace the placeholder elements with a Next Image component.

## Connecting the contact form

The current form uses a mailto workflow. For server delivery:

1. Create `app/api/contact/route.ts` or a Server Action.
2. Validate and sanitise all incoming fields on the server.
3. Connect an email provider or CRM using environment variables.
4. Add spam protection and rate limiting.
5. Update `components/contact-form.tsx` to submit with `fetch` or the Server Action.

Never expose secret API keys in variables prefixed with `NEXT_PUBLIC_`.

## Design rules

- Use `#166CD2` for primary actions and emphasis.
- Use `#2B3543` for dark surfaces and headings.
- Keep Nunito Sans weights at 400, 500, 600 or 700.
- Reuse `container-shell` and `section-space` for consistent layout spacing.
- Prefer reusable cards and data-driven rendering over duplicated markup.

## Quality checks

Run before deployment:

```bash
npm run lint
npm run build
```

Then test every route at mobile, tablet and desktop widths, submit the contact form, review all links and verify the final production metadata.

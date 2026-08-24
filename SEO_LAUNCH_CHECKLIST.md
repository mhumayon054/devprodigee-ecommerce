# DevProdigee SEO Launch Checklist

## Production domain

- Keep `NEXT_PUBLIC_SITE_URL=https://ecommerce.devprodigee.com` in the production environment.
- Do not add a trailing slash to the value.
- Deploy the project before submitting the new sitemap.

## Google Search Console

1. Open Google Search Console and add `https://ecommerce.devprodigee.com` as a URL-prefix property.
2. Select the HTML tag verification method.
3. Copy only the token from the `content` attribute into `GOOGLE_SITE_VERIFICATION`.
4. Deploy again and complete verification.
5. Submit `https://ecommerce.devprodigee.com/sitemap.xml` in the Sitemaps report.
6. Inspect the homepage, services page and the main platform service pages.
7. Request indexing after the deployed HTML has been verified.

## Bing Webmaster Tools

1. Add the live domain.
2. Add the Bing verification token to `BING_SITE_VERIFICATION`.
3. Deploy and submit the same sitemap.

## Google Analytics 4

1. Create or select the GA4 web data stream for the live domain.
2. Add its measurement ID to `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
3. Deploy and confirm page views in Realtime.
4. Submit the contact form once and confirm the `generate_lead` event.
5. Mark `generate_lead` as a key event in GA4.

## After deployment

- Confirm every page returns HTTP 200.
- Confirm one unique canonical URL appears in each page source.
- Confirm `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` and `/opengraph-image` load successfully.
- Run the homepage and important service pages through PageSpeed Insights.
- Run structured data pages through Google's Rich Results Test and Schema Markup Validator.
- Replace any temporary team or case-study assets when verified client material is available.

## Ranking work that continues after launch

- Publish genuine case studies with client permission.
- Earn links from relevant business profiles, partners and industry publications.
- Add useful content only when it answers a real client question.
- Review Search Console queries monthly and improve pages using actual impressions and clicks.
- Avoid copied location pages, repeated content and artificial keyword repetition.

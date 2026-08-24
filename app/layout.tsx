import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/app/globals.css";
import { GoogleAnalytics } from "@/components/google-analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, jsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const isIndexable = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "eCommerce Marketplace Management Agency | DevProdigee",
    template: "%s | DevProdigee eCommerce",
  },
  description: "Marketplace management, eCommerce development, listing optimisation, PPC and reporting across Amazon, eBay, Walmart, Shopify, Etsy, TikTok Shop and WooCommerce.",
  applicationName: SITE_NAME,
  authors: [{ name: "DevProdigee eCommerce", url: SITE_URL }],
  creator: "DevProdigee eCommerce",
  publisher: "DevProdigee",
  category: "eCommerce services",
  keywords: [
    "eCommerce marketplace management agency",
    "marketplace management services",
    "Amazon account management",
    "eBay account management",
    "Shopify development agency",
    "WooCommerce development services",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: {
      index: isIndexable,
      follow: isIndexable,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "eCommerce Marketplace Management Agency | DevProdigee",
    description: "Marketplace management, storefront development and measurable growth support for eCommerce brands.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_GB",
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "DevProdigee eCommerce marketplace growth agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Marketplace Management Agency | DevProdigee",
    description: "Marketplace management, storefront development and measurable growth support for eCommerce brands.",
    images: [absoluteUrl("/opengraph-image")],
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
      alternateName: "DevProdigee",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo-original.webp") },
      image: absoluteUrl("/opengraph-image"),
      email: "hello@devprodigee.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@devprodigee.com",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Urdu"],
      },
      knowsAbout: ["eCommerce", "Amazon Seller Central", "eBay Seller Hub", "Walmart Marketplace", "Shopify", "WooCommerce", "Etsy", "TikTok Shop"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${nunitoSans.variable} min-h-screen bg-white font-sans text-[#2B3543] antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(siteSchema)} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <GoogleAnalytics />
      </body>
    </html>
  );
}

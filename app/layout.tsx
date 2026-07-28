import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://devprodigee.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DevProdigee eCommerce | Marketplace Growth Agency",
    template: "%s | DevProdigee eCommerce",
  },
  description: "End-to-end marketplace management, eCommerce development, listing optimisation, advertising and growth support across Amazon, Walmart, Shopify, TikTok Shop, Etsy, eBay and WooCommerce.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "DevProdigee eCommerce",
    description: "Marketplace strategy, store development and performance growth for ambitious eCommerce brands.",
    type: "website",
  },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DevProdigee eCommerce",
  url: siteUrl,
  email: "hello@devprodigee.com",
  areaServed: "Worldwide",
  serviceType: [
    "eCommerce marketplace management",
    "Shopify development",
    "WooCommerce development",
    "Marketplace listing optimisation",
    "PPC advertising",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${nunitoSans.variable} min-h-screen bg-white font-sans text-[#2B3543] antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

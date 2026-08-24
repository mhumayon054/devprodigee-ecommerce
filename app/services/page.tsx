import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppIcon } from "@/components/app-icon";
import { FaqList } from "@/components/faq-list";
import { PrimaryButton } from "@/components/primary-button";
import { ServiceExplorer } from "@/components/service-explorer";
import { platformPageHrefs, seoServicePages } from "@/data/seo-services";
import { faqs, platforms } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, createPageMetadata, faqSchema, jsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "eCommerce Marketplace Services",
  description: "Marketplace management, Shopify and WooCommerce development, listing optimisation, PPC, creative and reporting for growing eCommerce brands.",
  path: "/services",
  keywords: ["eCommerce services agency", "marketplace management services", "eCommerce growth services"],
});

const trustBar = [
  { value: "7", label: "Commerce platforms" },
  { value: "6", label: "Specialist capabilities" },
  { value: "Flexible", label: "Project or ongoing scope" },
  { value: "100%", label: "Client asset ownership" },
];

const orbitPlatforms = [
  { ...platforms.find((platform) => platform.name === "Amazon")!, position: "left-1/2 top-[18%]" },
  { ...platforms.find((platform) => platform.name === "eBay")!, position: "left-[24%] top-[31%]" },
  { ...platforms.find((platform) => platform.name === "Walmart")!, position: "left-[76%] top-[31%]" },
  { ...platforms.find((platform) => platform.name === "Etsy")!, position: "left-[15%] top-[54%]" },
  { ...platforms.find((platform) => platform.name === "Shopify")!, position: "left-[85%] top-[54%]" },
  { ...platforms.find((platform) => platform.name === "WooCommerce")!, position: "left-[31%] top-[77%]" },
  { ...platforms.find((platform) => platform.name === "TikTok Shop")!, position: "left-[69%] top-[77%]" },
];

const engagementOptions = [
  {
    number: "01",
    title: "Build a new channel",
    description: "For a new store, marketplace or product range.",
    points: ["Platform setup and configuration", "Catalogue and content preparation", "Launch checks and handover"],
  },
  {
    number: "02",
    title: "Improve what is live",
    description: "For an active channel that is underperforming.",
    points: ["Focused audit of the current issue", "Prioritised fixes and implementation", "Performance review after changes"],
  },
  {
    number: "03",
    title: "Manage day to day",
    description: "For brands that need reliable ongoing support.",
    points: ["Agreed monthly priorities", "Specialist execution across channels", "Clear reporting and next actions"],
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Define the priority",
    points: ["Business goal and current bottleneck", "Platform, catalogue and access requirements"],
  },
  {
    number: "02",
    title: "Agree the scope",
    points: ["Deliverables, ownership and approvals", "Timeline and reporting rhythm"],
  },
  {
    number: "03",
    title: "Execute and improve",
    points: ["Work completed by the relevant specialists", "Results reviewed before the next priority"],
  },
];

const metrics = [
  { value: "100%", label: "Year-over-year growth" },
  { value: "£1,716.15", label: "Gross sales" },
  { value: "301", label: "Units sold" },
];

const selectedFaqQuestions = new Set([
  "What services do you offer?",
  "Which marketplaces and platforms do you support?",
  "Can you improve an existing store instead of rebuilding it?",
  "Do you offer custom packages?",
  "Will I receive reports and retain ownership of my assets?",
]);

const serviceFaqs = faqs.filter((faq) => selectedFaqQuestions.has(faq.question));

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/services")}#webpage`,
    url: absoluteUrl("/services"),
    name: "eCommerce Marketplace Services",
    description: "Marketplace management, store development, listing optimisation, PPC, creative and analytics services.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: seoServicePages.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.metaTitle,
        url: absoluteUrl(`/services/${service.slug}`),
      })),
    },
  };

  return (
    <div className="overflow-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([
        servicesSchema,
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]),
        faqSchema(serviceFaqs),
      ])} />
      <section className="relative border-b border-slate-200 bg-[#f4f8fc] pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="surface-grid absolute inset-0 opacity-60" />
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#166CD2]/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />

        <div className="container-shell relative grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#166CD2]">eCommerce Services</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#2B3543] sm:text-5xl lg:text-[58px]">
              One eCommerce team for marketplace operations, storefronts and growth.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              DevProdigee handles the specialist work behind selling online, from daily account management to development, content, paid media and reporting.
            </p>

            <ul className="mt-7 grid max-w-4xl gap-3 border-y border-slate-300 py-5 sm:grid-cols-3 sm:gap-6">
              {["Start with one clear priority", "Add specialist support as needed", "Keep full control of your accounts"].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm font-semibold leading-6 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#166CD2]" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact" arrow>Discuss your requirements</PrimaryButton>
              <PrimaryButton href="#core-services" variant="outline">Explore services</PrimaryButton>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[550px] lg:justify-self-end">
            <div className="commerce-orbit relative aspect-[1.08/1] overflow-hidden rounded-[28px] border border-white bg-white/75 shadow-[0_24px_70px_rgba(43,53,67,0.11)] backdrop-blur-sm">
              <div className="absolute inset-x-0 top-[4.5%] z-20 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#166CD2] sm:text-xs">Connected Commerce</p>
              </div>

              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 540 500" aria-hidden="true">
                <defs>
                  <radialGradient id="orbit-glow">
                    <stop offset="0" stopColor="#166cd2" stopOpacity="0.12" />
                    <stop offset="1" stopColor="#166cd2" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="270" cy="270" r="148" fill="none" stroke="#bfdbfe" strokeDasharray="4 6" />
                <circle cx="270" cy="270" r="112" fill="url(#orbit-glow)" />
                <g stroke="#93c5fd" strokeWidth="1.4">
                  <line x1="270" y1="270" x2="270" y2="90" />
                  <line x1="270" y1="270" x2="130" y2="155" />
                  <line x1="270" y1="270" x2="410" y2="155" />
                  <line x1="270" y1="270" x2="82" y2="270" />
                  <line x1="270" y1="270" x2="458" y2="270" />
                  <line x1="270" y1="270" x2="168" y2="385" />
                  <line x1="270" y1="270" x2="372" y2="385" />
                </g>
                <g fill="#166cd2" stroke="#ffffff" strokeWidth="4">
                  <circle cx="270" cy="169" r="6" />
                  <circle cx="180" cy="196" r="6" />
                  <circle cx="360" cy="196" r="6" />
                  <circle cx="158" cy="270" r="6" />
                  <circle cx="382" cy="270" r="6" />
                  <circle cx="203" cy="341" r="6" />
                  <circle cx="337" cy="341" r="6" />
                </g>
              </svg>

              <div className="absolute left-1/2 top-[54%] z-10 flex h-[35%] w-[32%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-300 bg-white shadow-[0_0_0_10px_rgba(239,246,255,0.88),0_18px_45px_rgba(22,108,210,0.15)]">
                <div className="text-center">
                  <Image src="/icon.webp" alt="DevProdigee" width={86} height={86} className="mx-auto h-auto w-[39%] min-w-10 object-contain" priority />
                  <strong className="mt-2 block text-[7px] font-bold uppercase leading-none text-[#315fae] sm:text-[9px]">DevProdigee</strong>
                  <span className="mt-1 block text-[5px] font-bold uppercase tracking-[0.22em] text-[#166CD2] sm:text-[7px]">Commerce Hub</span>
                </div>
              </div>

              {orbitPlatforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platformPageHrefs[platform.name] ?? "/services"}
                  aria-label={`View ${platform.name} services`}
                  className={`absolute z-10 flex h-[18%] w-[17%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white p-[3%] shadow-[0_12px_34px_rgba(43,53,67,0.09)] ${platform.position}`}
                >
                  <div className="flex w-full items-center justify-center gap-1">
                    <Image
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      width={120}
                      height={44}
                      className="h-auto max-h-9 w-full object-contain"
                    />
                    {platform.qualifier ? <span className="shrink-0 text-[5px] font-extrabold leading-none text-slate-900 sm:text-[7px]">{platform.qualifier}</span> : null}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-200">
        <div className="container-shell grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
          {trustBar.map((item) => (
            <div key={item.label} className="bg-white px-4 py-5 text-center sm:px-5 sm:py-6">
              <strong className="block text-xl font-bold text-[#2B3543] sm:text-2xl">{item.value}</strong>
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="core-services" className="scroll-mt-24 py-14 sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Explore our capabilities</p>
              <h2 className="mt-3 text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#2B3543] sm:text-5xl">Choose the support your business needs.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 lg:justify-self-end">
              Select a service to see its best fit, practical outcome and included work without scrolling through repeated sections.
            </p>
          </div>
          <ServiceExplorer />
        </div>
      </section>

      <section className="bg-[#2B3543] py-14 text-white sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Ways we can work together</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[52px]">Choose the level of support that fits.</h2>
          </div>

          <div className="mt-10 grid border-y border-white/15 lg:grid-cols-3">
            {engagementOptions.map((option, index) => (
              <article key={option.number} className={`py-7 lg:px-8 ${index < engagementOptions.length - 1 ? "border-b border-white/15 lg:border-b-0 lg:border-r" : ""} lg:first:pl-0 lg:last:pr-0`}>
                <span className="text-sm font-bold text-blue-300">{option.number}</span>
                <h3 className="mt-3 text-2xl font-bold">{option.title}</h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-white">{option.description}</p>
                <ul className="mt-4 grid gap-2.5">
                  {option.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Selected client result</p>
              <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#2B3543] sm:text-5xl">Measured marketplace progress.</h2>
            </div>
            <div className="grid grid-cols-3 border-y border-slate-300 lg:justify-self-end">
              {metrics.map((metric) => (
                <div key={metric.label} className="py-4 pr-5 sm:pr-8">
                  <strong className="block text-xl font-bold text-[#2B3543] sm:text-2xl">{metric.value}</strong>
                  <span className="mt-1 block text-[10px] font-semibold leading-4 uppercase tracking-[0.08em] text-slate-500">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <figure className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-white p-2 shadow-[0_18px_55px_rgba(43,53,67,0.1)] sm:p-3">
            <Image
              src="/case-studies/ebay-case-1.png"
              alt="Complete eBay Seller Hub report showing annual sales and quantity sold"
              width={1564}
              height={591}
              className="h-auto w-full rounded-[16px]"
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          </figure>

          <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <ul className="grid gap-3 sm:grid-cols-3 sm:gap-6">
              {["Listings refined using search and Seller Hub data", "Inventory and order workflows organised", "Performance reviewed against the previous period"].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                  <AppIcon name="check" size={16} className="mt-1 shrink-0 text-emerald-600" />
                  {point}
                </li>
              ))}
            </ul>
            <PrimaryButton href="/portfolio#ebay-transformation" variant="outline" arrow>View the complete case study</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">From requirement to delivery</p>
              <h2 className="mt-3 text-4xl font-bold leading-none tracking-[-0.045em] text-[#2B3543] sm:text-5xl lg:text-[54px]">How Service Delivery Works</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-600">A clear scope, visible ownership and practical next steps throughout the engagement.</p>
          </div>

          <div className="mt-9 grid border-y border-slate-300 md:grid-cols-3">
            {deliverySteps.map((step) => (
              <article key={step.number} className="border-b border-slate-200 py-7 md:border-b-0 md:border-r md:px-7 md:last:border-r-0 md:first:pl-0 md:last:pr-0">
                <span className="text-sm font-bold text-[#166CD2]">{step.number}</span>
                <h3 className="mt-3 text-xl font-bold text-[#2B3543]">{step.title}</h3>
                <ul className="mt-4 grid gap-2.5">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#166CD2]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="container-shell grid gap-9 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Before we start</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#2B3543] sm:text-5xl">Common Service Questions</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">Short answers about scope, platforms, ownership and ongoing support.</p>
          </div>
          <FaqList items={serviceFaqs} />
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#166CD2] px-6 py-10 text-white shadow-[0_22px_65px_rgba(22,108,210,0.22)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Start with the current challenge</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">Tell us what is slowing the store, marketplace or team down.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50 sm:text-base">We will help you define a focused scope based on the platform, priority and result you need.</p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0"><PrimaryButton href="/contact" variant="white" arrow>Discuss your requirements</PrimaryButton></div>
        </div>
      </section>
    </div>
  );
}

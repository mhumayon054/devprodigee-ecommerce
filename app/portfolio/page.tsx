import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppIcon } from "@/components/app-icon";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { PrimaryButton } from "@/components/primary-button";
import { caseStudies, platforms } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, createPageMetadata, jsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "eCommerce Portfolio and Case Studies",
  description: "Explore marketplace case studies covering eBay sales growth, listing visibility, account operations, Seller Hub reporting and measurable results.",
  path: "/portfolio",
  keywords: ["eCommerce case studies", "marketplace management portfolio", "eBay account management case study"],
});

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${absoluteUrl("/portfolio")}#webpage`,
  url: absoluteUrl("/portfolio"),
  name: "DevProdigee eCommerce Portfolio and Case Studies",
  description: "Published marketplace evidence covering sales, listing visibility, orders and operating improvements.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: caseStudies.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: study.title,
      url: absoluteUrl(`/portfolio/${study.id}`),
    })),
  },
};

const overviewMetrics = [
  { value: "100%", label: "Year-over-year growth" },
  { value: "£1,716", label: "Gross sales recorded" },
  { value: "3.18M+", label: "Listing impressions" },
  { value: "301", label: "Units sold" },
];

const capabilities = [
  "Marketplace management",
  "Listing optimisation",
  "Seller Hub analytics",
  "Inventory workflows",
];

export default function PortfolioPage() {
  const ebay = platforms.find((platform) => platform.name === "eBay");

  return (
    <div className="overflow-hidden bg-[#fbfcff]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([
        portfolioSchema,
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }]),
      ])} />
      <section className="portfolio-hero relative min-h-[760px] border-b border-blue-100/70 pb-16 pt-28 sm:pt-32 lg:min-h-[850px] lg:pb-24 lg:pt-36">
        <div className="surface-grid absolute inset-0 opacity-30" />
        <div className="absolute -left-36 top-36 h-96 w-96 rounded-full bg-violet-300/20 blur-3xl" />
        <div className="absolute -right-28 bottom-12 h-[430px] w-[430px] rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="container-shell relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold text-[#315fae] shadow-sm backdrop-blur-sm transition hover:border-blue-300">
              <AppIcon name="arrow" size={15} className="rotate-180" /> Back to Home
            </Link>

            <p className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#202936] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> Our Portfolio
            </p>
            <h1 className="mt-6 max-w-2xl text-5xl font-bold leading-[.98] tracking-[-0.055em] text-[#202936] sm:text-6xl lg:text-[72px]">
              Marketplace work that moved the numbers.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Real reporting, clear commercial context and the work completed behind every published result.
            </p>

            <div className="mt-9 grid max-w-[540px] grid-cols-2 gap-3">
              {overviewMetrics.map((metric, index) => (
                <div key={metric.label} className="group relative overflow-hidden rounded-2xl border border-white bg-white/90 px-5 py-5 shadow-[0_12px_36px_rgba(43,53,67,0.08)] backdrop-blur-sm sm:px-6">
                  <span className="absolute -bottom-3 right-3 text-5xl font-bold text-[#166CD2]/[0.035]">0{index + 1}</span>
                  <strong className={`relative block text-3xl font-bold tracking-[-0.04em] ${index % 2 === 0 ? "text-[#166CD2]" : "text-[#202936]"}`}>{metric.value}</strong>
                  <span className="relative mt-2 block border-t border-slate-200 pt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm">
              {ebay ? <Image src={ebay.logo} alt="eBay" width={48} height={24} className="h-5 w-12 object-contain" /> : null}
              <span className="h-5 w-px bg-slate-200" />
              <span className="text-[11px] font-semibold text-slate-600">Evidence from supplied Seller Hub reports</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[660px] lg:justify-self-end">
            <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-br from-[#166CD2]/10 via-white/60 to-cyan-200/20 blur-xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-white bg-white/80 p-3 shadow-[0_28px_90px_rgba(31,54,88,0.16)] backdrop-blur-md sm:p-5">
              <div className="flex items-center justify-between px-2 pb-4 pt-1">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#166CD2]">Featured transformation</p>
                  <p className="mt-1 text-sm font-bold text-[#202936]">eBay marketplace growth programme</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-700">Verified result</span>
              </div>
              <div className="relative aspect-[1.8/1] overflow-hidden rounded-[20px] border border-slate-200 bg-[#f6f8fb]">
                <Image
                  src="/case-studies/ebay-before-after.png"
                  alt="eBay marketplace before and after performance evidence"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 94vw"
                  className="object-contain p-3 sm:p-5"
                />
              </div>
              <div className="grid grid-cols-3 divide-x divide-slate-200 px-2 py-5 text-center">
                <div><strong className="block text-xl font-bold text-[#166CD2] sm:text-2xl">100%</strong><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.08em] text-slate-500">YoY growth</span></div>
                <div><strong className="block text-xl font-bold text-[#202936] sm:text-2xl">301</strong><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.08em] text-slate-500">Units sold</span></div>
                <div><strong className="block text-xl font-bold text-[#166CD2] sm:text-2xl">£1.7K</strong><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.08em] text-slate-500">Gross sales</span></div>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-4 hidden rounded-2xl border border-white bg-white/90 px-5 py-4 shadow-[0_18px_48px_rgba(43,53,67,0.13)] backdrop-blur-md sm:block">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">Published proof</p>
              <p className="mt-1 text-sm font-bold text-[#202936]">Metrics with commercial context</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container-shell flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#166CD2]">Work represented</p>
            <p className="mt-1 text-sm font-semibold text-[#202936]">One connected marketplace programme, viewed through four commercial outcomes.</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {capabilities.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-[#166CD2]" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PortfolioGallery />

      <section className="border-t border-blue-100 bg-gradient-to-br from-[#eef4ff] via-[#f7f4ff] to-[#ecfbff] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-9 rounded-[30px] border border-white bg-white/75 p-7 shadow-[0_24px_70px_rgba(43,53,67,0.09)] backdrop-blur-sm sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#166CD2]">Your next growth project</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#202936] sm:text-4xl">Bring us the current numbers. We will help define what should move next.</h2>
            <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
              {["Clear starting point", "Agreed commercial priority", "Evidence-led reporting"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-600"><span className="h-1.5 w-1.5 rounded-full bg-[#166CD2]" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="lg:text-right">
            <PrimaryButton href="/contact" arrow>Discuss your project</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}

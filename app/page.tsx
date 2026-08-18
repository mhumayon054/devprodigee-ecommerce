import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppIcon, type IconName } from "@/components/app-icon";
import { CaseStudyCard } from "@/components/case-study-card";
import { PlatformStrip } from "@/components/platform-strip";
import { PrimaryButton } from "@/components/primary-button";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Marketplace Growth Agency",
  description: "Scale your eCommerce business across Amazon, Walmart, Shopify, TikTok Shop, Etsy, eBay and WooCommerce with one coordinated specialist team.",
};

const homeBenefits = [
  ["people", "One coordinated team", "Marketplace, store, creative and paid growth work together."],
  ["chart", "Commercial KPIs", "Reporting stays focused on the numbers that affect growth."],
  ["shield", "Full asset ownership", "Your accounts, website, data and approved assets remain yours."],
] as const;

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-100 pb-7 pt-24 sm:pb-8 sm:pt-28 lg:pb-9 lg:pt-28">
        <div className="hero-backdrop absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white/75 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1.08fr_.92fr] lg:gap-9">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#166CD2]/15 bg-white/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#166CD2] shadow-sm sm:text-xs">
                <AppIcon name="spark" size={15} /> Marketplace + storefront growth
              </p>
              <h1 className="mt-4 text-[34px] font-bold leading-[1.04] tracking-[-0.045em] text-[#2B3543] sm:text-[44px] lg:text-[50px]">
                Grow your eCommerce business across the channels your customers already use.
              </h1>
              <p className="mt-4 max-w-2xl text-[14px] leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-[17px]">
                We manage marketplaces, build and improve stores, optimise listings, run paid growth and turn performance data into clear next actions.
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <PrimaryButton href="/contact" arrow className="px-5 py-3">Book a free strategy call</PrimaryButton>
                <PrimaryButton href="/services#core-services" variant="outline" className="px-5 py-3">See exactly what we do</PrimaryButton>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -left-8 top-1/4 h-36 w-36 rounded-full bg-[#166CD2]/20 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl" />
              <div className="dashboard-shell relative rounded-[28px] border border-white/80 bg-white/95 p-4 shadow-[0_26px_75px_rgba(43,53,67,0.18)]">
                <div className="relative flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-slate-100 bg-white p-1.5">
                      <Image src="/logo-devprodigee-icon.png" alt="" width={208} height={305} className="h-full w-full object-contain" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#2B3543]">Commerce Growth Hub</p>
                      <p className="text-[11px] font-semibold text-slate-400">Multi-channel overview</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700">Conversion focused</span>
                </div>

                <div className="relative mt-3 grid grid-cols-3 gap-2.5">
                  <div className="rounded-2xl bg-[#2B3543] p-3 text-white">
                    <span className="text-[10px] font-semibold text-slate-300">Marketplace reach</span>
                    <strong className="mt-1.5 block text-lg font-bold">7 channels</strong>
                    <div className="mt-3 flex h-10 items-end gap-1">
                      {[22, 31, 25, 39, 34, 48, 57].map((height) => <span key={height} className="w-full rounded-t bg-blue-400/80" style={{ height: `${Math.round(height * 0.72)}px` }} />)}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                    <span className="text-[10px] font-semibold text-slate-400">Execution</span>
                    <strong className="mt-1.5 block text-lg font-bold text-[#2B3543]">One team</strong>
                    <div className="mt-3 grid h-10 place-items-center rounded-xl bg-blue-50 text-[#166CD2]"><AppIcon name="people" size={26} /></div>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                    <span className="text-[10px] font-semibold text-slate-400">Reporting</span>
                    <strong className="mt-1.5 block text-lg font-bold text-[#2B3543]">Clear KPIs</strong>
                    <div className="mt-3 grid h-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600"><AppIcon name="target" size={26} /></div>
                  </div>
                </div>

                <div className="relative mt-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#2B3543]">Performance momentum</p>
                      <p className="mt-1 text-[10px] font-semibold text-slate-400">Listings, advertising and storefront improvements</p>
                    </div>
                    <span className="rounded-lg bg-blue-50 px-2 py-1 text-[10px] font-bold text-[#166CD2]">Optimising</span>
                  </div>
                  <svg viewBox="0 0 400 95" className="mt-1.5 h-[78px] w-full" preserveAspectRatio="none" aria-label="Growth chart illustration">
                    <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#166CD2" stopOpacity=".28"/><stop offset="1" stopColor="#166CD2" stopOpacity="0"/></linearGradient></defs>
                    <path d="M0 78 C45 74 62 61 92 66 S143 62 169 48 S218 55 247 37 S302 43 331 24 S370 22 400 10 V95 H0Z" fill="url(#chartFill)"/>
                    <path d="M0 78 C45 74 62 61 92 66 S143 62 169 48 S218 55 247 37 S302 43 331 24 S370 22 400 10" fill="none" stroke="#166CD2" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-5 lg:mt-5">
            <PlatformStrip variant="compact" label="Platforms we manage & grow" />
          </div>

          <div className="mt-4 grid max-w-2xl grid-cols-3 gap-3 border-t border-slate-300/80 pt-4 lg:mt-3 lg:pt-3">
            {[
              ["7+", "commerce platforms"],
              ["360°", "growth support"],
              ["100%", "asset ownership"],
            ].map(([value, label]) => (
              <div key={label}>
                <strong className="block text-lg font-bold text-[#2B3543] sm:text-xl">{value}</strong>
                <span className="mt-0.5 block text-[9px] font-semibold leading-4 text-slate-500 sm:text-[11px] sm:leading-4">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 lg:py-16">
        <div className="container-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="The services clients actually come to us for"
              description="Start with one problem or combine the right capabilities into a coordinated growth plan."
            />
            <div className="shrink-0"><PrimaryButton href="/services#core-services" variant="outline" arrow>View full service details</PrimaryButton></div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_28px_rgba(43,53,67,0.05)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_14px_36px_rgba(22,108,210,0.10)] sm:p-5"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#166CD2]/10 text-[#166CD2] transition group-hover:bg-[#166CD2] group-hover:text-white sm:h-10 sm:w-10">
                  <AppIcon name={service.icon as IconName} size={20} />
                </span>
                <h2 className="mt-3 text-sm font-bold leading-5 text-[#2B3543] sm:text-base">{service.title}</h2>
                <p className="mt-1.5 text-[11px] font-medium leading-5 text-slate-500 sm:text-xs">{service.features[0]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-12 sm:py-14 lg:py-16">
        <div className="container-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected results"
              title="Real marketplace proof, presented clearly"
              description="See the reporting evidence, what was changed and the commercial result behind each case study."
            />
            <div className="shrink-0"><PrimaryButton href="/portfolio" variant="outline" arrow>See all case studies</PrimaryButton></div>
          </div>

          <p className="mt-5 text-xs font-semibold text-slate-400 sm:hidden">Swipe to see the next result →</p>
          <div className="home-proof-row -mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0">
            {caseStudies.slice(0, 2).map((study) => (
              <div key={study.id} className="min-w-[88vw] snap-start sm:min-w-0">
                <CaseStudyCard study={study} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#2B3543] text-white shadow-[0_24px_70px_rgba(43,53,67,0.20)]">
          <div className="grid gap-7 px-6 py-8 sm:px-9 sm:py-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Why clients use DevProdigee</p>
              <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">Less supplier juggling. More focused eCommerce execution.</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {homeBenefits.map(([icon, title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#166CD2] text-white"><AppIcon name={icon as IconName} size={17} /></span>
                    <strong className="mt-3 block text-sm font-bold">{title}</strong>
                    <span className="mt-1 block text-xs leading-5 text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-5 text-[#2B3543] sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Have a specific problem?</p>
              <h3 className="mt-3 text-xl font-bold leading-snug sm:text-2xl">Tell us the platform, the bottleneck and the target.</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">We&apos;ll help you identify the most useful next step instead of pushing a generic package.</p>
              <div className="mt-5"><PrimaryButton href="/contact" arrow>Book a free consultation</PrimaryButton></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

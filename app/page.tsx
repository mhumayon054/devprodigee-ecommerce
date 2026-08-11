import type { Metadata } from "next";
import Image from "next/image";
import { AppIcon } from "@/components/app-icon";
import { CaseStudyCard } from "@/components/case-study-card";
import { FaqList } from "@/components/faq-list";
import { PlatformStrip } from "@/components/platform-strip";
import { PrimaryButton } from "@/components/primary-button";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { caseStudies, faqs, processSteps, services, values } from "@/data/site";

export const metadata: Metadata = {
  title: "Marketplace Growth Agency",
  description: "Scale your eCommerce business across Amazon, Walmart, Shopify, TikTok Shop, Etsy, eBay and WooCommerce with one coordinated specialist team.",
};

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-100 pb-20 pt-36 sm:pt-40 lg:min-h-[780px] lg:pb-24 lg:pt-44">
        <div className="hero-backdrop absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.03fr_.97fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#166CD2]/15 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#166CD2] shadow-sm">
              <AppIcon name="spark" size={16} /> End-to-end eCommerce growth agency
            </p>
            <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#2B3543] sm:text-5xl lg:text-[64px]">
              Build, optimise and scale your business across every major marketplace.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-normal leading-8 text-slate-600 sm:text-lg">
              We help ambitious brands grow across Amazon, Walmart, Shopify, TikTok Shop, Etsy, eBay and WooCommerce through strategy, development, optimisation, advertising and ongoing management.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact" arrow>Book a free strategy call</PrimaryButton>
              <PrimaryButton href="/services#core-services" variant="outline">Explore our services</PrimaryButton>
            </div>
            <div className="mt-9 grid max-w-2xl grid-cols-3 gap-4 border-t border-slate-300/80 pt-6">
              {[
                ["7+", "commerce platforms"],
                ["360°", "growth support"],
                ["100%", "asset ownership"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong className="block text-2xl font-bold text-[#2B3543]">{value}</strong>
                  <span className="mt-1 block text-xs font-semibold leading-5 text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:mx-0">
            <div className="absolute -left-10 top-1/4 h-40 w-40 rounded-full bg-[#166CD2]/20 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-44 w-44 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="dashboard-shell relative rounded-[30px] border border-white/80 bg-white/95 p-4 shadow-[0_30px_90px_rgba(43,53,67,0.22)] sm:p-5">
              <div className="relative flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-slate-100 bg-white p-1.5">
                    <Image src="/logo-devprodigee-icon.png" alt="" width={208} height={305} className="h-full w-full object-contain" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#2B3543]">Commerce Growth Hub</p>
                    <p className="text-[11px] font-semibold text-slate-400">Multi-channel overview</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700">All systems active</span>
              </div>

              <div className="relative mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-[#2B3543] p-4 text-white">
                  <span className="text-[10px] font-semibold text-slate-300">Marketplace reach</span>
                  <strong className="mt-2 block text-xl font-bold">7 channels</strong>
                  <div className="mt-4 flex items-end gap-1">
                    {[22, 31, 25, 39, 34, 48, 57].map((height) => <span key={height} className="w-full rounded-t bg-blue-400/80" style={{ height }} />)}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <span className="text-[10px] font-semibold text-slate-400">Growth system</span>
                  <strong className="mt-2 block text-xl font-bold text-[#2B3543]">Always on</strong>
                  <div className="mt-4 grid h-14 place-items-center rounded-xl bg-blue-50 text-[#166CD2]"><AppIcon name="chart" size={28} /></div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <span className="text-[10px] font-semibold text-slate-400">Reporting</span>
                  <strong className="mt-2 block text-xl font-bold text-[#2B3543]">Clear KPIs</strong>
                  <div className="mt-4 grid h-14 place-items-center rounded-xl bg-emerald-50 text-emerald-600"><AppIcon name="target" size={28} /></div>
                </div>
              </div>

              <div className="relative mt-4 grid gap-3 sm:grid-cols-[1.25fr_.75fr]">
                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#2B3543]">Performance momentum</p>
                      <p className="mt-1 text-[10px] font-semibold text-slate-400">Optimisation across listings, ads and stores</p>
                    </div>
                    <span className="rounded-lg bg-blue-50 px-2 py-1 text-[10px] font-bold text-[#166CD2]">Growing</span>
                  </div>
                  <svg viewBox="0 0 400 120" className="mt-3 w-full" aria-label="Growth chart illustration">
                    <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#166CD2" stopOpacity=".28"/><stop offset="1" stopColor="#166CD2" stopOpacity="0"/></linearGradient></defs>
                    <path d="M0 96 C45 92 62 78 92 82 S143 78 169 61 S218 69 247 47 S302 52 331 30 S370 28 400 12 V120 H0Z" fill="url(#chartFill)"/>
                    <path d="M0 96 C45 92 62 78 92 82 S143 78 169 61 S218 69 247 47 S302 52 331 30 S370 28 400 12" fill="none" stroke="#166CD2" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="rounded-2xl bg-[#166CD2] p-4 text-white">
                  <p className="text-xs font-bold">Specialist team</p>
                  <p className="mt-2 text-[11px] leading-5 text-blue-100">Strategy, development, marketplaces, creative and advertising in one coordinated workflow.</p>
                  <div className="mt-4 flex -space-x-2">
                    {["ST", "DV", "MK", "AD"].map((label) => <span key={label} className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#166CD2] bg-white text-[10px] font-bold text-[#166CD2]">{label}</span>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:-left-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600"><AppIcon name="check" size={22} /></span>
                <div><strong className="block text-sm font-bold text-[#2B3543]">Conversion-focused</strong><span className="text-[10px] font-semibold text-slate-400">Every improvement has a purpose</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-3 pb-8 sm:-mt-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><PlatformStrip /></div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="What we do" title="Everything you need to build a stronger eCommerce business" description="One coordinated agency for marketplace operations, storefront development, organic visibility, paid growth, creative and performance reporting." />
            <PrimaryButton href="/services#core-services" variant="outline" arrow>View all services</PrimaryButton>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#2B3543] py-20 text-white sm:py-24">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Why DevProdigee eCommerce</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-[44px]">A growth partner that connects strategy with day-to-day execution.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">We bring together marketplace knowledge, data-led decisions, creative execution and operational discipline so your brand can grow without fragmented suppliers or unclear ownership.</p>
            <div className="mt-8"><PrimaryButton href="/about" variant="white" arrow>How we work</PrimaryButton></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#166CD2] text-white"><AppIcon name="shield" size={22} /></span>
                <h3 className="mt-5 text-xl font-bold">{value.title}</h3>
                <p className="mt-3 text-sm font-normal leading-7 text-slate-300">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-shell">
          <SectionHeading eyebrow="Our process" title="A clear route from opportunity to measurable improvement" description="We turn complex multi-channel work into a transparent plan with defined priorities, responsibilities and reporting." align="center" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.number} className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="absolute right-5 top-5 text-3xl font-bold text-slate-100">{step.number}</span>
                <h3 className="relative mt-9 text-lg font-bold text-[#2B3543]">{step.title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Selected results" title="Marketplace improvements supported by real performance data" description="Our portfolio connects each metric to the challenge, optimisation work and operating changes behind it." />
            <PrimaryButton href="/portfolio" variant="outline" arrow>See all case studies</PrimaryButton>
          </div>
          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {caseStudies.slice(0, 2).map((study) => <CaseStudyCard key={study.id} study={study} />)}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <SectionHeading eyebrow="Frequently asked" title="Practical answers before we start" description="Learn how our engagements, platform coverage, pricing and ownership model work." />
          <FaqList items={faqs.slice(0, 6)} />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-[#166CD2] px-6 py-12 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Ready to grow?</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">Bring us your eCommerce challenge and leave with a clearer next step.</h2>
          </div>
          <div className="mt-7 shrink-0 lg:mt-0"><PrimaryButton href="/contact" variant="white" arrow>Book a free consultation</PrimaryButton></div>
        </div>
      </section>
    </div>
  );
}

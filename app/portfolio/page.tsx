import type { Metadata } from "next";
import Image from "next/image";
import { AppIcon, type IconName } from "@/components/app-icon";
import { CaseStudyCard } from "@/components/case-study-card";
import { PageHero } from "@/components/page-hero";
import { PrimaryButton } from "@/components/primary-button";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio & eCommerce Case Studies",
  description: "Explore verified eBay marketplace case studies covering sales growth, listing visibility, order management and inventory organisation.",
};

const overviewMetrics = [
  { value: "100%", label: "year-over-year growth in the featured transformation" },
  { value: "£1,716.15", label: "gross sales in the featured reporting period" },
  { value: "3.18M+", label: "listing impressions recorded" },
  { value: "301", label: "units sold in the featured case study" },
];

const evidencePrinciples = [
  { icon: "chart", title: "Verified metrics", text: "Performance figures are tied to supplied marketplace reporting snapshots." },
  { icon: "search", title: "Clear context", text: "Each result is explained through the original challenge and work completed." },
  { icon: "target", title: "Commercial relevance", text: "We focus on visibility, sales, conversion and operations rather than vanity metrics." },
];

export default function PortfolioPage() {
  return (
    <div>
      <PageHero
        eyebrow="Portfolio"
        title="eCommerce case studies with the performance context behind the numbers"
        description="See how listing optimisation, Seller Hub analytics, catalogue organisation and operational workflows contributed to stronger marketplace visibility, sales and scalability."
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#case-studies" variant="white" arrow>Explore the case studies</PrimaryButton>
            <PrimaryButton href="/contact" variant="ghost-white">Discuss your goals</PrimaryButton>
          </div>
        }
      />

      <section className="relative z-10 -mt-8 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(43,53,67,0.13)] sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {overviewMetrics.map((metric) => (
            <div key={metric.label} className="border-slate-100 lg:border-r lg:last:border-r-0 lg:px-5">
              <strong className="block text-3xl font-bold text-[#166CD2]">{metric.value}</strong>
              <span className="mt-2 block text-xs font-semibold leading-5 text-slate-500">{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[.88fr_1.12fr]">
          <div>
            <SectionHeading eyebrow="Featured transformation" title="From underperforming listings to a repeatable eBay growth system" description="The featured before-and-after story shows what changed when listing improvements, analytics review and marketplace operations were managed as one continuous programme." />
            <div className="mt-7 space-y-4">
              {["Optimised titles, descriptions, keywords and item specifics.", "Used Seller Hub performance data to guide continuous improvements.", "Strengthened inventory organisation and day-to-day operating workflows."].map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm font-semibold leading-7 text-slate-600">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-[#166CD2]"><AppIcon name="check" size={13} /></span>
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-[0_20px_65px_rgba(43,53,67,0.11)]">
            <Image src="/case-studies/ebay-before-after.png" alt="eBay store before and after performance comparison" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-contain p-5 sm:p-8" />
          </div>
        </div>
      </section>

      <section id="case-studies" className="section-space scroll-mt-24 bg-slate-50">
        <div className="container-shell">
          <SectionHeading eyebrow="Selected work" title="Verified eBay marketplace growth case studies" description="Each case study explains the initial challenge, the work completed and the measurable outcome recorded in Seller Hub reporting." align="center" />
          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {caseStudies.map((study) => <CaseStudyCard key={study.id} study={study} />)}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="Detailed breakdown" title="The work and reasoning behind each result" description="The sections below connect marketplace performance with the specific optimisation and operating changes that produced it." align="center" />
          <div className="mt-14 space-y-10">
            {caseStudies.map((study, index) => (
              <article id={study.id} key={study.id} className="scroll-mt-28 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_65px_rgba(43,53,67,0.08)]">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-[310px] bg-slate-100 sm:min-h-[390px]">
                    <Image src={study.image} alt={`${study.title} marketplace performance snapshot`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-5 sm:p-8" />
                  </div>
                  <div className="p-7 sm:p-10">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#166CD2]">{study.eyebrow}</p>
                    <h2 className="mt-4 text-3xl font-bold leading-tight text-[#2B3543]">{study.title}</h2>
                    <p className="mt-5 text-sm leading-7 text-slate-600">{study.summary}</p>
                    <div className="mt-7 grid grid-cols-3 gap-3 border-y border-slate-100 py-5">
                      {study.metrics.map((metric) => (
                        <div key={metric.label}>
                          <strong className="block text-lg font-bold text-[#166CD2] sm:text-xl">{metric.value}</strong>
                          <span className="mt-1 block text-[11px] font-semibold leading-4 text-slate-500">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid gap-5 border-t border-slate-100 p-7 sm:p-10 lg:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">The challenge</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{study.challenge}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Our solution</p>
                    <ul className="mt-3 space-y-3">
                      {study.solution.map((point) => <li key={point} className="flex items-start gap-2 text-sm leading-6 text-slate-600"><span className="mt-0.5 text-[#166CD2]"><AppIcon name="check" size={16} /></span>{point}</li>)}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-[#2B3543] p-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">The result</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">{study.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[.78fr_1.22fr]">
          <div>
            <SectionHeading eyebrow="How we report" title="Evidence first, context always" description="A screenshot alone does not explain why performance changed. Our case-study structure connects the metrics to the work completed, the decisions made and the operational context." />
            <div className="mt-7"><PrimaryButton href="/contact" arrow>Discuss your growth goals</PrimaryButton></div>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {evidencePrinciples.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#166CD2]/10 text-[#166CD2]"><AppIcon name={item.icon as IconName} size={22} /></span>
                <h3 className="mt-5 text-lg font-bold text-[#2B3543]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#166CD2] p-8 text-white sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Your business could be next</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">Turn your current marketplace data into a practical growth roadmap.</h2>
          </div>
          <div className="mt-7 shrink-0 lg:mt-0"><PrimaryButton href="/contact" variant="white" arrow>Start a conversation</PrimaryButton></div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AppIcon } from "@/components/app-icon";
import { PortfolioRotatingWord } from "@/components/portfolio-rotating-word";
import { caseStudies } from "@/data/site";

const filters = ["All", "Growth", "Listings & SEO", "Operations"] as const;
type Filter = (typeof filters)[number];

const studyCategories: Record<string, Exclude<Filter, "All">> = {
  "ebay-transformation": "Growth",
  "ebay-growth-management": "Growth",
  "ebay-visibility": "Listings & SEO",
  "ebay-operations": "Operations",
};

const cardContent: Record<string, { title: string; description: string }> = {
  "ebay-transformation": {
    title: "eBay Store Growth System",
    description: "Listings, reporting and daily operations brought into one measurable programme.",
  },
  "ebay-growth-management": {
    title: "Marketplace Growth Management",
    description: "Seller Hub insights used to support stronger sales and repeatable execution.",
  },
  "ebay-visibility": {
    title: "Listing Visibility & SEO",
    description: "Search-led listing improvements built to increase qualified marketplace exposure.",
  },
  "ebay-operations": {
    title: "Order & Inventory Operations",
    description: "Clearer workflows created for catalogue control, fulfilment and future growth.",
  },
};

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const visibleStudies = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter((study) => studyCategories[study.id] === activeFilter);

  return (
    <section id="case-studies" className="scroll-mt-24 bg-[#f8f9fd] py-16 sm:py-20 lg:py-24">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#5942bb]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#166CD2]" /> Case Studies
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-none tracking-[-0.045em] text-[#111318] sm:text-5xl lg:text-[54px]">
              Marketplace work we&apos;ve <PortfolioRotatingWord />
            </h2>
          </div>
          <p className="text-sm font-semibold text-slate-400">Showing <strong className="text-[#202936]">{visibleStudies.length}</strong> of {caseStudies.length} results</p>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-2.5" role="group" aria-label="Filter case studies">
          <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Filter</span>
          {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold shadow-sm transition ${activeFilter === filter ? "bg-[#5942bb] text-white shadow-violet-200" : "border border-slate-200 bg-white text-[#202936] hover:border-violet-300 hover:text-[#5942bb]"}`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visibleStudies.map((study, index) => {
            const studyNumber = caseStudies.findIndex((item) => item.id === study.id) + 1;
            const content = cardContent[study.id];
            return (
            <article key={study.id} className="group flex min-h-[500px] flex-col rounded-[24px] border border-slate-200 bg-white p-3 shadow-[0_14px_38px_rgba(43,53,67,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(43,53,67,0.13)]">
                <div className={`relative aspect-[1.4/1] overflow-hidden rounded-[18px] border border-slate-100 ${index % 2 === 0 ? "bg-[#edf5ff]" : "bg-[#f3f1ff]"}`}>
                  <div className="absolute left-3 top-3 z-10 flex items-center gap-2">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#202936] shadow-sm">{studyCategories[study.id]}</span>
                    <span className="rounded-full bg-[#202936]/90 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-white">eBay</span>
                  </div>
                  <div className="absolute inset-2 top-11 overflow-hidden rounded-[12px] border border-white/80 bg-white shadow-sm">
                    <Image
                      src={study.image}
                      alt={`${study.title} performance evidence`}
                      fill
                      sizes="(min-width: 1280px) 24vw, (min-width: 640px) 48vw, 94vw"
                      className="object-contain p-1.5"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#166CD2]">0{studyNumber}</span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">{study.eyebrow}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold leading-tight tracking-[-0.025em] text-[#111318]">{content.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{content.description}</p>

                  <div className="mt-4 grid grid-cols-2 divide-x divide-slate-200 border-t border-slate-200 pt-4">
                    {study.metrics.slice(0, 2).map((metric, metricIndex) => (
                      <div key={metric.label}>
                        <strong className={`block text-lg font-bold ${metricIndex === 0 ? "text-[#166CD2]" : "pl-4 text-[#202936]"}`}>{metric.value}</strong>
                        <span className={`mt-0.5 block text-[9px] font-semibold leading-4 text-slate-500 ${metricIndex === 1 ? "pl-4" : ""}`}>{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/portfolio/${study.id}`} className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-[#202020] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#166CD2]">
                    View Case Study <AppIcon name="arrow" size={17} />
                  </Link>
                </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

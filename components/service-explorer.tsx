"use client";

import { useEffect, useState } from "react";
import { AppIcon } from "@/components/app-icon";
import { coreServiceHrefs } from "@/data/seo-services";
import { services } from "@/data/site";

export function ServiceExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  useEffect(() => {
    const selectFromHash = () => {
      const slug = window.location.hash.slice(1);
      const index = services.findIndex((service) => service.slug === slug);

      if (index >= 0) {
        setActiveIndex(index);
      }
    };

    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  const selectService = (index: number, slug: string) => {
    setActiveIndex(index);
    window.history.replaceState(null, "", `#${slug}`);
  };

  return (
    <div className="mt-9 grid border-y border-slate-300 bg-white lg:grid-cols-[.4fr_.6fr]">
      <div className="border-b border-slate-300 lg:border-b-0 lg:border-r">
        <div role="tablist" aria-label="DevProdigee services" className="flex overflow-x-auto lg:block">
          {services.map((service, index) => {
            const active = activeIndex === index;

            return (
              <button
                id={service.slug}
                key={service.slug}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="active-service-panel"
                onClick={() => selectService(index, service.slug)}
                className={`grid min-w-[220px] grid-cols-[34px_1fr] gap-3 border-r border-slate-200 py-4 pr-4 text-left transition last:border-r-0 lg:w-full lg:min-w-0 lg:border-b lg:border-r-0 lg:last:border-b-0 ${
                  active
                    ? "bg-[#f4f8fc] pl-4 text-[#166CD2] lg:border-l-[3px] lg:border-l-[#166CD2]"
                    : "pl-4 text-[#2B3543] hover:bg-slate-50 hover:text-[#166CD2] lg:border-l-[3px] lg:border-l-transparent"
                }`}
              >
                <span className="pt-0.5 text-xs font-bold text-slate-400">0{index + 1}</span>
                <span className="text-sm font-bold leading-6 sm:text-base">{service.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <article id="active-service-panel" role="tabpanel" className="p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#166CD2]">Selected service</p>
        <h3 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#2B3543] sm:text-4xl">{activeService.title}</h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{activeService.description}</p>

        <div className="mt-7 grid gap-6 border-y border-slate-200 py-6 sm:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">Best fit</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#2B3543]">{activeService.bestFor}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">Practical outcome</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#2B3543]">{activeService.outcome}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 sm:gap-x-8">
          {activeService.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
              <AppIcon name="check" size={16} className="mt-1 shrink-0 text-emerald-600" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
          <a href={coreServiceHrefs[activeService.slug] ?? `/services#${activeService.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#166CD2] transition hover:text-[#105db8]">
            View full service details <AppIcon name="arrow" size={17} />
          </a>
          <a href="/contact" className="text-sm font-bold text-slate-600 transition hover:text-[#166CD2]">Discuss this service</a>
        </div>
      </article>
    </div>
  );
}

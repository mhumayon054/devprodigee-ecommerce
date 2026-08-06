"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AppIcon, type IconName } from "@/components/app-icon";
import { services } from "@/data/site";

export function FooterServiceLinks() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const rootRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpenSlug(null);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenSlug(null);
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <ul ref={rootRef} className="mt-5 space-y-3 text-sm text-slate-300">
      {services.slice(0, 5).map((service) => {
        const open = openSlug === service.slug;
        return (
          <li key={service.slug} className="relative w-fit max-w-full">
            <button
              type="button"
              className={`group flex max-w-full items-center gap-2 text-left ${open ? "text-white" : "hover:text-white"}`}
              aria-expanded={open}
              aria-controls={`footer-service-${service.slug}`}
              onClick={() => setOpenSlug(open ? null : service.slug)}
            >
              <span>{service.title}</span>
              <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-blue-300 transition ${open ? "rotate-45 border-blue-300/40 bg-blue-400/10" : "group-hover:border-white/20"}`}>
                <AppIcon name="plus" size={12} />
              </span>
            </button>

            {open ? (
              <div
                id={`footer-service-${service.slug}`}
                role="dialog"
                aria-label={`${service.title} overview`}
                className="footer-service-popover absolute bottom-full left-0 z-30 mb-3 w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-white/10 bg-[#111927] p-4 shadow-[0_22px_70px_rgba(0,0,0,0.38)]"
              >
                <span className="absolute -bottom-1.5 left-6 h-3 w-3 rotate-45 border-b border-r border-white/10 bg-[#111927]" />
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-blue-300 ring-1 ring-inset ring-blue-300/15">
                    <AppIcon name={service.icon as IconName} size={19} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300">Service overview</p>
                    <h3 className="mt-1 text-sm font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-300">{service.description}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/[0.07] px-3 py-2 text-xs font-bold text-white ring-1 ring-inset ring-white/10 transition hover:bg-[#166CD2] hover:ring-[#166CD2]"
                  onClick={() => setOpenSlug(null)}
                >
                  Open service details <AppIcon name="arrow" size={14} />
                </Link>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

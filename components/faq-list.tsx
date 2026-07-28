"use client";

import { useState } from "react";
import { AppIcon } from "@/components/app-icon";

export type FaqItem = { category: string; question: string; answer: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_50px_rgba(43,53,67,0.06)]">
      {items.map((faq, index) => {
        const expanded = active === index;
        return (
          <article key={faq.question} className="px-5 sm:px-7">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={expanded}
              onClick={() => setActive(expanded ? null : index)}
            >
              <span>
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#166CD2]">{faq.category}</span>
                <span className="text-base font-bold text-[#2B3543] sm:text-lg">{faq.question}</span>
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-[#2B3543]">
                <AppIcon name={expanded ? "minus" : "plus"} size={17} />
              </span>
            </button>
            <div className={`faq-answer overflow-hidden transition-all duration-200 ${expanded ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"}`}>
              <p className="pr-10 text-sm font-normal leading-7 text-slate-600 sm:text-base">{faq.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

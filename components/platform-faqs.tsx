"use client";

import { useState } from "react";
import { FaqList, type FaqItem } from "@/components/faq-list";

type Group = { name: string; items: FaqItem[] };

export function PlatformFaqs({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {groups.map((group, index) => (
          <button
            key={group.name}
            type="button"
            className={`rounded-full px-4 py-2.5 text-xs font-bold transition sm:text-sm ${active === index ? "bg-[#166CD2] text-white shadow-lg shadow-blue-200" : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-[#166CD2]"}`}
            onClick={() => setActive(index)}
          >
            {group.name}
          </button>
        ))}
      </div>
      <div className="mt-8"><FaqList key={groups[active].name} items={groups[active].items} /></div>
    </div>
  );
}

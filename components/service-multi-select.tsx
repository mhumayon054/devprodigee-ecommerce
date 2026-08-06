"use client";

import { useEffect, useRef, useState } from "react";
import { AppIcon, type IconName } from "@/components/app-icon";
import { services } from "@/data/site";

type Props = {
  value: string[];
  onChange: (value: string[]) => void;
  invalid?: boolean;
};

const fallbackOption = {
  slug: "not-sure-yet",
  icon: "spark",
  title: "Not sure yet",
  description: "Choose this and our team will help identify the most useful starting point.",
};

const options = [...services, fallbackOption];

export function ServiceMultiSelect({ value, onChange, invalid = false }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function toggleOption(title: string) {
    if (title === fallbackOption.title) {
      onChange(value.includes(title) ? [] : [title]);
      return;
    }

    const withoutFallback = value.filter((item) => item !== fallbackOption.title);
    onChange(
      withoutFallback.includes(title)
        ? withoutFallback.filter((item) => item !== title)
        : [...withoutFallback, title],
    );
  }

  const visibleSelections = value.slice(0, 2);
  const remainingCount = Math.max(value.length - visibleSelections.length, 0);

  return (
    <div ref={rootRef} className="relative mt-2">
      <button
        id="service-multi-select-trigger"
        type="button"
        className={`flex min-h-[54px] w-full items-center justify-between gap-3 rounded-[.9rem] border bg-slate-50 px-4 py-2.5 text-left outline-none transition focus:bg-white focus:ring-4 focus:ring-[#166CD2]/10 ${
          invalid
            ? "border-red-300 ring-4 ring-red-50"
            : open
              ? "border-[#166CD2] bg-white ring-4 ring-[#166CD2]/10"
              : "border-slate-200 hover:border-blue-200"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="service-options"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
          {value.length === 0 ? (
            <span className="text-sm font-medium text-slate-500">Select one or more services</span>
          ) : (
            <>
              {visibleSelections.map((item) => (
                <span key={item} className="max-w-full truncate rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-bold text-[#166CD2]">
                  {item}
                </span>
              ))}
              {remainingCount > 0 ? (
                <span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-bold text-slate-600">+{remainingCount} more</span>
              ) : null}
            </>
          )}
        </span>
        <AppIcon name="chevron" size={18} className={`shrink-0 text-slate-500 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div
          id="service-options"
          role="listbox"
          aria-multiselectable="true"
          className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(43,53,67,0.18)]"
        >
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#166CD2]">Choose services</p>
              <p className="mt-0.5 text-xs text-slate-500">Select every area relevant to your project.</p>
            </div>
            {value.length > 0 ? (
              <button type="button" className="text-xs font-bold text-slate-500 hover:text-[#166CD2]" onClick={() => onChange([])}>
                Clear
              </button>
            ) : null}
          </div>

          <div className="max-h-[24rem] overflow-y-auto p-2">
            {options.map((option) => {
              const selected = value.includes(option.title);
              return (
                <button
                  key={option.slug}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition ${
                    selected ? "bg-blue-50" : "hover:bg-slate-50"
                  }`}
                  onClick={() => toggleOption(option.title)}
                >
                  <span className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl ${selected ? "bg-[#166CD2] text-white" : "bg-slate-100 text-slate-500"}`}>
                    <AppIcon name={option.icon as IconName} size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-[#2B3543]">{option.title}</span>
                      <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border ${selected ? "border-[#166CD2] bg-[#166CD2] text-white" : "border-slate-300 bg-white text-transparent"}`}>
                        <AppIcon name="check" size={13} />
                      </span>
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500">{option.description}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="border-t border-slate-100 bg-slate-50/70 px-4 py-3 text-xs font-semibold text-slate-500">
            {value.length === 0 ? "No service selected yet" : `${value.length} service${value.length === 1 ? "" : "s"} selected`}
          </div>
        </div>
      ) : null}
    </div>
  );
}

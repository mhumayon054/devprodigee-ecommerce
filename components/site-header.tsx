"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AppIcon } from "@/components/app-icon";
import { LogoMark } from "@/components/logo-mark";
import { site } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-[0_18px_50px_rgba(24,43,70,0.16)] backdrop-blur sm:px-6 lg:px-7">
        <LogoMark />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {site.navigation.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`rounded-xl px-4 py-3 text-[15px] font-semibold transition hover:bg-[#166CD2]/[0.07] hover:text-[#166CD2] ${active ? "bg-[#166CD2]/[0.08] text-[#166CD2]" : "text-[#2B3543]"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="hidden rounded-xl bg-[#2B3543] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2B3543]/20 transition hover:-translate-y-0.5 hover:bg-[#166CD2] lg:inline-flex">
          Schedule a free consultation
        </Link>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl bg-[#2B3543] text-white lg:hidden"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <AppIcon name={open ? "close" : "menu"} size={23} />
        </button>
      </div>

      {open ? (
        <div className="nav-panel mx-auto mt-3 max-w-7xl rounded-2xl border border-white/70 bg-white p-4 shadow-2xl lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {site.navigation.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={`rounded-xl px-4 py-3 text-base font-semibold hover:bg-[#166CD2]/[0.07] hover:text-[#166CD2] ${active ? "bg-[#166CD2]/[0.08] text-[#166CD2]" : "text-[#2B3543]"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="mt-2 rounded-xl bg-[#166CD2] px-4 py-3 text-center text-sm font-bold text-white">
              Schedule a free consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

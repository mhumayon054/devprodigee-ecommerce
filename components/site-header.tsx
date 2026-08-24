"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AppIcon } from "@/components/app-icon";
import { LogoMark } from "@/components/logo-mark";
import { site } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      setScrolled(currentY > 24);

      if (!open && currentY > 90 && delta > 4) setHidden(true);
      else if (delta < -4 || currentY < 90) setHidden(false);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const navigation = site.navigation.filter((item) => item.to !== "/contact");

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-4 pt-3 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:px-6 sm:pt-4 lg:px-8 lg:pt-4 ${hidden ? "-translate-y-[125%]" : "translate-y-0"}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-[18px] border px-4 py-2 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 sm:px-5 lg:px-6 ${scrolled ? "border-white/80 bg-white/[0.72] shadow-[0_12px_34px_rgba(24,43,70,0.12)]" : "border-white/[0.85] bg-white/[0.16] shadow-[0_10px_30px_rgba(24,43,70,0.08)]"}`}>
        <LogoMark />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link key={item.to} href={item.to} className={`rounded-xl px-3.5 py-2 text-[14px] font-semibold transition hover:bg-[#166CD2]/[0.07] hover:text-[#166CD2] ${active ? "bg-[#166CD2]/[0.08] text-[#166CD2]" : "text-[#2B3543]"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="hidden rounded-xl bg-[#2B3543] px-4 py-2.5 text-[12px] font-bold text-white shadow-sm shadow-[#2B3543]/20 transition hover:-translate-y-0.5 hover:bg-[#166CD2] lg:inline-flex">
          Book a free call
        </Link>

        <button className="grid h-10 w-10 place-items-center rounded-xl bg-[#2B3543] text-white lg:hidden" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
          <AppIcon name={open ? "close" : "menu"} size={21} />
        </button>
      </div>

      {open ? (
        <div className="nav-panel mx-auto mt-2 max-w-7xl rounded-2xl border border-white/80 bg-white/90 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navigation.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link key={item.to} href={item.to} onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 text-base font-semibold hover:bg-[#166CD2]/[0.07] hover:text-[#166CD2] ${active ? "bg-[#166CD2]/[0.08] text-[#166CD2]" : "text-[#2B3543]"}`}>
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-[#166CD2] px-4 py-3 text-center text-sm font-bold text-white">Book a free call</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

import Link from "next/link";
import { AppIcon } from "@/components/app-icon";
import { LogoMark } from "@/components/logo-mark";
import { platforms, services, site } from "@/data/site";

const platformAnchors: Record<string, string> = {
  Amazon: "amazon",
  Walmart: "walmart-marketplace",
  Shopify: "shopify",
  eBay: "ebay",
  Etsy: "etsy",
};

export function SiteFooter() {
  return (
    <footer className="bg-[#202936] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_.75fr_.9fr_.9fr]">
          <div>
            <LogoMark inverse />
            <p className="mt-6 max-w-md text-sm font-normal leading-7 text-slate-300">
              Strategy, store development, marketplace management and performance marketing for brands that want sustainable eCommerce growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3" aria-label="Supported platforms">
              {platforms.slice(0, 5).map((platform) => (
                <Link
                  key={platform.name}
                  href={`/services#platform-${platformAnchors[platform.name] ?? platform.name.toLowerCase()}`}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-white/10 hover:text-white"
                >
                  {platform.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Company</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {site.navigation.map((item) => <li key={item.to}><Link href={item.to} className="transition hover:text-white">{item.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Core Services</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services#${service.slug}`} className="transition hover:text-white">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Start a conversation</h2>
            <p className="mt-5 text-sm leading-6 text-slate-300">Tell us where your eCommerce business is today and where you want it to go.</p>
            <Link href="/contact#project-enquiry" className="mt-5 flex items-center gap-3 text-sm font-semibold text-white transition hover:text-blue-300">
              <AppIcon name="mail" size={19} /> {site.email}
            </Link>
            <Link href="/contact#project-enquiry" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#166CD2] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">
              Book a strategy call <AppIcon name="arrow" size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DevProdigee eCommerce. All rights reserved.</p>
          <p>Built for marketplace growth across 7+ platforms.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { AppIcon } from "@/components/app-icon";
import { FooterServiceLinks } from "@/components/footer-service-links";
import { LogoMark } from "@/components/logo-mark";
import { platforms, site } from "@/data/site";

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
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-7 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_.75fr_.9fr_.9fr]">
          <div>
            <LogoMark inverse />
            <p className="mt-6 max-w-md text-sm font-normal leading-7 text-slate-300">
              We turn ambitious brands into category leaders through connected commerce systems built for measurable, sustainable growth.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-y-2" aria-label="Supported platforms">
              {platforms.slice(0, 5).map((platform, index) => (
                <span key={platform.name} className="platform-nav-item inline-flex items-center">
                  {index > 0 ? <span className="platform-divider mx-2.5 text-blue-300/45" aria-hidden="true">|</span> : null}
                  <Link
                    href={`/services#platform-${platformAnchors[platform.name] ?? platform.name.toLowerCase()}`}
                    className="platform-footer-link text-xs font-semibold text-slate-300"
                  >
                    {platform.name}
                  </Link>
                </span>
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
            <FooterServiceLinks />
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Build What’s Next</h2>
            <p className="mt-5 text-sm leading-6 text-slate-300">Share where your eCommerce business stands today, and we will help shape the clearest route to stronger performance.</p>
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

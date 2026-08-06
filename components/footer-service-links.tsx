import Link from "next/link";
import { AppIcon, type IconName } from "@/components/app-icon";
import { services } from "@/data/site";

export function FooterServiceLinks() {
  return (
    <ul className="mt-5 space-y-3 text-sm text-slate-300">
      {services.slice(0, 5).map((service) => (
        <li key={service.slug} className="group relative w-fit max-w-full">
          <Link
            href={`/services#${service.slug}`}
            className="footer-service-link block max-w-full transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none"
            aria-describedby={`footer-service-${service.slug}`}
          >
            {service.title}
          </Link>

          <div
            id={`footer-service-${service.slug}`}
            role="tooltip"
            className="footer-service-popover pointer-events-none invisible absolute bottom-full left-0 z-30 mb-3 w-[min(20rem,calc(100vw-2.5rem))] translate-y-2 rounded-2xl border border-white/10 bg-[#111927] p-4 opacity-0 shadow-[0_22px_70px_rgba(0,0,0,0.38)] transition-[opacity,transform,visibility] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
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
            <p className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-300">
              Open service details <AppIcon name="arrow" size={14} />
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

import Image from "next/image";
import { platforms } from "@/data/site";

type Props = { label?: string; variant?: "default" | "compact" };

function PlatformLogo({ platform, compact = false }: { platform: (typeof platforms)[number]; compact?: boolean }) {
  return (
    <div className={compact ? "flex h-10 w-[148px] shrink-0 items-center justify-center rounded-xl border border-white/60 bg-white/[0.45] px-4 sm:w-[166px]" : "flex min-h-[74px] items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-3 py-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/40"} title={platform.name}>
      <div className={compact ? "flex h-6 w-full items-center justify-center gap-1" : "flex h-9 w-full items-center justify-center gap-1.5"}>
        <Image src={platform.logo} alt={`${platform.name} logo`} width={126} height={36} className={compact ? "h-5 w-[94px] object-contain opacity-90" : "h-8 w-[112px] object-contain"} />
        {platform.qualifier ? <span className={compact ? "shrink-0 text-[8px] font-extrabold leading-none text-slate-900/80" : "shrink-0 text-[11px] font-extrabold leading-none text-slate-900"}>{platform.qualifier}</span> : null}
      </div>
    </div>
  );
}

export function PlatformStrip({ label = "Specialist support across the platforms that power modern commerce", variant = "default" }: Props) {
  if (variant === "compact") {
    return (
      <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/[0.38] px-2 py-2.5 shadow-[0_10px_32px_rgba(43,53,67,0.06)] backdrop-blur-[2px]">
        {label ? <p className="mb-1.5 text-center text-[8px] font-bold uppercase tracking-[0.16em] text-slate-500/75 sm:text-[9px]">{label}</p> : null}
        <div className="platform-marquee-mask overflow-hidden">
          <div className="platform-marquee-track flex w-max gap-2.5 pr-2.5">
            {[...platforms, ...platforms].map((platform, index) => <PlatformLogo key={`${platform.name}-${index}`} platform={platform} compact />)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_60px_rgba(43,53,67,0.08)] sm:p-7">
      {label ? <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p> : null}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">{platforms.map((platform) => <PlatformLogo key={platform.name} platform={platform} />)}</div>
    </div>
  );
}

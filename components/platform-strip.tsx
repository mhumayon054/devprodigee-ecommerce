import Image from "next/image";
import { platforms } from "@/data/site";

type Props = { label?: string };

export function PlatformStrip({ label = "Specialist support across the platforms that power modern commerce" }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_60px_rgba(43,53,67,0.08)] sm:p-7">
      {label ? (
        <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      ) : null}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="flex min-h-[74px] items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-3 py-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/40"
            title={platform.name}
          >
            <div className="flex h-9 w-full items-center justify-center gap-1.5">
              <Image
                src={platform.logo}
                alt={`${platform.name} logo`}
                width={126}
                height={36}
                className="h-8 w-[112px] object-contain"
              />
              {platform.qualifier ? (
                <span className="shrink-0 text-[11px] font-extrabold leading-none text-slate-900">{platform.qualifier}</span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

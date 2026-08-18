import Image from "next/image";
import { platforms } from "@/data/site";

type Props = {
  label?: string;
  variant?: "default" | "compact";
};

export function PlatformStrip({
  label = "Specialist support across the platforms that power modern commerce",
  variant = "default",
}: Props) {
  const compact = variant === "compact";

  return (
    <div
      className={
        compact
          ? "rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_12px_38px_rgba(43,53,67,0.08)] backdrop-blur sm:p-3.5"
          : "rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_60px_rgba(43,53,67,0.08)] sm:p-7"
      }
    >
      {label ? (
        <p
          className={
            compact
              ? "mb-2 text-center text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-[10px]"
              : "mb-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500"
          }
        >
          {label}
        </p>
      ) : null}

      <div className={compact ? "grid grid-cols-4 gap-1.5 sm:grid-cols-7 sm:gap-2" : "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7"}>
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className={
              compact
                ? "flex min-h-[42px] items-center justify-center rounded-xl border border-slate-100 bg-slate-50/90 px-2 py-2 transition hover:border-blue-200 hover:bg-blue-50/40 sm:min-h-[48px]"
                : "flex min-h-[74px] items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-3 py-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/40"
            }
            title={platform.name}
          >
            <div className={compact ? "flex h-6 w-full items-center justify-center gap-1 sm:h-7" : "flex h-9 w-full items-center justify-center gap-1.5"}>
              <Image
                src={platform.logo}
                alt={`${platform.name} logo`}
                width={126}
                height={36}
                className={compact ? "h-5 w-[70px] object-contain sm:h-6 sm:w-[86px]" : "h-8 w-[112px] object-contain"}
              />
              {platform.qualifier ? (
                <span className={compact ? "hidden shrink-0 text-[8px] font-extrabold leading-none text-slate-900 sm:inline sm:text-[9px]" : "shrink-0 text-[11px] font-extrabold leading-none text-slate-900"}>
                  {platform.qualifier}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

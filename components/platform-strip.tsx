import { platforms } from "@/data/site";

type Props = { label?: string };

const tones: Record<string, string> = {
  orange: "bg-amber-500",
  green: "bg-green-600",
  blue: "bg-blue-600",
  amber: "bg-amber-700",
  dark: "bg-slate-900",
  purple: "bg-violet-600",
  multi: "platform-multi",
};

export function PlatformStrip({ label = "Specialist support across the platforms that power modern commerce" }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_60px_rgba(43,53,67,0.08)] sm:p-7">
      {label ? <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p> : null}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {platforms.map((platform) => (
          <div key={platform.name} className="flex min-h-[74px] items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-4 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50">
            <span className={`grid h-7 min-w-7 place-items-center rounded-lg px-1 text-[11px] font-bold text-white ${tones[platform.tone] ?? "bg-[#166CD2]"}`}>{platform.code}</span>
            <span className="text-sm font-bold text-[#2B3543]">{platform.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

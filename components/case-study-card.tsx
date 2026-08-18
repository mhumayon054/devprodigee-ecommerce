import Image from "next/image";
import Link from "next/link";
import { AppIcon } from "@/components/app-icon";

type Study = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  metrics: { value: string; label: string }[];
};

export function CaseStudyCard({ study, compact = false }: { study: Study; compact?: boolean }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(43,53,67,0.08)]">
      <div className="relative overflow-hidden border-b border-slate-100 bg-slate-100" style={{ aspectRatio: "2.65 / 1" }}>
        <Image
          src={study.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 92vw"
          aria-hidden="true"
          className="scale-110 object-cover opacity-[0.12] blur-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/35 to-slate-100/70" />
        <div className="absolute left-3 right-3 top-3 flex h-5 items-center gap-1.5 rounded-t-lg border border-b-0 border-slate-200/80 bg-white/90 px-2.5 sm:left-4 sm:right-4 sm:top-4">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span className="ml-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-400">Marketplace performance evidence</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 top-8 overflow-hidden rounded-b-lg border border-slate-200/80 bg-white shadow-sm sm:bottom-4 sm:left-4 sm:right-4 sm:top-9">
          <Image
            src={study.image}
            alt={`${study.title} performance dashboard`}
            fill
            sizes="(min-width: 1024px) 50vw, 92vw"
            className="object-contain object-center"
          />
        </div>
      </div>

      <div className={compact ? "flex flex-1 flex-col p-5 sm:p-6" : "flex flex-1 flex-col p-6 sm:p-8"}>
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#166CD2] sm:text-xs">{study.eyebrow}</p>
        <h3 className={compact ? "mt-2 text-lg font-bold leading-snug text-[#2B3543] sm:text-xl" : "mt-3 text-2xl font-bold leading-snug text-[#2B3543]"}>{study.title}</h3>
        {!compact ? <p className="mt-4 text-sm leading-7 text-slate-600">{study.summary}</p> : null}
        <div className={compact ? "mt-4 grid grid-cols-3 gap-2 border-y border-slate-100 py-4" : "mt-6 grid grid-cols-3 gap-3 border-y border-slate-100 py-5"}>
          {study.metrics.map((metric) => (
            <div key={metric.label}>
              <strong className={compact ? "block text-base font-bold text-[#166CD2] sm:text-lg" : "block text-lg font-bold text-[#166CD2] sm:text-xl"}>{metric.value}</strong>
              <span className="mt-1 block text-[10px] font-semibold leading-4 text-slate-500 sm:text-xs">{metric.label}</span>
            </div>
          ))}
        </div>
        <Link href={`/portfolio#${study.id}`} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#166CD2]">
          View proof &amp; case study <AppIcon name="arrow" size={18} />
        </Link>
      </div>
    </article>
  );
}

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

export function CaseStudyCard({ study }: { study: Study }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(43,53,67,0.08)]">
      <div className="relative aspect-[16/8.3] overflow-hidden bg-slate-100">
        <Image src={study.image} alt={`${study.title} performance dashboard`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top transition duration-500 hover:scale-[1.02]" />
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#166CD2]">{study.eyebrow}</p>
        <h3 className="mt-3 text-2xl font-bold leading-snug text-[#2B3543]">{study.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{study.summary}</p>
        <div className="mt-6 grid grid-cols-3 gap-3 border-y border-slate-100 py-5">
          {study.metrics.map((metric) => (
            <div key={metric.label}>
              <strong className="block text-lg font-bold text-[#166CD2] sm:text-xl">{metric.value}</strong>
              <span className="mt-1 block text-[11px] font-semibold leading-4 text-slate-500 sm:text-xs">{metric.label}</span>
            </div>
          ))}
        </div>
        <Link href={`/portfolio#${study.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#166CD2]">Read the case study <AppIcon name="arrow" size={18} /></Link>
      </div>
    </article>
  );
}

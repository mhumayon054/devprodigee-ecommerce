import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppIcon } from "@/components/app-icon";
import { PrimaryButton } from "@/components/primary-button";
import { caseStudies } from "@/data/site";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ id: study.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const study = caseStudies.find((item) => item.id === id);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const study = caseStudies.find((item) => item.id === id);
  if (!study) notFound();

  return (
    <div className="overflow-hidden bg-white">
      <section className="portfolio-hero relative border-b border-blue-100/70 pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="surface-grid absolute inset-0 opacity-25" />
        <div className="container-shell relative">
          <Link href="/portfolio#case-studies" className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold text-[#315fae] shadow-sm backdrop-blur-sm">
            <AppIcon name="arrow" size={15} className="rotate-180" /> All case studies
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#166CD2]">{study.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-[#202936] sm:text-5xl lg:text-[58px]">{study.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{study.summary}</p>
              <div className="mt-8 grid grid-cols-3 gap-3 border-y border-slate-300 py-5">
                {study.metrics.map((metric, index) => (
                  <div key={metric.label}>
                    <strong className={`block text-xl font-bold sm:text-2xl ${index === 0 ? "text-[#166CD2]" : "text-[#202936]"}`}>{metric.value}</strong>
                    <span className="mt-1 block text-[10px] font-semibold leading-4 text-slate-500">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <figure className="relative aspect-[1.72/1] overflow-hidden rounded-[26px] border border-white bg-white/85 p-3 shadow-[0_24px_70px_rgba(43,53,67,0.14)] sm:p-5">
              <div className="relative h-full overflow-hidden rounded-[18px] border border-slate-200 bg-slate-50">
                <Image src={study.image} alt={`${study.title} marketplace reporting evidence`} fill priority sizes="(min-width: 1024px) 52vw, 94vw" className="object-contain p-3 sm:p-5" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          <article className="border-t-2 border-[#166CD2] bg-slate-50 p-7 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#166CD2]">01 / The challenge</p>
            <p className="mt-5 text-base leading-8 text-slate-600">{study.challenge}</p>
          </article>
          <article className="border-t-2 border-[#202936] bg-slate-50 p-7 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#202936]">02 / Work completed</p>
            <ul className="mt-5 grid gap-4">
              {study.solution.map((point) => <li key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-600"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#166CD2]" />{point}</li>)}
            </ul>
          </article>
          <article className="border-t-2 border-cyan-500 bg-[#eefaff] p-7 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">03 / The result</p>
            <p className="mt-5 text-base font-semibold leading-8 text-[#202936]">{study.result}</p>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f9fc] py-16 sm:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#166CD2]">A clearer route forward</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#202936] sm:text-4xl">Want the same level of visibility into your marketplace performance?</h2>
          </div>
          <PrimaryButton href="/contact" arrow>Discuss your marketplace</PrimaryButton>
        </div>
      </section>
    </div>
  );
}

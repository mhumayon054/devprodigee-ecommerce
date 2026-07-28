import type { ReactNode } from "react";

type Props = { eyebrow: string; title: string; description: string; actions?: ReactNode };

export function PageHero({ eyebrow, title, description, actions }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#2B3543] pb-20 pt-36 text-white sm:pb-24 sm:pt-40 lg:pt-44">
      <div className="absolute -left-28 top-12 h-72 w-72 rounded-full bg-[#166CD2]/35 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="surface-grid absolute inset-0 opacity-30" />
      <div className="container-shell relative">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[58px]">{title}</h1>
          <p className="mt-6 max-w-3xl text-base font-normal leading-8 text-slate-300 sm:text-lg">{description}</p>
          {actions ? <div className="mt-8">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}

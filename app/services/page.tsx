import type { Metadata } from "next";
import { AppIcon, type IconName } from "@/components/app-icon";
import { PlatformStrip } from "@/components/platform-strip";
import { PrimaryButton } from "@/components/primary-button";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "eCommerce Services",
  description:
    "Marketplace management, store development, listing optimisation, paid advertising, creative and reporting for growing eCommerce brands.",
};

const engagementSteps = [
  {
    number: "01",
    title: "Audit what matters",
    text: "We review the store, catalogue, ads and marketplace operations relevant to the scope — not a generic checklist.",
  },
  {
    number: "02",
    title: "Fix and execute",
    text: "The highest-impact work is prioritised first, with clear ownership and practical delivery across the selected channels.",
  },
  {
    number: "03",
    title: "Measure and improve",
    text: "Reporting stays focused on commercial KPIs, what changed and the next action to take.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#2B3543] pb-12 pt-32 text-white sm:pb-14 sm:pt-36 lg:pt-40">
        <div className="absolute -left-28 top-12 h-64 w-64 rounded-full bg-[#166CD2]/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="surface-grid absolute inset-0 opacity-25" />
        <div className="container-shell relative">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Services</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-0.04em] sm:text-5xl lg:text-[56px]">
              The eCommerce work that actually moves the business forward.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Six focused capabilities covering marketplaces, storefronts, listings, paid growth, creative and reporting. Use one service or combine them into one working plan.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#core-services" variant="white" arrow>View services</PrimaryButton>
              <PrimaryButton href="/contact" variant="ghost-white">Discuss your requirements</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section id="core-services" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#166CD2]">Core services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#2B3543] sm:text-4xl">
              What we do
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Clear scope, specialist execution and no filler. Every service is tied to a real operating or growth need.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:gap-5">
            {services.map((service, index) => (
              <article
                id={service.slug}
                key={service.slug}
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_32px_rgba(43,53,67,0.05)] sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#166CD2]/10 text-[#166CD2]">
                    <AppIcon name={service.icon as IconName} size={22} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-xl font-bold leading-tight text-[#2B3543]">{service.title}</h2>
                      <span className="shrink-0 text-xs font-bold text-slate-300">0{index + 1}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600"
                    >
                      <AppIcon name="check" size={12} />
                      {feature}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-12 sm:py-14">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#166CD2]">How we work</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#2B3543]">
                A simple operating rhythm.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Enough structure to keep the work accountable without turning the page — or the project — into a process document.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {engagementSteps.map((step) => (
                <article key={step.number} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="text-xs font-bold text-[#166CD2]">{step.number}</span>
                  <h3 className="mt-2 text-base font-bold text-[#2B3543]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="platforms" className="scroll-mt-24 py-10 sm:py-12">
        <div className="container-shell">
          <PlatformStrip label="Platforms we work across" />
        </div>
      </section>

      <section className="px-5 pb-14 pt-3 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-[#166CD2] px-6 py-9 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12 lg:py-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Need a specific scope?</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">
              Tell us the platform, the problem and the target. We&apos;ll keep the plan focused.
            </h2>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <PrimaryButton href="/contact" variant="white" arrow>Start a conversation</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}

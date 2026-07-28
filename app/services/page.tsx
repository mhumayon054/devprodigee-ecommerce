import type { Metadata } from "next";
import { AppIcon, type IconName } from "@/components/app-icon";
import { PageHero } from "@/components/page-hero";
import { PlatformFaqs } from "@/components/platform-faqs";
import { PlatformStrip } from "@/components/platform-strip";
import { PrimaryButton } from "@/components/primary-button";
import { SectionHeading } from "@/components/section-heading";
import { platformFaqGroups, platformServices, processSteps, services } from "@/data/site";

export const metadata: Metadata = {
  title: "eCommerce Services",
  description: "Explore marketplace management, store development, listing optimisation, PPC, creative and analytics services across major eCommerce platforms.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Connected eCommerce services built around measurable growth"
        description="From marketplace account management and listing optimisation to storefront development, advertising, creative and analytics, we connect every discipline through one commercial plan."
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/contact" variant="white" arrow>Discuss your requirements</PrimaryButton>
            <PrimaryButton href="/portfolio" variant="ghost-white">View case studies</PrimaryButton>
          </div>
        }
      />

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="Core capabilities" title="Specialist support from strategy through daily execution" description="Choose a focused service or combine capabilities into an ongoing plan tailored to your platforms, catalogue, team and growth stage." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article id={service.slug} key={service.slug} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(43,53,67,0.06)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_55px_rgba(22,108,210,0.12)]">
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#166CD2]/10 text-[#166CD2] transition group-hover:bg-[#166CD2] group-hover:text-white"><AppIcon name={service.icon as IconName} size={24} /></span>
                  <span className="text-sm font-bold text-slate-200">0{index + 1}</span>
                </div>
                <h2 className="mt-6 text-2xl font-bold text-[#2B3543]">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-[#166CD2]"><AppIcon name="check" size={13} /></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-shell">
          <SectionHeading eyebrow="Platform expertise" title="The right service mix for each marketplace and storefront" description="Every platform has different search logic, compliance requirements, customer behaviour and advertising tools. Our work is adapted accordingly." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {platformServices.map((item) => (
              <article key={item.platform} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold text-[#2B3543]">{item.platform}</h2>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#166CD2]"><AppIcon name="store" size={20} /></span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.items.map((service) => <span key={service} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">{service}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#2B3543] text-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Delivery framework</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">A structured process that keeps strategy and execution connected</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">Every engagement has a clear route from discovery through implementation, reporting and continuous improvement.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <article key={step.number} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                  <span className="text-xs font-bold text-blue-300">{step.number}</span>
                  <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <PlatformStrip label="Marketplace and storefront expertise across a connected commerce ecosystem" />
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-shell">
          <SectionHeading eyebrow="Platform FAQs" title="Detailed answers for each commerce channel" description="Select a platform to review common questions about setup, optimisation, advertising, operations and support." align="center" />
          <div className="mx-auto mt-12 max-w-4xl"><PlatformFaqs groups={platformFaqGroups} /></div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-[#166CD2] px-6 py-12 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Tailored scope</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">Build a service plan around your current platform, team and growth priorities.</h2>
          </div>
          <div className="mt-7 shrink-0 lg:mt-0"><PrimaryButton href="/contact" variant="white" arrow>Request a consultation</PrimaryButton></div>
        </div>
      </section>
    </div>
  );
}

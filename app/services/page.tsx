import type { Metadata } from "next";
import Image from "next/image";
import { AppIcon } from "@/components/app-icon";
import { FaqList } from "@/components/faq-list";
import { PlatformStrip } from "@/components/platform-strip";
import { PrimaryButton } from "@/components/primary-button";
import { faqs, services } from "@/data/site";

export const metadata: Metadata = {
  title: "eCommerce Services",
  description:
    "Marketplace management, store development, listing optimisation, paid advertising, creative and reporting for growing eCommerce brands.",
};

const heroNeeds = [
  { number: "01", label: "Run marketplaces day to day", href: "#marketplace-management" },
  { number: "02", label: "Improve product visibility", href: "#listing-optimisation" },
  { number: "03", label: "Build a better storefront", href: "#store-development" },
  { number: "04", label: "Make growth measurable", href: "#analytics-reporting" },
];

const trustBar = [
  { value: "7", label: "Commerce platforms" },
  { value: "6", label: "Specialist capabilities" },
  { value: "Flexible", label: "Project or ongoing scope" },
  { value: "100%", label: "Client asset ownership" },
];

const engagementOptions = [
  {
    number: "01",
    title: "Launch",
    description: "For a new store, marketplace or product range.",
    points: ["Platform setup and configuration", "Catalogue and content preparation", "Launch checks and handover"],
  },
  {
    number: "02",
    title: "Improve",
    description: "For an active channel that is underperforming.",
    points: ["Focused audit of the current issue", "Prioritised fixes and implementation", "Performance review after changes"],
  },
  {
    number: "03",
    title: "Manage",
    description: "For brands that need reliable ongoing support.",
    points: ["Agreed monthly priorities", "Specialist execution across channels", "Clear reporting and next actions"],
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Define the priority",
    points: ["Business goal and current bottleneck", "Platform, catalogue and access requirements"],
  },
  {
    number: "02",
    title: "Agree the scope",
    points: ["Deliverables, ownership and approvals", "Timeline and reporting rhythm"],
  },
  {
    number: "03",
    title: "Execute and improve",
    points: ["Work completed by the relevant specialists", "Results reviewed before the next priority"],
  },
];

const metrics = [
  { value: "100%", label: "Year-over-year growth" },
  { value: "£1,716.15", label: "Gross sales" },
  { value: "301", label: "Units sold" },
];

const selectedFaqQuestions = new Set([
  "What services do you offer?",
  "Which marketplaces and platforms do you support?",
  "Can you improve an existing store instead of rebuilding it?",
  "Do you offer custom packages?",
  "Will I receive reports and retain ownership of my assets?",
]);

const serviceFaqs = faqs.filter((faq) => selectedFaqQuestions.has(faq.question));

export default function ServicesPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative border-b border-slate-200 bg-[#f4f8fc] pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="surface-grid absolute inset-0 opacity-60" />
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#166CD2]/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />

        <div className="container-shell relative grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#166CD2]">eCommerce Services</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-[#2B3543] sm:text-5xl lg:text-[58px]">
              Practical support for the parts of eCommerce that need attention now.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Choose one focused service or bring marketplace, storefront, creative and performance work into one clear plan.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Clear scope before work starts", "Specialists matched to the task", "Accounts and assets stay yours"].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm font-semibold leading-6 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#166CD2]" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact" arrow>Discuss your requirements</PrimaryButton>
              <PrimaryButton href="#core-services" variant="outline">Explore services</PrimaryButton>
            </div>
          </div>

          <div className="border-y border-slate-300 lg:border-l lg:border-y-0 lg:pl-10">
            <p className="py-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 lg:pt-0">Start with your current need</p>
            <nav aria-label="Service needs">
              {heroNeeds.map((need) => (
                <a
                  key={need.number}
                  href={need.href}
                  className="group grid grid-cols-[38px_1fr_auto] items-center gap-3 border-t border-slate-300 py-5 text-[#2B3543] transition hover:text-[#166CD2]"
                >
                  <span className="text-xs font-bold text-[#166CD2]">{need.number}</span>
                  <span className="text-base font-bold sm:text-lg">{need.label}</span>
                  <AppIcon name="arrow" size={18} className="transition group-hover:translate-x-1" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-200">
        <div className="container-shell grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
          {trustBar.map((item) => (
            <div key={item.label} className="bg-white px-4 py-5 text-center sm:px-5 sm:py-6">
              <strong className="block text-xl font-bold text-[#2B3543] sm:text-2xl">{item.value}</strong>
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="core-services" className="scroll-mt-24 py-14 sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Core capabilities</p>
              <h2 className="mt-3 text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#2B3543] sm:text-5xl lg:text-[54px]">Services built around real operating needs.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
              Each service explains when it is useful, what the team handles and the practical improvement it is designed to support.
            </p>
          </div>

          <div className="mt-10 border-b border-slate-300">
            {services.map((service, index) => (
              <article
                id={service.slug}
                key={service.slug}
                className="scroll-mt-28 grid gap-6 border-t border-slate-300 py-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-12 lg:py-10"
              >
                <div className="flex gap-5">
                  <span className="pt-1 text-sm font-bold text-[#166CD2]">0{index + 1}</span>
                  <div>
                    <h3 className="text-2xl font-bold leading-tight tracking-[-0.025em] text-[#2B3543] sm:text-3xl">{service.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">{service.description}</p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#166CD2]">Useful when</p>
                    <p className="mt-2 text-base font-semibold leading-7 text-[#2B3543]">{service.bestFor}</p>
                    <div className="mt-5 border-l-2 border-[#166CD2] pl-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">Designed to improve</p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">{service.outcome}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#166CD2]">What we handle</p>
                    <ul className="mt-3 grid gap-2.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                          <AppIcon name="check" size={16} className="mt-1 shrink-0 text-emerald-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2B3543] py-14 text-white sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Choose the right starting point</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[56px]">Support that matches the stage you are in.</h2>
          </div>

          <div className="mt-10 grid border-y border-white/15 lg:grid-cols-3">
            {engagementOptions.map((option, index) => (
              <article key={option.number} className={`py-7 lg:px-8 ${index < engagementOptions.length - 1 ? "border-b border-white/15 lg:border-b-0 lg:border-r" : ""} lg:first:pl-0 lg:last:pr-0`}>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-blue-300">{option.number}</span>
                  <span className="h-px w-8 bg-blue-300/60" />
                  <h3 className="text-2xl font-bold">{option.title}</h3>
                </div>
                <p className="mt-4 text-sm font-semibold leading-6 text-white">{option.description}</p>
                <ul className="mt-4 grid gap-2.5">
                  {option.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-14">
          <div className="relative min-h-[330px] overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-[0_18px_55px_rgba(43,53,67,0.12)] sm:min-h-[420px]">
            <Image src="/case-studies/ebay-case-1.png" alt="eBay Seller Hub performance evidence" fill className="object-cover object-left-top" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Selected client result</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#2B3543] sm:text-4xl">Marketplace work connected to measurable progress.</h2>
            <ul className="mt-6 grid gap-2.5">
              {["Listings refined using search and Seller Hub data", "Inventory and order workflows organised", "Performance reviewed against the previous period"].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                  <AppIcon name="check" size={16} className="mt-1 shrink-0 text-emerald-600" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-7 grid grid-cols-3 border-y border-slate-300">
              {metrics.map((metric) => (
                <div key={metric.label} className="py-5 pr-3">
                  <strong className="block text-xl font-bold text-[#2B3543] sm:text-2xl">{metric.value}</strong>
                  <span className="mt-1 block text-[10px] font-semibold leading-4 uppercase tracking-[0.08em] text-slate-500">{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-7"><PrimaryButton href="/portfolio#ebay-transformation" variant="outline" arrow>View the complete case study</PrimaryButton></div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">From requirement to delivery</p>
              <h2 className="mt-3 text-4xl font-bold leading-none tracking-[-0.045em] text-[#2B3543] sm:text-5xl lg:text-[54px]">How Service Delivery Works</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-600">A clear scope, visible ownership and practical next steps throughout the engagement.</p>
          </div>

          <div className="mt-9 grid border-y border-slate-300 md:grid-cols-3">
            {deliverySteps.map((step) => (
              <article key={step.number} className="border-b border-slate-200 py-7 md:border-b-0 md:border-r md:px-7 md:last:border-r-0 md:first:pl-0 md:last:pr-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-[#166CD2]">{step.number}</span>
                  <span className="h-px flex-1 bg-slate-300" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#2B3543]">{step.title}</h3>
                <ul className="mt-4 grid gap-2.5">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#166CD2]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="platforms" className="scroll-mt-24 py-12 sm:py-14">
        <div className="container-shell">
          <PlatformStrip label="Experience across the platforms your customers already use" />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="container-shell grid gap-9 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Before we start</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#2B3543] sm:text-5xl">Common Service Questions</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">Short answers about scope, platforms, ownership and ongoing support.</p>
          </div>
          <FaqList items={serviceFaqs} />
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#166CD2] px-6 py-10 text-white shadow-[0_22px_65px_rgba(22,108,210,0.22)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Start with the current challenge</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">Tell us what is slowing the store, marketplace or team down.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50 sm:text-base">We will help you define a focused scope based on the platform, priority and result you need.</p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0"><PrimaryButton href="/contact" variant="white" arrow>Discuss your requirements</PrimaryButton></div>
        </div>
      </section>
    </div>
  );
}

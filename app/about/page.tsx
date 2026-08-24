import type { Metadata } from "next";
import Image from "next/image";
import { AppIcon, type IconName } from "@/components/app-icon";
import { PlatformStrip } from "@/components/platform-strip";
import { PrimaryButton } from "@/components/primary-button";
import { absoluteUrl, breadcrumbSchema, createPageMetadata, jsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About DevProdigee",
  description: "Meet the connected eCommerce team helping brands manage marketplaces, improve storefronts and build clearer day-to-day operations.",
  path: "/about",
  keywords: ["DevProdigee eCommerce agency", "eCommerce specialists", "marketplace management team"],
});

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${absoluteUrl("/about")}#webpage`,
  url: absoluteUrl("/about"),
  name: "About DevProdigee",
  description: "The mission, specialists and working approach behind DevProdigee eCommerce.",
  about: { "@id": `${absoluteUrl("/")}#organization` },
};

const trustPoints = [
  "Platform-specific specialists",
  "Clear workflows and practical reporting",
  "Your accounts and business assets stay yours",
];

const trustBar = [
  { value: "7+", label: "Commerce platforms" },
  { value: "Global", label: "Remote client support" },
  { value: "One team", label: "Connected execution" },
  { value: "100%", label: "Client asset ownership" },
];

const missionPoints = [
  {
    number: "01",
    title: "Make daily eCommerce work easier to manage",
    points: ["Clear priorities across each active channel", "Fewer handoffs between separate suppliers"],
  },
  {
    number: "02",
    title: "Keep decisions connected to business results",
    points: ["Work focused on the current bottleneck", "Reporting that leads to a practical next action"],
  },
  {
    number: "03",
    title: "Help clients grow without losing control",
    points: ["Accounts, data and payments stay with the client", "Support can expand as the business needs change"],
  },
];

const problems = [
  {
    icon: "clock",
    problem: "Marketplace work is taking over the day",
    support: "Structured support for listings, orders, inventory and routine account tasks.",
  },
  {
    icon: "search",
    problem: "Products are live but difficult to find",
    support: "Keyword-led listing improvements built around how customers search and compare.",
  },
  {
    icon: "store",
    problem: "Channels are operating in separate silos",
    support: "Clearer workflows across marketplaces, storefronts and day-to-day operations.",
  },
  {
    icon: "chart",
    problem: "Activity is high but progress is unclear",
    support: "Focused reporting that connects completed work with practical next actions.",
  },
];

const differences = [
  {
    number: "01",
    title: "Specialist expertise",
    points: ["Platform-specific marketplace support", "Development, creative and performance skills"],
  },
  {
    number: "02",
    title: "One working plan",
    points: ["Shared priorities across every service", "Less fragmented delivery and communication"],
  },
  {
    number: "03",
    title: "Visible progress",
    points: ["Clear updates on completed work", "Agreed actions for the next stage"],
  },
  {
    number: "04",
    title: "Client ownership",
    points: ["Your accounts and data remain yours", "Important changes stay within your approval process"],
  },
];

const team = [
  {
    role: "Marketplace Specialist",
    focus: "Account health, listings, orders and inventory",
    image: "/team/marketplace-specialist.svg",
  },
  {
    role: "Store Developer",
    focus: "Shopify, WooCommerce, integrations and performance",
    image: "/team/store-developer.svg",
  },
  {
    role: "Creative Specialist",
    focus: "Product visuals, storefront assets and marketplace content",
    image: "/team/creative-specialist.svg",
  },
  {
    role: "Performance Marketer",
    focus: "PPC, campaign optimisation and reporting",
    image: "/team/performance-marketer.svg",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    points: ["Business goals and active platforms", "Current gaps and pressure points"],
  },
  {
    number: "02",
    title: "Prioritise",
    points: ["Most useful next action", "Clear scope and client approval"],
  },
  {
    number: "03",
    title: "Execute",
    points: ["Right specialist for each task", "Shared progress updates"],
  },
  {
    number: "04",
    title: "Improve",
    points: ["Results reviewed together", "Next priorities agreed"],
  },
];

const metrics = [
  { value: "100%", label: "Year-over-year growth" },
  { value: "£1,716.15", label: "Gross sales" },
  { value: "301", label: "Units sold" },
];

function IconBadge({ name, dark = false }: { name: IconName; dark?: boolean }) {
  return (
    <span
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${dark ? "bg-white/10 text-blue-200" : "bg-blue-50 text-[#166CD2]"}`}
    >
      <AppIcon name={name} size={21} />
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([
        aboutSchema,
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]),
      ])} />
      <section className="relative border-b border-slate-200 bg-[#f4f8fc] pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="surface-grid absolute inset-0 opacity-60" />
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#166CD2]/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />

        <div className="container-shell relative grid items-center gap-10 lg:grid-cols-[1.03fr_.97fr] lg:gap-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#166CD2]">About DevProdigee</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.06] tracking-[-0.045em] text-[#2B3543] sm:text-5xl lg:text-[58px]">
              eCommerce support built around how your business actually runs.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We help brands manage marketplaces, improve storefronts and organise the work behind sustainable online growth.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm font-semibold leading-6 text-slate-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                    <AppIcon name="check" size={13} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact" arrow>Book a free strategy call</PrimaryButton>
              <PrimaryButton href="/portfolio" variant="outline">View client results</PrimaryButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -left-5 top-10 h-28 w-28 rounded-full bg-[#166CD2]/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(43,53,67,0.16)] sm:p-4">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] bg-[#dfeaf6]">
                <Image
                  src="/team/founder.svg"
                  alt="Muhammad Uzair, Founder and CEO of DevProdigee"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 500px, 90vw"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                  <p className="text-base font-bold text-[#2B3543]">Muhammad Uzair</p>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500">Founder and CEO, DevProdigee</p>
                </div>
              </div>
            </div>
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

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">What guides our work</p>
            <h2 className="mt-3 text-4xl font-bold leading-none tracking-[-0.045em] text-[#2B3543] sm:text-5xl lg:text-[54px]">Our Mission</h2>
            <p className="mt-5 max-w-md text-xl font-semibold leading-8 text-slate-700">
              Make eCommerce operations clearer, more manageable and ready for growth.
            </p>
          </div>

          <div className="border-y border-slate-200">
            {missionPoints.map((item) => (
              <article key={item.number} className="grid gap-4 border-b border-slate-200 py-6 last:border-b-0 sm:grid-cols-[52px_1fr] sm:gap-5 sm:py-7">
                <span className="text-sm font-bold text-[#166CD2]">{item.number}</span>
                <div>
                  <h3 className="text-xl font-bold leading-7 text-[#2B3543]">{item.title}</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-x-6">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#166CD2]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">What clients bring to us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#2B3543] sm:text-4xl">Common problems. Clearer support.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">Start with the pressure point that is slowing the business down.</p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {problems.map((item) => (
              <article key={item.problem} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_34px_rgba(43,53,67,0.05)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_16px_42px_rgba(22,108,210,0.09)] sm:p-7">
                <div className="flex items-start gap-4">
                  <IconBadge name={item.icon as IconName} />
                  <div>
                    <h3 className="text-lg font-bold leading-6 text-[#2B3543]">{item.problem}</h3>
                    <div className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-600">
                      <AppIcon name="arrow" size={17} className="mt-1 shrink-0 text-[#166CD2]" />
                      <span>{item.support}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2B3543] py-14 text-white sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">A better way to work together</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[56px]">
              Why Choose <span className="text-blue-300">DevProdigee?</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">Clear ownership, relevant expertise and one plan everyone can follow.</p>
          </div>

          <div className="mt-10 grid border-y border-white/15 sm:grid-cols-2">
            {differences.map((item, index) => (
              <article
                key={item.number}
                className={`py-7 sm:px-7 ${index < 3 ? "border-b border-white/15" : ""} ${index === 2 ? "sm:border-b-0" : ""} ${index % 2 === 1 ? "sm:border-l sm:border-white/15" : "sm:pr-10"}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-blue-300">{item.number}</span>
                  <span className="h-px w-8 bg-blue-300/60" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <ul className="mt-4 grid gap-2 pl-0 sm:pl-[68px]">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                      <AppIcon name="check" size={16} className="mt-1 shrink-0 text-emerald-300" />
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
        <div className="container-shell">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">People behind the work</p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#2B3543] sm:text-4xl">Different specialists. One shared client objective.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">Marketplace, development, creative and performance expertise working within one delivery team.</p>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-[1.15fr_.85fr_.85fr]">
            <article className="relative overflow-hidden rounded-[28px] bg-[#eef4fb] lg:row-span-2">
              <div className="relative min-h-[440px]">
                <Image src="/team/founder.svg" alt="Muhammad Uzair, Founder and CEO" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#2B3543]/95 p-5 text-white shadow-xl backdrop-blur-md">
                  <p className="text-xl font-bold">Muhammad Uzair</p>
                  <p className="mt-1 text-sm font-semibold text-blue-200">Founder and CEO</p>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-200">
                    <li className="flex items-start gap-2"><AppIcon name="check" size={16} className="mt-0.5 shrink-0 text-emerald-300" />Technology and eCommerce operations background</li>
                    <li className="flex items-start gap-2"><AppIcon name="check" size={16} className="mt-0.5 shrink-0 text-emerald-300" />Focused on connected, accountable client delivery</li>
                  </ul>
                </div>
              </div>
            </article>

            {team.map((member) => (
              <article key={member.role} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_32px_rgba(43,53,67,0.06)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image src={member.image} alt={member.role} fill className="object-cover transition duration-500 hover:scale-[1.03]" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#2B3543]">{member.role}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{member.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">From first call to ongoing progress</p>
              <h2 className="mt-3 text-4xl font-bold leading-none tracking-[-0.045em] text-[#2B3543] sm:text-5xl lg:text-[54px]">How We Work</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-600">Four clear stages. No unnecessary layers and no confusion about what happens next.</p>
          </div>

          <div className="mt-9 grid border-y border-slate-300 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article key={step.number} className="border-b border-slate-200 py-7 md:px-6 md:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:first:pl-0 lg:last:pr-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-[#166CD2]">{step.number}</span>
                  <span className="h-px flex-1 bg-slate-300" />
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-[-0.025em] text-[#2B3543]">{step.title}</h3>
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

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <article className="overflow-hidden rounded-[28px] bg-[#2B3543] text-white shadow-[0_20px_60px_rgba(43,53,67,0.18)]">
            <div className="grid h-full md:grid-cols-[.88fr_1.12fr]">
              <div className="relative min-h-[260px]">
                <Image src="/case-studies/ebay-case-1.png" alt="eBay performance evidence" fill className="object-cover object-left-top" sizes="(min-width: 768px) 35vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B3543]/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#2B3543]/40" />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Selected client result</p>
                <h2 className="mt-3 text-2xl font-bold leading-tight">A more structured eBay growth programme.</h2>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                      <strong className="block text-lg font-bold text-white sm:text-xl">{metric.value}</strong>
                      <span className="mt-1 block text-[10px] leading-4 text-slate-300">{metric.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6"><PrimaryButton href="/portfolio#ebay-transformation" variant="white" arrow>View the case study</PrimaryButton></div>
              </div>
            </div>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#166CD2]">Work behind the result</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-[#2B3543]">Practical changes across the account.</h2>
            <ul className="mt-6 border-y border-slate-200">
              {["Listing titles, keywords and item specifics refined", "Seller Hub data reviewed throughout the work", "Inventory and order workflows organised"].map((point) => (
                <li key={point} className="flex items-start gap-3 border-b border-slate-200 py-4 text-sm font-semibold leading-6 text-slate-700 last:border-b-0">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#166CD2]" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-12 sm:py-14">
        <div className="container-shell">
          <PlatformStrip label="Experience across the platforms your customers already use" />
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#166CD2] px-6 py-10 text-white shadow-[0_22px_65px_rgba(22,108,210,0.22)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Start with the current challenge</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">Tell us where your eCommerce operation is getting stuck.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50 sm:text-base">Share the platform, the pressure point and the result you are working toward.</p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0"><PrimaryButton href="/contact" variant="white" arrow>Book a free strategy call</PrimaryButton></div>
        </div>
      </section>
    </div>
  );
}

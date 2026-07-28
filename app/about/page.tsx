import type { Metadata } from "next";
import { AppIcon, type IconName } from "@/components/app-icon";
import { PageHero } from "@/components/page-hero";
import { PlatformStrip } from "@/components/platform-strip";
import { PrimaryButton } from "@/components/primary-button";
import { SectionHeading } from "@/components/section-heading";
import { processSteps, values } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn how DevProdigee eCommerce connects marketplace strategy, store development, creative, advertising and operations for sustainable growth.",
};

const disciplines = [
  { icon: "target", title: "Marketplace Strategists", text: "Channel planning, account health, category opportunity and expansion priorities." },
  { icon: "code", title: "Store Developers", text: "Shopify and WooCommerce UX, integrations, performance and conversion-focused builds." },
  { icon: "palette", title: "Creative Specialists", text: "Product visuals, storefront assets, A+ Content and brand-consistent creative systems." },
  { icon: "chart", title: "Performance Marketers", text: "Marketplace PPC, campaign optimisation, analytics and practical reporting." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About us"
        title="A practical eCommerce partner for brands that want sustainable growth"
        description="DevProdigee eCommerce brings marketplace strategy, store development, creative, advertising and operations into one coordinated team. We focus on clear priorities, strong execution and measurable business improvement."
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/contact" variant="white" arrow>Meet us on a strategy call</PrimaryButton>
            <PrimaryButton href="/portfolio" variant="ghost-white">See our work</PrimaryButton>
          </div>
        }
      />

      <section className="section-space">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr]">
          <div>
            <SectionHeading eyebrow="Our purpose" title="Make eCommerce growth clearer, more connected and easier to execute" description="Many brands manage stores, marketplaces, content, ads and operations through separate suppliers or disconnected internal workflows. We create one structured plan and connect the work across every channel." />
            <p className="mt-5 text-base leading-8 text-slate-600">Our role can range from a focused optimisation project to ongoing management across multiple platforms. In every case, the goal is the same: improve visibility, customer experience, operational control and commercial performance without taking ownership away from your business.</p>
          </div>
          <div className="surface-grid relative min-h-[460px] overflow-hidden rounded-[32px] bg-slate-100 p-6 sm:p-9">
            <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-[#166CD2]/15 blur-3xl" />
            <div className="relative grid h-full gap-4 sm:grid-cols-2">
              <article className="rounded-3xl bg-[#2B3543] p-7 text-white sm:translate-y-10">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#166CD2]"><AppIcon name="target" size={24} /></span>
                <h2 className="mt-7 text-2xl font-bold">Strategy with direction</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">Priorities are based on your current stage, available resources and the strongest commercial opportunities.</p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#166CD2]"><AppIcon name="people" size={24} /></span>
                <h2 className="mt-7 text-2xl font-bold text-[#2B3543]">Execution that connects</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">Marketplace, development, creative and advertising work is coordinated around one shared growth plan.</p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl sm:col-span-2 sm:mx-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#166CD2]">Built for ownership</p><h2 className="mt-2 text-2xl font-bold text-[#2B3543]">Your accounts, data and assets remain yours.</h2></div>
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-600"><AppIcon name="shield" size={28} /></span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-shell">
          <SectionHeading eyebrow="Our principles" title="The standards behind every engagement" description="These principles guide how we plan, communicate, execute and evaluate our work." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <article key={value.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-sm font-bold text-[#166CD2]">0{index + 1}</span>
                <h2 className="mt-5 text-xl font-bold text-[#2B3543]">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#2B3543] text-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">One coordinated team</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">Specialist disciplines, one shared commercial objective</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">Marketplace strategy, development, creative and advertising are coordinated rather than treated as disconnected tasks.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {disciplines.map((discipline) => (
                <article key={discipline.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#166CD2] text-white"><AppIcon name={discipline.icon as IconName} size={22} /></span>
                    <div><h3 className="text-lg font-bold">{discipline.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{discipline.text}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="How collaboration works" title="Transparent from the first conversation to the final report" description="You always know what is being worked on, why it matters, what decisions are needed and how performance is being evaluated." align="center" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.number} className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="absolute right-5 top-5 text-3xl font-bold text-slate-100">{step.number}</span>
                <h3 className="relative mt-9 text-lg font-bold text-[#2B3543]">{step.title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-shell"><PlatformStrip label="Marketplace and storefront expertise across a connected commerce ecosystem" /></div>
      </section>

      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-[#166CD2] px-6 py-12 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Let&apos;s work together</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">Bring us your current challenge and leave with a clearer next step.</h2>
          </div>
          <div className="mt-7 shrink-0 lg:mt-0"><PrimaryButton href="/contact" variant="white" arrow>Book a free consultation</PrimaryButton></div>
        </div>
      </section>
    </div>
  );
}

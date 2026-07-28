import type { Metadata } from "next";
import { AppIcon } from "@/components/app-icon";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { faqs, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact DevProdigee eCommerce to discuss marketplace management, store development, listing optimisation, advertising or multi-channel growth.",
};

const briefingPoints = [
  "The platforms or storefronts you currently use.",
  "Your main commercial or operational challenge.",
  "The services you believe you need, even if you are not certain.",
  "Any relevant launch date, campaign window or internal deadline.",
];

const nextSteps = [
  { title: "We review the enquiry", text: "Your message gives us the context needed to prepare for a useful first discussion." },
  { title: "We clarify the opportunity", text: "The consultation focuses on goals, constraints, platform fit, responsibilities and priorities." },
  { title: "We recommend a route forward", text: "Where there is a good fit, we outline a tailored scope, delivery approach and next steps." },
];

const pricingFaq = faqs.find((item) => item.question === "Do you offer custom packages?");
const ownershipFaq = faqs.find((item) => item.question === "Will I receive reports and retain ownership of my assets?");
const contactFaqs = [
  { category: "Confidentiality", question: "Can you sign an NDA before we share sensitive information?", answer: "Yes. We can sign an NDA before discussing confidential account, product or commercial information." },
  ...(pricingFaq ? [pricingFaq] : []),
  ...(ownershipFaq ? [ownershipFaq] : []),
  { category: "Getting started", question: "Do I need to know exactly which service I need?", answer: "No. Share the business problem, current platforms and desired outcome. We can help define the right starting scope." },
];

export default function ContactPage() {
  return (
    <div>
      <PageHero eyebrow="Contact us" title="Tell us what you want to improve, launch or scale" description="Share your current platforms, goals and biggest constraints. We’ll use that context to recommend a practical starting point for your eCommerce business." />

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <aside className="lg:sticky lg:top-8">
            <SectionHeading eyebrow="Start a conversation" title="A focused first step, not a generic sales call" description="Use the form to outline your project. You can request a store build, marketplace management, optimisation, paid growth or a multi-channel plan." />
            <div className="mt-8 space-y-4">
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-[#166CD2]"><AppIcon name="mail" size={22} /></span>
                <span><span className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Email</span><span className="mt-1 block text-sm font-bold text-[#2B3543]">{site.email}</span></span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-[#166CD2]"><AppIcon name="location" size={22} /></span>
                <span><span className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Coverage</span><span className="mt-1 block text-sm font-bold text-[#2B3543]">{site.location}</span></span>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-[#166CD2]"><AppIcon name="clock" size={22} /></span>
                <span><span className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Consultation</span><span className="mt-1 block text-sm font-bold text-[#2B3543]">Available by scheduled appointment</span></span>
              </div>
            </div>
            <div className="mt-7 rounded-3xl bg-[#2B3543] p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Helpful information to include</p>
              <ul className="mt-5 space-y-3">
                {briefingPoints.map((point) => <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-300"><span className="mt-0.5 text-blue-300"><AppIcon name="check" size={16} /></span>{point}</li>)}
              </ul>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-shell">
          <SectionHeading eyebrow="What happens next" title="A simple, transparent consultation process" description="The first conversation is used to understand fit, scope and the most valuable next action." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {nextSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#166CD2] text-sm font-bold text-white">0{index + 1}</span>
                <h2 className="mt-6 text-xl font-bold text-[#2B3543]">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <SectionHeading eyebrow="Before you enquire" title="Common consultation questions" description="These answers cover confidentiality, packages, reporting and ownership." />
          <FaqList items={contactFaqs} />
        </div>
      </section>
    </div>
  );
}

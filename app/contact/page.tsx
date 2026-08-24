import type { Metadata } from "next";
import { AppIcon } from "@/components/app-icon";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, createPageMetadata, jsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact DevProdigee",
  description: "Contact DevProdigee to discuss marketplace management, Shopify or WooCommerce development, listing optimisation, PPC or eCommerce reporting.",
  path: "/contact",
  keywords: ["contact eCommerce agency", "hire marketplace management agency", "eCommerce consultation"],
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${absoluteUrl("/contact")}#webpage`,
  url: absoluteUrl("/contact"),
  name: "Contact DevProdigee",
  description: "Contact DevProdigee eCommerce to discuss a marketplace, storefront or growth requirement.",
  mainEntity: { "@id": `${absoluteUrl("/")}#organization` },
};

export default function ContactPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_70%)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([
        contactSchema,
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
      ])} />
      <section className="pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pt-40">
        <div className="container-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <aside className="lg:sticky lg:top-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#166CD2]">Contact us</p>
            <h1 className="mt-3 max-w-lg text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#2B3543] sm:text-5xl">
              Start a Conversation
            </h1>
            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
              Use the form to outline your project. You can request a store build, marketplace management, optimisation, paid growth or a multi-channel plan.
            </p>

            <div className="mt-8">
              <a href="#project-enquiry" className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-[#166CD2]"><AppIcon name="mail" size={22} /></span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Email</span>
                  <span className="mt-1 block text-sm font-bold text-[#2B3543]">{site.email}</span>
                </span>
              </a>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}

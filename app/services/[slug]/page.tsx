import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppIcon, type IconName } from "@/components/app-icon";
import { FaqList } from "@/components/faq-list";
import { PrimaryButton } from "@/components/primary-button";
import { getSeoServicePage, seoServicePages } from "@/data/seo-services";
import { absoluteUrl, breadcrumbSchema, createPageMetadata, faqSchema, jsonLd } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return seoServicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getSeoServicePage(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.metaTitle,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
    imageAlt: `${service.metaTitle} by DevProdigee eCommerce`,
  });
}

export default async function SeoServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getSeoServicePage(slug);
  if (!service) notFound();

  const related = service.related.map(getSeoServicePage).filter((item) => item !== undefined);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.metaTitle, path: `/services/${service.slug}` },
  ]);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.metaTitle,
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}`),
    serviceType: service.metaTitle,
    areaServed: "Worldwide",
    provider: {
      "@type": "Organization",
      "@id": `${absoluteUrl("/")}#organization`,
      name: "DevProdigee eCommerce",
      url: absoluteUrl("/"),
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.metaTitle} capabilities`,
      itemListElement: service.included.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };

  return (
    <div className="overflow-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([serviceSchema, breadcrumbs, faqSchema(service.faqs)])} />

      <section className="relative border-b border-slate-200 bg-[#f4f8fc] pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="surface-grid absolute inset-0 opacity-50" />
        <div className="absolute -left-20 top-24 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="container-shell relative">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-[#166CD2]">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-[#166CD2]">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2B3543]">{service.platform ?? service.metaTitle}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-14">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#166CD2]">{service.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#2B3543] sm:text-5xl lg:text-[58px]">{service.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{service.lead}</p>

              <ul className="mt-7 grid gap-3 border-y border-slate-300 py-5 sm:grid-cols-3 sm:gap-5">
                {service.proofPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm font-semibold leading-6 text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#166CD2]" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/contact#project-enquiry" arrow>Discuss your requirements</PrimaryButton>
                <PrimaryButton href="#service-details" variant="outline">See what is included</PrimaryButton>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[540px] lg:justify-self-end">
              <div className="relative overflow-hidden rounded-[28px] border border-white bg-white/80 p-6 shadow-[0_24px_70px_rgba(43,53,67,0.11)] backdrop-blur-sm sm:p-8">
                <div className="flex items-center justify-between gap-5 border-b border-slate-200 pb-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#166CD2]">Focused service plan</p>
                    <p className="mt-2 text-xl font-bold text-[#2B3543]">{service.platform ?? "Connected eCommerce"}</p>
                  </div>
                  <div className="flex h-20 w-28 items-center justify-center rounded-2xl bg-slate-50 px-4">
                    {service.logo ? (
                      <Image src={service.logo} alt={`${service.platform} logo`} width={120} height={46} className="h-auto max-h-10 w-full object-contain" priority />
                    ) : (
                      <AppIcon name={service.icon as IconName} size={34} className="text-[#166CD2]" />
                    )}
                  </div>
                </div>

                <ol className="divide-y divide-slate-200">
                  {service.process.map((step, index) => (
                    <li key={step.title} className="grid grid-cols-[36px_1fr] gap-4 py-5">
                      <span className="pt-0.5 text-xs font-bold text-[#166CD2]">0{index + 1}</span>
                      <div>
                        <strong className="block text-base font-bold text-[#2B3543]">{step.title}</strong>
                        <p className="mt-1.5 text-sm leading-6 text-slate-500">{step.points.join(". ")}.</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service-details" className="scroll-mt-24 py-14 sm:py-16 lg:py-20">
        <div className="container-shell grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">What we handle</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#2B3543] sm:text-5xl">A focused scope with visible ownership</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">Start with the work that matters now. Add further support only when the business needs it.</p>
          </div>

          <div className="grid border-y border-slate-300 sm:grid-cols-2">
            {service.included.map((item, index) => (
              <div key={item} className={`flex items-start gap-3 py-5 sm:px-5 ${index % 2 === 0 ? "sm:border-r" : ""} ${index < service.included.length - 2 ? "border-b border-slate-200" : ""}`}>
                <span className="pt-0.5 text-xs font-bold text-[#166CD2]">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-semibold leading-6 text-[#2B3543]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#2B3543] py-14 text-white sm:py-16 lg:py-20">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Where it helps</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl">Useful when the current setup needs more control</h2>
          </div>
          <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {service.bestFor.map((item) => (
              <div key={item} className="border-t border-white/15 pt-4 text-sm font-semibold leading-6 text-slate-200">
                <span className="mr-3 text-blue-300">•</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Practical outcomes</p>
              <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#2B3543] sm:text-5xl">What the work is designed to improve</h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[24px] border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {service.outcomes.map((outcome, index) => (
                <div key={outcome} className="bg-white p-6 sm:p-7">
                  <span className="text-xs font-bold text-[#166CD2]">0{index + 1}</span>
                  <p className="mt-3 text-lg font-bold leading-7 text-[#2B3543]">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="container-shell grid gap-9 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Service questions</p>
            <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#2B3543] sm:text-5xl">Clear answers before we start</h2>
          </div>
          <FaqList items={service.faqs.map((faq) => ({ category: service.platform ?? "eCommerce", ...faq }))} />
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Related services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#2B3543] sm:text-4xl">Build the right combination of support</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-[24px] border border-slate-200 bg-slate-200 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="group bg-white p-6 transition hover:bg-blue-50/50 sm:p-7">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#166CD2]">{item.eyebrow}</span>
                <h3 className="mt-3 text-xl font-bold leading-7 text-[#2B3543]">{item.metaTitle}</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#166CD2]">View service <AppIcon name="arrow" size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#166CD2] px-6 py-10 text-white shadow-[0_22px_65px_rgba(22,108,210,0.22)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Start with your current priority</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">Tell us what needs to improve and where the work is getting stuck.</h2>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0"><PrimaryButton href="/contact#project-enquiry" variant="white" arrow>Book a free strategy call</PrimaryButton></div>
        </div>
      </section>
    </div>
  );
}

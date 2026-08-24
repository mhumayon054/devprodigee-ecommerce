import type { MetadataRoute } from "next";
import { seoServicePages } from "@/data/seo-services";
import { caseStudies } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date("2026-08-24T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified, changeFrequency: "monthly", priority: 0.95 },
    ...seoServicePages.map((service) => ({ url: absoluteUrl(`/services/${service.slug}`), lastModified, changeFrequency: "monthly" as const, priority: 0.85 })),
    { url: absoluteUrl("/portfolio"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...caseStudies.map((study) => ({ url: absoluteUrl(`/portfolio/${study.id}`), lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "monthly", priority: 0.75 },
  ];
}

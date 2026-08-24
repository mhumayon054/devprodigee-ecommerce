import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://devprodigee-ecommerce.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/portfolio",
    ...caseStudies.map((study) => `/portfolio/${study.id}`),
    "/about",
    "/contact",
  ];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.8 : 0.9,
  }));
}

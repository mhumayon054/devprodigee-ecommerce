import { seoServicePages } from "@/data/seo-services";
import { caseStudies } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export function GET() {
  const services = seoServicePages.map((service) => `- [${service.metaTitle}](${absoluteUrl(`/services/${service.slug}`)}): ${service.description}`).join("\n");
  const work = caseStudies.map((study) => `- [${study.title}](${absoluteUrl(`/portfolio/${study.id}`)}): ${study.summary}`).join("\n");
  const body = `# DevProdigee eCommerce

DevProdigee is an eCommerce agency providing marketplace management, storefront development, listing optimisation, PPC, creative and reporting support worldwide.

## Main pages

- [Home](${absoluteUrl("/")})
- [Services](${absoluteUrl("/services")})
- [Portfolio](${absoluteUrl("/portfolio")})
- [About](${absoluteUrl("/about")})
- [Contact](${absoluteUrl("/contact")})

## Services

${services}

## Published case studies

${work}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}

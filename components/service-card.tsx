import Link from "next/link";
import { AppIcon, type IconName } from "@/components/app-icon";

type Service = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(43,53,67,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_20px_55px_rgba(22,108,210,0.12)]">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#166CD2]/10 text-[#166CD2] transition group-hover:bg-[#166CD2] group-hover:text-white">
        <AppIcon name={service.icon as IconName} size={24} />
      </span>
      <h3 className="mt-6 text-xl font-bold text-[#2B3543]">{service.title}</h3>
      <p className="mt-3 text-sm font-normal leading-7 text-slate-600">{service.description}</p>
      <ul className="mt-5 space-y-2.5">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm font-semibold text-slate-600">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-[#166CD2]"><AppIcon name="check" size={13} /></span>
            {feature}
          </li>
        ))}
      </ul>
      <Link href="/services" className="mt-auto flex items-center gap-2 pt-7 text-sm font-bold text-[#166CD2]">Explore service <AppIcon name="arrow" size={17} /></Link>
    </article>
  );
}

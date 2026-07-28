import type { ElementType } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tag?: ElementType;
};

export function SectionHeading({ eyebrow, title, description, align = "left", tag: Tag = "h2" }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#166CD2]">{eyebrow}</p> : null}
      <Tag className="text-3xl font-bold leading-tight tracking-[-0.025em] text-[#2B3543] sm:text-4xl lg:text-[42px]">{title}</Tag>
      {description ? <p className="mt-5 text-base font-normal leading-8 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

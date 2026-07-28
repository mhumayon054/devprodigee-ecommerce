import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { AppIcon } from "@/components/app-icon";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "dark" | "outline" | "white" | "ghost-white";
  arrow?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: "bg-[#166CD2] text-white shadow-lg shadow-[#166CD2]/25 hover:bg-[#105db8] focus:ring-blue-200",
  dark: "bg-[#2B3543] text-white shadow-lg shadow-[#2B3543]/20 hover:bg-[#1f2732] focus:ring-slate-300",
  outline: "border border-[#166CD2]/25 bg-white text-[#166CD2] hover:border-[#166CD2] hover:bg-blue-50 focus:ring-blue-100",
  white: "bg-white text-[#166CD2] shadow-lg shadow-slate-900/10 hover:bg-slate-50 focus:ring-white/30",
  "ghost-white": "border border-white/30 bg-transparent text-white hover:bg-white/10 focus:ring-white/20",
};

export function PrimaryButton({ children, href, variant = "primary", arrow = false, className = "", type = "button", ...buttonProps }: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 ${variants[variant]} ${className}`;
  const content = <>{children}{arrow ? <AppIcon name="arrow" size={19} /> : null}</>;

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    return external ? <a href={href} className={classes}>{content}</a> : <Link href={href} className={classes}>{content}</Link>;
  }

  return <button type={type} className={classes} {...buttonProps}>{content}</button>;
}

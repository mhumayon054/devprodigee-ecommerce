import Link from "next/link";

type Props = { inverse?: boolean };

export function LogoMark({ inverse = false }: Props) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="DevProdigee eCommerce home">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-[#166CD2] text-sm font-bold text-white shadow-lg shadow-blue-200/40">
        <span className="absolute -left-3 top-1 h-8 w-8 rotate-45 rounded-md border-4 border-white/25" />
        <span className="relative">DP</span>
      </span>
      <span>
        <span className={`block text-[18px] font-bold leading-none tracking-[-0.02em] ${inverse ? "text-white" : "text-[#166CD2]"}`}>
          DEVPRODIGEE
        </span>
        <span className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] ${inverse ? "text-slate-300" : "text-[#2B3543]/65"}`}>
          eCommerce Growth
        </span>
      </span>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";

type Props = { inverse?: boolean };

export function LogoMark({ inverse = false }: Props) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${inverse ? "rounded-xl bg-white px-3 py-2" : ""}`}
      aria-label="DevProdigee eCommerce home"
    >
      <Image
        src="/logo.webp"
        alt="DevProdigee — eCommerce Solutions"
        width={1216}
        height={313}
        priority={!inverse}
        className="h-auto w-[180px] sm:w-[205px] lg:w-[220px]"
        sizes="(max-width: 639px) 180px, (max-width: 1023px) 205px, 220px"
      />
    </Link>
  );
}

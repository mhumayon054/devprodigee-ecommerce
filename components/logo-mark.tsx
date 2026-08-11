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
        className="h-auto w-[205px] sm:w-[230px] lg:w-[250px]"
        sizes="(max-width: 639px) 205px, (max-width: 1023px) 230px, 250px"
      />
    </Link>
  );
}

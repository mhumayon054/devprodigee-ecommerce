import Image from "next/image";
import Link from "next/link";

type Props = { inverse?: boolean };

export function LogoMark({ inverse = false }: Props) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${inverse ? "rounded-xl bg-white px-3 py-2" : ""}`} aria-label="DevProdigee eCommerce home">
      <Image
        src="/logo-original.webp"
        alt="DevProdigee"
        width={2166}
        height={547}
        priority={!inverse}
        className="h-auto w-[170px] sm:w-[195px] lg:w-[208px]"
        sizes="(max-width: 639px) 170px, (max-width: 1023px) 195px, 208px"
      />
    </Link>
  );
}

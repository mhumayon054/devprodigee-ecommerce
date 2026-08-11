import Image from "next/image";
import Link from "next/link";

type Props = { inverse?: boolean };

export function LogoMark({ inverse = false }: Props) {
  return (
    <Link
      href="/"
      className={inverse ? "inline-flex shrink-0 items-center rounded-xl bg-white px-3 py-2" : "inline-flex shrink-0 items-center"}
      aria-label="DevProdigee eCommerce home"
    >
      <Image
        src="/logo-devprodigee.png"
        alt="DevProdigee"
        width={2165}
        height={546}
        className="h-auto w-[168px] sm:w-[184px] lg:w-[190px]"
        sizes="(max-width: 639px) 168px, (max-width: 1023px) 184px, 190px"
      />
    </Link>
  );
}

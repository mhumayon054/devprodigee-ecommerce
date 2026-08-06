import type { SVGProps } from "react";

const icons = {
  arrow: ["M5 12h14", "m13 6 6 6-6 6"],
  check: ["m5 12 4 4L19 6"],
  menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
  close: ["m6 6 12 12", "M18 6 6 18"],
  store: ["M4 9v11h16V9", "M3 4h18l-2 5H5L3 4Z", "M9 20v-6h6v6"],
  code: ["m8 9-3 3 3 3", "m8-6 3 3-3 3", "m14 5-4 14"],
  search: ["m21 21-4.35-4.35", "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"],
  target: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z", "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"],
  palette: ["M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 0 0-4H12a2 2 0 0 1 0-4 9 9 0 0 0-9-9Z", "M7.5 10h.01", "M9.5 6.5h.01", "M14 6.5h.01", "M17 10h.01"],
  chart: ["M4 20V10", "M10 20V4", "M16 20v-7", "M22 20H2"],
  mail: ["M4 5h16v14H4V5Z", "m4 7 8 6 8-6"],
  phone: ["M7 3H4a1 1 0 0 0-1 1c0 9.389 7.611 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2a13 13 0 0 1-6-6l2-2-2-4Z"],
  location: ["M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z", "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"],
  shield: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z", "m9 12 2 2 4-4"],
  people: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
  spark: ["m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z", "m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"],
  clock: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "M12 6v6l4 2"],
  external: ["M14 3h7v7", "M10 14 21 3", "M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7"],
  plus: ["M12 5v14", "M5 12h14"],
  minus: ["M5 12h14"],
  chevron: ["m6 9 6 6 6-6"],
} as const;

export type IconName = keyof typeof icons;

type Props = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
  size?: number;
};

export function AppIcon({ name, size = 24, className = "", ...props }: Props) {
  return (
    <svg
      className={`inline-block ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {icons[name].map((path, index) => (
        <path
          key={`${name}-${index}`}
          d={path}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const messages = [
  "Grow Your Brand",
  "Increase Conversions",
  "Sell Everywhere",
  "Strategy That Scales",
] as const;

export function RotatingHeroHeadline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const swapTimer = useRef<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible(false);
      swapTimer.current = window.setTimeout(() => {
        setIndex((current) => (current + 1) % messages.length);
        setVisible(true);
      }, 420);
    }, 2800);

    return () => {
      window.clearInterval(interval);
      if (swapTimer.current !== null) window.clearTimeout(swapTimer.current);
    };
  }, []);

  return (
    <h1
      className="mt-4 min-h-[1.08em] text-[38px] font-bold leading-[1.04] tracking-[-0.045em] text-[#2B3543] sm:text-[50px] lg:text-[58px]"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className={`hero-headline-word inline-block ${visible ? "is-visible" : "is-leaving"}`}>
        {messages[index]}
      </span>
    </h1>
  );
}

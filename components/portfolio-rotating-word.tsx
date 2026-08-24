"use client";

import { useEffect, useState } from "react";

const words = ["improved", "scaled", "organised", "strengthened"];

export function PortfolioRotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span key={index} className="portfolio-rotating-word inline-block bg-gradient-to-r from-[#4733a6] via-[#385ccc] to-[#12aee8] bg-clip-text text-transparent">
      {words[index]}
    </span>
  );
}

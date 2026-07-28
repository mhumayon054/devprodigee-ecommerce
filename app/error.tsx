"use client";

import { useEffect } from "react";
import { PrimaryButton } from "@/components/primary-button";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid min-h-[70vh] place-items-center bg-slate-50 px-5 py-24">
      <div className="w-full max-w-2xl rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#166CD2]">Something went wrong</p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#2B3543]">We could not load this page.</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">Please try again. If the problem continues, return to the homepage or contact the team directly.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <PrimaryButton onClick={reset} arrow>Try again</PrimaryButton>
          <PrimaryButton href="/" variant="outline">Return home</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

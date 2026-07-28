import { LogoMark } from "@/components/logo-mark";
import { PrimaryButton } from "@/components/primary-button";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#2B3543] px-5 py-12 text-white">
      <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl backdrop-blur sm:p-12">
        <div className="flex justify-center"><LogoMark inverse /></div>
        <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Error 404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">This page could not be found.</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-300">The page may have moved or the address may be incorrect.</p>
        <div className="mt-8"><PrimaryButton href="/" variant="white" arrow>Return to the homepage</PrimaryButton></div>
      </div>
    </div>
  );
}

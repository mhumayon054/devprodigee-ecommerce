"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AppIcon } from "@/components/app-icon";
import { PrimaryButton } from "@/components/primary-button";
import { platforms, services } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  platform: string;
  service: string;
  message: string;
  consent: boolean;
  website: string;
};

type SubmissionState = "idle" | "submitting" | "success" | "error";

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  platform: "",
  service: "",
  message: "",
  consent: false,
  website: "",
};

const loadingSteps = [
  {
    title: "We review the task",
    text: "Your project details are being prepared for the right member of our team.",
  },
  {
    title: "We clarify the opportunity",
    text: "We organise your platform, service and commercial requirements into a clear brief.",
  },
  {
    title: "We recommend a route forward",
    text: "Your enquiry is being delivered so we can respond with the most useful next step.",
  },
];

const wait = (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [loadingStep, setLoadingStep] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (submissionState !== "submitting" && submissionState !== "success") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [submissionState]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");
    setStatusMessage("");
    setLoadingStep(0);

    const progressTimer = window.setInterval(() => {
      setLoadingStep((current) => Math.min(current + 1, loadingSteps.length - 1));
    }, 850);

    try {
      const [response] = await Promise.all([
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }),
        wait(2600),
      ]);

      const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || "We could not send your enquiry. Please try again.");
      }

      setLoadingStep(loadingSteps.length - 1);
      setForm(initialForm);
      setSubmissionState("success");
    } catch (error) {
      setSubmissionState("error");
      setStatusMessage(error instanceof Error ? error.message : "We could not send your enquiry. Please try again.");
    } finally {
      window.clearInterval(progressTimer);
    }
  }

  const overlayVisible = submissionState === "submitting" || submissionState === "success";

  return (
    <>
      <form
        id="project-enquiry"
        className="scroll-mt-32 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(43,53,67,0.10)] sm:p-8"
        onSubmit={submitForm}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="field-label">Full name
            <input required type="text" autoComplete="name" className="field-input" placeholder="Your name" value={form.name} onChange={(event) => updateField("name", event.target.value)} />
          </label>
          <label className="field-label">Work email
            <input required type="email" autoComplete="email" className="field-input" placeholder="you@company.com" value={form.email} onChange={(event) => updateField("email", event.target.value)} />
          </label>
          <label className="field-label">Company
            <input type="text" autoComplete="organization" className="field-input" placeholder="Company or brand name" value={form.company} onChange={(event) => updateField("company", event.target.value)} />
          </label>
          <label className="field-label">Primary platform
            <select className="field-input" value={form.platform} onChange={(event) => updateField("platform", event.target.value)}>
              <option value="">Select a platform</option>
              {platforms.map((platform) => <option key={platform.name} value={platform.name}>{platform.name}</option>)}
              <option value="Multi-channel">Multi-channel</option>
            </select>
          </label>
        </div>

        <label className="field-label mt-5">What would you like help with?
          <select required className="field-input" value={form.service} onChange={(event) => updateField("service", event.target.value)}>
            <option value="" disabled>Select a service</option>
            {services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>

        <label className="field-label mt-5">Project details
          <textarea required rows={6} maxLength={5000} className="field-input resize-none" placeholder="Tell us about your current store, goals and the support you need." value={form.message} onChange={(event) => updateField("message", event.target.value)} />
        </label>

        <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label>Website
            <input tabIndex={-1} autoComplete="off" type="text" value={form.website} onChange={(event) => updateField("website", event.target.value)} />
          </label>
        </div>

        <label className="mt-5 flex items-start gap-3 text-xs font-normal leading-5 text-slate-500">
          <input required type="checkbox" className="mt-0.5 rounded border-slate-300 text-[#166CD2] focus:ring-[#166CD2]" checked={form.consent} onChange={(event) => updateField("consent", event.target.checked)} />
          I agree to be contacted about this enquiry. My details will only be used to respond to my request.
        </label>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <PrimaryButton type="submit" arrow disabled={submissionState === "submitting"}>
            {submissionState === "submitting" ? "Sending enquiry" : "Send project enquiry"}
          </PrimaryButton>
          <p className="text-xs leading-5 text-slate-500">Your details are sent securely and directly to our team.</p>
        </div>

        {submissionState === "error" && statusMessage ? (
          <p className="mt-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">{statusMessage}</p>
        ) : null}
      </form>

      {overlayVisible ? (
        <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[#17202d]/80 px-5 py-8 backdrop-blur-md" role="dialog" aria-modal="true" aria-live="polite">
          <div className="w-full max-w-2xl rounded-[30px] border border-white/20 bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-9">
            {submissionState === "success" ? (
              <div className="py-5 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <AppIcon name="check" size={32} />
                </span>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Enquiry delivered</p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#2B3543] sm:text-4xl">Thank you. Your project is with our team.</h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-600">Your details have been sent directly to DevProdigee. A team member can now review the opportunity and respond using the email address you provided.</p>
                <PrimaryButton className="mt-7" onClick={() => setSubmissionState("idle")}>Done</PrimaryButton>
              </div>
            ) : (
              <div>
                <div className="text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#166CD2]">
                    <span className="h-6 w-6 animate-spin rounded-full border-2 border-[#166CD2]/20 border-t-[#166CD2]" />
                  </span>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Sending project enquiry</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#2B3543] sm:text-3xl">A clear process starts now</h2>
                </div>

                <div className="mt-7 space-y-3">
                  {loadingSteps.map((step, index) => {
                    const active = index === loadingStep;
                    const complete = index < loadingStep;
                    return (
                      <div key={step.title} className={`flex gap-4 rounded-2xl border p-4 transition-all duration-300 sm:p-5 ${active ? "border-blue-200 bg-blue-50/70 shadow-sm" : complete ? "border-emerald-100 bg-emerald-50/50" : "border-slate-200 bg-slate-50/70 opacity-60"}`}>
                        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-xs font-bold ${complete ? "bg-emerald-500 text-white" : active ? "bg-[#166CD2] text-white" : "bg-white text-slate-400"}`}>
                          {complete ? <AppIcon name="check" size={18} /> : `0${index + 1}`}
                        </span>
                        <div>
                          <h3 className="font-bold text-[#2B3543]">{step.title}</h3>
                          <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">{step.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

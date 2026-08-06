"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AppIcon } from "@/components/app-icon";
import { PrimaryButton } from "@/components/primary-button";
import { ServiceMultiSelect } from "@/components/service-multi-select";
import { platforms } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  platform: string;
  services: string[];
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
  services: [],
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
  const [loadingStep, setLoadingStep] = useState(-1);
  const [statusMessage, setStatusMessage] = useState("");
  const [serviceError, setServiceError] = useState(false);

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

    if (form.services.length === 0) {
      setServiceError(true);
      return;
    }

    setSubmissionState("submitting");
    setStatusMessage("");
    setLoadingStep(-1);

    const progressTimers = [
      window.setTimeout(() => setLoadingStep(0), 180),
      window.setTimeout(() => setLoadingStep(1), 1050),
      window.setTimeout(() => setLoadingStep(2), 1950),
      window.setTimeout(() => setLoadingStep(3), 2850),
    ];

    try {
      const request = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((response) => ({ response, error: null as Error | null }))
        .catch((error: unknown) => ({
          response: null,
          error: error instanceof Error ? error : new Error("The network request failed."),
        }));

      await wait(3500);
      const requestResult = await request;
      if (requestResult.error || !requestResult.response) throw requestResult.error;

      const response = requestResult.response;
      const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || "We could not send your enquiry. Please try again.");
      }

      setLoadingStep(loadingSteps.length);
      setForm(initialForm);
      setServiceError(false);
      setSubmissionState("success");
    } catch (error) {
      setSubmissionState("error");
      setStatusMessage(error instanceof Error ? error.message : "We could not send your enquiry. Please try again.");
    } finally {
      progressTimers.forEach((timer) => window.clearTimeout(timer));
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

        <div className="mt-5">
          <label id="service-select-label" htmlFor="service-multi-select-trigger" className="field-label">What would you like help with?</label>
          <ServiceMultiSelect
            value={form.services}
            invalid={serviceError}
            onChange={(selectedServices) => {
              updateField("services", selectedServices);
              if (selectedServices.length > 0) setServiceError(false);
            }}
          />
          {serviceError ? (
            <p className="mt-2 text-xs font-semibold text-red-600" role="alert">Please select at least one service.</p>
          ) : null}
        </div>

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
        <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-slate-950/45 px-5 py-8 backdrop-blur-[6px]" role="dialog" aria-modal="true" aria-live="polite">
          <div className="w-full max-w-2xl rounded-[30px] border border-white/40 bg-white/95 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] ring-1 ring-white/60 sm:p-9">
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
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#166CD2] ring-1 ring-inset ring-blue-100">
                    <span className="h-6 w-6 animate-spin rounded-full border-2 border-[#166CD2]/20 border-t-[#166CD2]" />
                  </span>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#166CD2]">Sending project enquiry</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#2B3543] sm:text-3xl">A clear process starts now</h2>
                </div>

                <div className="mt-7 min-h-[250px] space-y-3 sm:min-h-[276px]">
                  {loadingSteps.map((step, index) => {
                    if (index > loadingStep) return null;

                    const complete = index < loadingStep || loadingStep === loadingSteps.length;
                    const active = index === loadingStep && loadingStep < loadingSteps.length;

                    return (
                      <div
                        key={step.title}
                        className={`loading-step-enter flex gap-4 rounded-2xl border p-4 transition-all duration-300 sm:p-5 ${
                          complete
                            ? "border-emerald-100 bg-emerald-50/70"
                            : active
                              ? "border-blue-200 bg-blue-50/80 shadow-sm"
                              : "border-slate-200 bg-slate-50/70"
                        }`}
                      >
                        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-xs font-bold transition-all duration-300 ${
                          complete ? "loading-check-pop bg-emerald-500 text-white" : "bg-[#166CD2] text-white"
                        }`}>
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

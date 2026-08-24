"use client";

import { useEffect, useLayoutEffect, useRef, useState, type FormEvent } from "react";
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
  const progressRef = useRef<HTMLDivElement>(null);
  const previousProgressTop = useRef<number | null>(null);

  useEffect(() => {
    if (submissionState !== "submitting" && submissionState !== "success") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [submissionState]);

  useLayoutEffect(() => {
    if (submissionState !== "submitting") {
      previousProgressTop.current = null;
      return;
    }

    const element = progressRef.current;
    if (!element) return;

    const currentTop = element.getBoundingClientRect().top;
    const previousTop = previousProgressTop.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (previousTop !== null && !reduceMotion) {
      const offset = previousTop - currentTop;
      if (Math.abs(offset) > 1) {
        element.animate(
          [
            { transform: `translateY(${offset}px)` },
            { transform: "translateY(0)" },
          ],
          {
            duration: 680,
            easing: "cubic-bezier(.22, 1, .36, 1)",
          },
        );
      }
    }

    previousProgressTop.current = currentTop;
  }, [loadingStep, submissionState]);

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
      window.setTimeout(() => setLoadingStep(0), 600),
      window.setTimeout(() => setLoadingStep(1), 1550),
      window.setTimeout(() => setLoadingStep(2), 2500),
      window.setTimeout(() => setLoadingStep(3), 3450),
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

      await wait(4150);
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
      const analyticsWindow = window as typeof window & { gtag?: (...args: unknown[]) => void };
      analyticsWindow.gtag?.("event", "generate_lead", {
        event_category: "contact",
        form_name: "project_enquiry",
        service_count: form.services.length,
      });
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
        <div
          className="enquiry-overlay fixed inset-0 z-[100] overflow-y-auto px-5"
          role="dialog"
          aria-modal="true"
          aria-live="polite"
        >
          <div className="flex min-h-full w-full items-center justify-center py-8">
          {submissionState === "success" ? (
            <div className="enquiry-success-state w-full max-w-2xl text-center">
              <svg className="enquiry-success-mark mx-auto" viewBox="0 0 120 120" aria-hidden="true">
                <circle className="enquiry-success-glow" cx="60" cy="60" r="48" />
                <circle className="enquiry-success-circle" cx="60" cy="60" r="42" />
                <path className="enquiry-success-check" d="M39 61.5 53.5 76 82 46" />
              </svg>
              <p className="enquiry-success-copy mt-7 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">Enquiry delivered</p>
              <h2 className="enquiry-success-copy mx-auto mt-3 max-w-xl text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">Thank you. Your project is with our team.</h2>
              <p className="enquiry-success-copy mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                Your details have been sent directly to DevProdigee. A team member can now review the opportunity and respond using the email address you provided.
              </p>
              <button
                type="button"
                className="enquiry-success-copy mt-8 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:border-white/35 hover:bg-white/15"
                onClick={() => setSubmissionState("idle")}
              >
                Return to the page
              </button>
            </div>
          ) : (
            <div ref={progressRef} className="enquiry-progress-stage w-full max-w-2xl">
              <div className="text-center">
                <div className="enquiry-loader mx-auto" aria-hidden="true">
                  <span className="enquiry-loader-track" />
                  <span className="enquiry-loader-orbit" />
                  <span className="enquiry-loader-core" />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">Sending project enquiry</p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">A clear process starts now</h2>
              </div>

              <div className="mt-8 space-y-3">
                {loadingSteps.map((step, index) => {
                  if (index > loadingStep) return null;

                  const complete = index < loadingStep || loadingStep === loadingSteps.length;
                  const active = index === loadingStep && loadingStep < loadingSteps.length;

                  return (
                    <div
                      key={step.title}
                      className={`loading-step-enter flex items-start gap-3 px-1 py-2 transition-all duration-500 sm:gap-4 ${
                        complete ? "opacity-90" : active ? "opacity-100" : "opacity-80"
                      }`}
                    >
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[10px] font-bold transition-all duration-500 sm:h-9 sm:w-9 ${
                        complete
                          ? "loading-check-pop bg-emerald-400 text-white shadow-[0_0_20px_rgba(52,211,153,0.28)]"
                          : "bg-[#166CD2] text-white shadow-[0_0_20px_rgba(22,108,210,0.24)]"
                      }`}>
                        {complete ? <AppIcon name="check" size={14} /> : `0${index + 1}`}
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-sm font-bold text-white sm:text-base">{step.title}</h3>
                        <p className="mt-1 text-xs leading-5 text-slate-200 sm:text-sm">{step.text}</p>
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

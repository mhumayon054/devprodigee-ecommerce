"use client";

import { useState, type FormEvent } from "react";
import { PrimaryButton } from "@/components/primary-button";
import { platforms, services, site } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  platform: string;
  service: string;
  message: string;
  consent: boolean;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  platform: "",
  service: "",
  message: "",
  consent: false,
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`eCommerce enquiry from ${form.name}${form.company ? ` — ${form.company}` : ""}`);
    const body = encodeURIComponent([
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "Not provided"}`,
      `Platform: ${form.platform || "Not selected"}`,
      `Service: ${form.service}`,
      "",
      "Project details:",
      form.message,
    ].join("\n"));

    setStatus(`Your enquiry is ready. If your email app does not open, email us directly at ${site.email}.`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(43,53,67,0.10)] sm:p-8" onSubmit={submitForm}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field-label">Full name
          <input required type="text" className="field-input" placeholder="Your name" value={form.name} onChange={(event) => updateField("name", event.target.value)} />
        </label>
        <label className="field-label">Work email
          <input required type="email" className="field-input" placeholder="you@company.com" value={form.email} onChange={(event) => updateField("email", event.target.value)} />
        </label>
        <label className="field-label">Company
          <input type="text" className="field-input" placeholder="Company or brand name" value={form.company} onChange={(event) => updateField("company", event.target.value)} />
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
        <textarea required rows={6} className="field-input resize-none" placeholder="Tell us about your current store, goals and the support you need." value={form.message} onChange={(event) => updateField("message", event.target.value)} />
      </label>
      <label className="mt-5 flex items-start gap-3 text-xs font-normal leading-5 text-slate-500">
        <input required type="checkbox" className="mt-0.5 rounded border-slate-300 text-[#166CD2] focus:ring-[#166CD2]" checked={form.consent} onChange={(event) => updateField("consent", event.target.checked)} />
        I agree to be contacted about this enquiry. My details will only be used to respond to my request.
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <PrimaryButton type="submit" arrow>Send project enquiry</PrimaryButton>
        <p className="text-xs leading-5 text-slate-500">This form opens your email app with the enquiry pre-filled.</p>
      </div>
      {status ? <p className="mt-5 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-[#166CD2]" role="status">{status}</p> : null}
    </form>
  );
}

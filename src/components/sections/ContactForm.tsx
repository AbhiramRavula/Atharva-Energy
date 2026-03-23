"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";

type FormStatus = "idle" | "submitting" | "success" | "error";

const interestOptions = [
  { value: "solar", label: "Solar Panels" },
  { value: "battery", label: "Battery Packs" },
  { value: "system", label: "Custom System" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });

  const updateInterest = useCallback((searchParams: URLSearchParams) => {
    const product = searchParams.get("product");
    if (product) {
      setFormData((prev) => ({ ...prev, interest: product }));
    }
  }, []);

  useEffect(() => {
    updateInterest(searchParams);
  }, [searchParams, updateInterest]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", interest: "", message: "" });
      } else {
        setStatus("error");
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email us directly at atharvaenergies@gmail.com");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-10 md:p-14 text-center border border-green-100 shadow-md">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
          ✅
        </div>
        <h3 className="text-2xl font-heading font-bold text-brand-text mb-3">
          Message Received!
        </h3>
        <p className="text-brand-muted text-base mb-6">
          Thanks for reaching out! We&apos;ll respond within 24 hours at{" "}
          <span className="text-brand-gold font-semibold">{formData.email || "your email"}</span>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-primary text-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-md border border-gray-100">
      <h2 className="text-2xl font-heading font-bold text-brand-text mb-2">
        Send Us a Message
      </h2>
      <p className="text-brand-muted text-sm mb-8">
        All fields marked with * are required.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-brand-text mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rajesh Kumar"
            className="input-field"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-brand-text mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="rajesh@company.com"
            className="input-field"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-brand-text mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="input-field"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-semibold text-brand-text mb-1.5">
            Company / Organization
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company name (optional)"
            className="input-field"
          />
        </div>

        {/* Interest */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-brand-text mb-1.5">
            I&apos;m Interested In *
          </label>
          <select
            name="interest"
            required
            value={formData.interest}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select an option...</option>
            {interestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-brand-text mb-1.5">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, energy requirements, or any questions..."
            className="input-field resize-none"
          />
        </div>
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          ⚠️ {error}
        </div>
      )}

      {/* Submit */}
      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full sm:w-auto text-base px-10 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send Message →"}
        </button>
      </div>

      <p className="mt-5 text-xs text-brand-muted">
        By submitting this form you agree to be contacted by Atharva Energy. We respect your privacy.
      </p>
    </form>
  );
}

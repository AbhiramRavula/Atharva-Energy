import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Atharva Energy to request a quote for solar panels, battery systems, or custom integrated solutions. Based in Hyderabad, Telangana.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-[#0d0d1f] section-padding !py-16 md:!py-20">
        <div className="container-max text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-brand-gold uppercase mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about our solar panels, battery systems, or custom solutions?
            Reach out to our team — we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-brand-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left: Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-xl font-heading font-bold text-brand-text mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:atharvaenergies@gmail.com"
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                      ✉️
                    </div>
                    <div>
                      <p className="text-xs text-brand-muted font-medium uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-brand-text font-semibold text-sm group-hover:text-brand-gold transition-colors">
                        atharvaenergies@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="text-xs text-brand-muted font-medium uppercase tracking-wider mb-0.5">Location</p>
                      <p className="text-brand-text font-semibold text-sm">
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                      ⏱️
                    </div>
                    <div>
                      <p className="text-xs text-brand-muted font-medium uppercase tracking-wider mb-0.5">Response Time</p>
                      <p className="text-brand-text font-semibold text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-brand-dark rounded-xl p-6 border border-brand-gold/20">
                <h3 className="text-brand-gold font-heading font-bold text-base mb-3">
                  What Happens Next?
                </h3>
                <ol className="space-y-2.5">
                  {[
                    "We receive your message",
                    "Our team reviews your requirements",
                    "We respond with a tailored proposal",
                    "Schedule a consultation call",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="text-center">
                <Link href="/products" className="btn-secondary text-sm w-full">
                  View Our Products
                </Link>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <Suspense fallback={<div className="bg-white rounded-2xl p-10 shadow-md border border-gray-100 text-center text-brand-muted">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

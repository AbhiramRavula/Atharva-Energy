import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-dark via-[#0d0d1f] to-brand-dark relative overflow-hidden">
      {/* Decorative gold circles */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      <div className="container-max text-center relative">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-gold/15 border border-brand-gold/30 mb-6 text-3xl">
          ⚡
        </div>

        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
          Ready to Power Your Facility?
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Get in touch with our engineering team for a custom quote tailored to your energy requirements.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-base px-10 py-4 shadow-xl shadow-brand-gold/20">
            Contact Sales
          </Link>
          <Link href="/products" className="btn-secondary text-base px-10 py-4">
            View Products
          </Link>
        </div>

        {/* Email hint */}
        <p className="mt-8 text-gray-500 text-sm">
          Or email us directly at{" "}
          <a href="mailto:atharvaenergies@gmail.com" className="text-brand-gold hover:underline">
            atharvaenergies@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

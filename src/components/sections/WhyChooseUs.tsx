import Link from "next/link";
import { company } from "@/data/company";

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gold/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-brand-gold/5 pointer-events-none" />

      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: heading + mission */}
          <div>
            <span className="inline-block text-xs font-bold tracking-widest text-brand-gold uppercase mb-3">
              Why Atharva Energy
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text mb-6 leading-tight">
              Built on Engineering <span className="text-brand-gold">Integrity</span>
            </h2>
            <p className="text-brand-muted text-base leading-relaxed mb-8">
              {company.mission}
            </p>
            <Link href="/about" className="btn-dark text-sm">
              Our Story →
            </Link>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {company.whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-brand-bg border border-gray-100 rounded-xl p-5 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-heading font-bold text-brand-text text-base mb-1.5 group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

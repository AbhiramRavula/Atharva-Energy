import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Atharva Energy — our mission, manufacturing journey, and commitment to sustainable energy in India.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-[#0d0d1f] section-padding !py-20 md:!py-24">
        <div className="container-max text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-brand-gold uppercase mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            About Atharva Energy
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Atharva Energy is a manufacturer and systems integrator of high-efficiency solar panels
            and battery systems. Focused on sustainability and reliability, we serve industrial,
            commercial, and government customers across India.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🎯",
                title: "Our Mission",
                text: company.mission,
                accent: true,
              },
              {
                icon: "🌟",
                title: "Our Vision",
                text: company.vision,
                accent: false,
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl p-8 md:p-10 border ${
                  item.accent
                    ? "bg-brand-dark border-brand-gold/20"
                    : "bg-brand-bg border-gray-100"
                }`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h2
                  className={`text-2xl font-heading font-bold mb-4 ${
                    item.accent ? "text-brand-gold" : "text-brand-text"
                  }`}
                >
                  {item.title}
                </h2>
                <p className={`text-base leading-relaxed ${item.accent ? "text-gray-300" : "text-brand-muted"}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Status */}
      <section className="section-padding bg-brand-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/factory.png"
                alt="Atharva Energy manufacturing facility under construction"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-brand-gold font-bold text-sm uppercase tracking-wider">Under Construction</p>
                <p className="text-white font-heading font-bold text-xl">Operational Q3 2026</p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <span className="inline-block text-xs font-bold tracking-widest text-brand-gold uppercase mb-3">
                Manufacturing
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text mb-3">
                Manufacturing Excellence <span className="text-brand-gold">in Progress</span>
              </h2>
              <p className="text-brand-muted text-base mb-8">
                Our state-of-the-art manufacturing facility in Hyderabad is on track for full
                operations in Q3 2026, with capacity to produce industrial-grade solar panels
                and battery systems at scale.
              </p>

              {/* Timeline steps */}
              <div className="relative">
                {/* Connector line */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200" />

                <div className="space-y-6">
                  {company.factory.timeline.map((step, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10 border-2 ${
                        step.done
                          ? "bg-brand-gold border-brand-gold text-white"
                          : "bg-white border-gray-200 text-brand-muted"
                      }`}>
                        {step.done ? "✓" : i + 1}
                      </div>
                      <div className="flex-1 pt-0.5">
                        <div className="flex items-center justify-between">
                          <p className={`font-semibold text-sm ${step.done ? "text-brand-text" : "text-brand-muted"}`}>
                            {step.phase}
                          </p>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            step.done ? "bg-brand-gold/15 text-brand-gold" : "bg-gray-100 text-brand-muted"
                          }`}>
                            {step.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <p className="text-sm text-brand-muted">
                  Location: <span className="text-brand-text font-semibold">Hyderabad, Telangana, India</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Atharva */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest text-brand-gold uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Reliability", "Sustainability", "Credibility", "Customization"].map((title, i) => {
              const descriptions = [
                "Engineering-first designs tested under Indian climate conditions — heat, humidity, and grid fluctuations.",
                "Eco-conscious manufacturing practices from material sourcing to production and packaging.",
                "International standard certifications (IEC, BIS, ISO) at factory launch to guarantee quality.",
                "We are both manufacturer and integrator — delivering solar + battery systems as a complete package.",
              ];
              const icons = ["⚙️", "🌱", "🏆", "🔧"];
              return (
                <div key={title} className="bg-brand-bg border border-gray-100 rounded-2xl p-6 text-center hover:border-brand-gold/30 hover:shadow-md transition-all duration-300">
                  <div className="text-4xl mb-4">{icons[i]}</div>
                  <h3 className="font-heading font-bold text-brand-text text-lg mb-2">{title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{descriptions[i]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-brand-bg">
        <div className="container-max text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-brand-gold uppercase mb-3">
            The Team
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text mb-6">
            Meet the Team
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-10 border border-gray-100 shadow-md">
            <div className="w-16 h-16 bg-brand-gold/15 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              👷
            </div>
            <h3 className="font-heading font-bold text-brand-text text-xl mb-2">
              Founders & Engineering Team
            </h3>
            <p className="text-brand-muted text-base leading-relaxed">
              Our team comprises engineers and industry veterans with deep experience in solar
              manufacturing, battery technology, and industrial systems integration. Team profiles
              coming soon.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

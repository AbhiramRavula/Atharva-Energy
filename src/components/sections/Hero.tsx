import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Atharva Energy solar facility"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/75 to-brand-dark/50" />
        {/* Gold accent bottom strip */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 md:px-8 text-center py-20">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-8 animate-fade-in">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          Factory Under Construction · Operational Q3 2026
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight animate-slide-up">
          Powering Your Future with{" "}
          <span className="text-brand-gold">Reliable &amp; Sustainable</span>{" "}
          Energy
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          Manufacturing high-efficiency solar panels and advanced battery systems
          for industrial and commercial applications across India.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Link href="/contact" className="btn-primary text-base px-8 py-4 shadow-xl shadow-brand-gold/20 hover:shadow-brand-gold/30">
            Request a Quote
          </Link>
          <Link href="/products" className="btn-secondary text-base px-8 py-4">
            Learn More
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-white/10 animate-fade-in">
          {[
            { label: "Products", value: "2+", sub: "Solar & Battery" },
            { label: "Location", value: "HYD", sub: "Hyderabad, India" },
            { label: "Launch", value: "Q3 '26", sub: "Factory Operational" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-brand-gold">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-brand-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

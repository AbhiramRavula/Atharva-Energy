import Link from "next/link";

export default function FactoryBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-dark via-brand-dark to-brand-dark/95 border-y border-brand-gold/20">
      <div className="container-max px-4 md:px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: icon + text */}
          <div className="flex items-start md:items-center gap-4">
            <span className="text-3xl md:text-4xl flex-shrink-0">🔨</span>
            <div>
              <h2 className="text-white font-heading font-bold text-lg md:text-xl leading-snug">
                Our Manufacturing Facility is Under Construction
              </h2>
              <p className="text-gray-400 text-sm mt-0.5">
                <span className="text-brand-gold font-semibold">Operational Q3 2026</span>
                {" "}·{" "}
                Hyderabad, Telangana — We&apos;re building something serious.
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full md:w-auto md:min-w-[220px]">
            <div className="flex justify-between text-xs text-gray-400 mb-1.5">
              <span>Construction Progress</span>
              <span className="text-brand-gold font-semibold">40%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-dark rounded-full shimmer"
                style={{ width: "40%" }}
              />
            </div>
            <div className="flex gap-3 mt-3 justify-center md:justify-end">
              <Link
                href="/contact"
                className="text-xs font-semibold text-brand-dark bg-brand-gold hover:bg-brand-gold-dark px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Get Early Access →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

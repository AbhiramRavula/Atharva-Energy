import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function FeatureGrid() {
  return (
    <section className="section-padding bg-brand-bg">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest text-brand-gold uppercase mb-3">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text">
            Engineered for Industrial Performance
          </h2>
          <p className="text-brand-muted mt-4 max-w-2xl mx-auto text-base md:text-lg">
            From solar generation to energy storage — Atharva Energy delivers
            end-to-end power solutions built for demanding applications.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-brand-gold/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Coming Soon
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-text group-hover:text-brand-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-brand-gold text-sm font-medium mt-0.5">{product.tagline}</p>
                  </div>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-brand-text">
                      <span className="text-brand-gold text-xs">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={`/products/${product.slug}`} className="btn-primary text-sm">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom systems promo */}
        <div className="mt-8 bg-gradient-to-r from-brand-dark to-brand-dark/90 rounded-2xl p-8 md:p-10 text-center border border-brand-gold/20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
            Custom Integrated Solutions
          </h3>
          <p className="text-gray-400 text-base max-w-2xl mx-auto mb-6">
            Need a complete solar + battery system? Our engineering team designs and integrates
            custom solutions tailored to your facility&apos;s requirements.
          </p>
          <Link href="/contact?product=system" className="btn-primary">
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

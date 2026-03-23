import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Atharva Energy's industrial solar panels and battery storage systems. High-efficiency monocrystalline modules and LFP battery packs for industrial and commercial applications.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-brand-dark to-[#0d0d1f] section-padding !py-16 md:!py-20">
        <div className="container-max text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-brand-gold uppercase mb-4">
            Product Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
            Our Products
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We manufacture high-efficiency solar panels and advanced battery systems
            built for industrial and commercial energy demands.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="section-padding bg-brand-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                  />
                  <div className="absolute top-4 right-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Coming Soon
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-2xl font-heading font-bold text-brand-text mb-1">
                    {product.name}
                  </h2>
                  <p className="text-brand-gold font-semibold text-sm mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-brand-muted text-base leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Specs table */}
                  <div className="bg-brand-bg rounded-xl p-5 mb-6 border border-gray-100">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-3">
                      Key Specifications
                    </h3>
                    <div className="space-y-2">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between items-center text-sm">
                          <span className="text-brand-muted font-medium">{key}</span>
                          <span className="text-brand-text font-semibold">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-8 flex-1">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-brand-text">
                        <span className="text-brand-gold">✦</span> {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3">
                    <Link href={product.cta.link} className="btn-primary text-sm">
                      {product.cta.text}
                    </Link>
                    <Link href={`/products/${product.slug}`} className="btn-secondary text-sm">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom systems */}
          <div className="mt-14 bg-gradient-to-r from-brand-dark to-brand-dark/90 rounded-2xl p-10 md:p-14 text-center border border-brand-gold/20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Custom Integrated Solutions
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Need a complete solar + battery system engineered for your facility? Our team designs
              and integrates custom solutions from end to end — from load analysis to commissioning.
            </p>
            <Link href="/contact?product=system" className="btn-primary text-base px-10 py-4">
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Battery Packs",
  description:
    "Atharva Energy's advanced LFP battery packs for backup power, peak shaving, and off-grid energy storage. Industrial-grade systems for demanding applications.",
};

export default function BatteryPage() {
  const product = products.find((p) => p.slug === "battery");
  if (!product) return notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-brand-dark to-[#0d0d1f] section-padding !py-16 md:!py-20">
        <div className="container-max text-center">
          <Link href="/products" className="inline-flex items-center gap-2 text-brand-gold text-sm mb-6 hover:underline">
            ← Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            {product.name}
          </h1>
          <p className="text-brand-gold font-semibold text-lg mb-3">{product.tagline}</p>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">{product.description}</p>
        </div>
      </section>

      <section className="section-padding bg-brand-bg">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Image */}
            <div className="relative aspect-square bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-12"
              />
              <div className="absolute top-4 right-4 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Coming Soon
              </div>
            </div>

            <div>
              {/* Specs */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-8">
                <h2 className="text-xl font-heading font-bold text-brand-text mb-5">
                  Specifications
                </h2>
                <div className="divide-y divide-gray-100">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-3 text-sm">
                      <span className="text-brand-muted font-medium">{key}</span>
                      <span className="text-brand-text font-semibold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-8">
                <h2 className="text-xl font-heading font-bold text-brand-text mb-5">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-base text-brand-text">
                      <span className="text-brand-gold text-lg">✦</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href={product.cta.link} className="btn-primary">
                  {product.cta.text}
                </Link>
                <Link href="/contact?product=system" className="btn-secondary">
                  Custom System →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

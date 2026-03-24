import Link from "next/link";

const footerLinks = [
  { section: "Products", links: [
    { label: "Solar Panels", href: "/products/solar" },
    { label: "Battery Packs", href: "/products/battery" },
    { label: "All Products", href: "/products" },
  ]},
  { section: "Company", links: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Request a Quote", href: "/contact" },
  ]},
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      {/* Main footer */}
      <div className="container-max section-padding !py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-white font-heading font-bold text-xl block">Atharva Energy</span>
              <span className="text-brand-gold text-sm font-medium">Solar &amp; Battery Solutions</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Manufacturing high-efficiency solar panels and battery systems for industrial applications.
              Based in Hyderabad, Telangana.
            </p>
            {/* Contact info */}
            <div className="space-y-2">
              <a
                href="mailto:atharvaenergies@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-gold transition-colors"
              >
                <span>✉</span>
                <span>atharvaenergies@gmail.com</span>
              </a>
              <p className="flex items-center gap-2 text-sm text-gray-400">
                <span>📍</span>
                <span>Hyderabad, Telangana, India</span>
              </p>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.section}>
              <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
                {col.section}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-brand-gold text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Map column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Our Factory
            </h3>
            <div className="rounded-lg overflow-hidden border border-white/10 h-48 bg-gray-800 shadow-lg relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d99.65693777506092!2d78.72309804909345!3d17.458345532768192!2m2!1f0!2f0.5683355894549824!3m2!1i1024!2i768!4f48.657720645186075!3m3!1m2!1s0x3bcb76966c30bd1b%3A0xa263934d5c7b900d!2sFP5F%2B78R%2C%20Telangana%20501301!5e1!3m2!1sen!2sin!4v1774369738256!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atharva Energy Factory Location"
                className="grayscale-[0.2] contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="mt-3 text-[10px] text-gray-400 font-mono flex items-center gap-1 leading-none uppercase tracking-widest">
              <span className="text-brand-gold text-xs">📍</span>
              FP5F+78R, Telangana 501301
            </p>
          </div>
        </div>
      </div>

      {/* Factory status bar */}
      <div className="bg-brand-gold/10 border-t border-brand-gold/20">
        <div className="container-max px-4 md:px-8 py-3">
          <p className="text-center text-sm text-brand-gold font-medium">
            🔨 Manufacturing Facility Under Construction · Operational Q3 2026 · Hyderabad, Telangana
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="container-max px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            © 2026 Atharva Energy. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            atharvaenergies@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}

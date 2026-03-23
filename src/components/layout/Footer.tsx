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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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

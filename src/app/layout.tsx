import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atharvaenergy.in"),
  title: {
    template: "%s | Atharva Energy",
    default: "Atharva Energy – Solar Panels & Battery Systems Manufacturer",
  },
  description:
    "Atharva Energy manufactures high-efficiency solar panels and advanced battery systems for industrial and commercial applications. Based in Hyderabad, Telangana, India.",
  keywords: [
    "solar panels manufacturer India",
    "battery packs manufacturer",
    "industrial solar panels Hyderabad",
    "LFP battery systems",
    "energy storage solutions India",
    "solar manufacturer Telangana",
    "Atharva Energy",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Atharva Energy",
    title: "Atharva Energy – Solar & Battery Manufacturer",
    description:
      "Manufacturing high-efficiency solar panels and battery systems for industrial applications. Hyderabad, Telangana.",
    images: ["/images/hero-bg.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharva Energy – Solar & Battery Manufacturer",
    description:
      "Manufacturing high-efficiency solar panels and battery systems for industrial applications.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

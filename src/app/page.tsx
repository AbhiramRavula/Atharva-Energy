import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FactoryBanner from "@/components/sections/FactoryBanner";
import FeatureGrid from "@/components/sections/FeatureGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Atharva Energy – Solar Panels & Battery Systems Manufacturer",
  description:
    "Atharva Energy manufactures high-efficiency solar panels and battery systems for industrial applications. Based in Hyderabad, Telangana, India. Operational Q3 2026.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FactoryBanner />
      <FeatureGrid />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}

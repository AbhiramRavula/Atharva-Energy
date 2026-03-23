export const products = [
  {
    id: "solar-panels",
    name: "Solar Panels",
    category: "solar",
    tagline: "High-Efficiency Monocrystalline Modules",
    description:
      "Industrial-grade solar panels engineered for maximum power output and long-term durability. Designed for rooftop, ground-mount, and utility-scale installations across industrial and commercial sectors.",
    image: "/images/solar-panel.png",
    features: [
      "Monocrystalline PERC cell technology",
      "Anti-reflective, self-cleaning coating",
      "IEC 61215 & IEC 61730 certified",
      "25-year linear power warranty",
      "Salt mist & ammonia corrosion resistant",
    ],
    specs: {
      Wattage: "100W – 400W (TBD post-launch)",
      Technology: "Monocrystalline (TBD)",
      Efficiency: "Up to 22% (TBD)",
      Certifications: "IEC, BIS, ISO (TBD)",
      Warranty: "25 years (TBD)",
    },
    cta: {
      text: "Request Product Info",
      link: "/contact?product=solar",
    },
    slug: "solar",
    status: "coming-soon",
  },
  {
    id: "battery-packs",
    name: "Battery Packs",
    category: "battery",
    tagline: "Advanced Energy Storage Systems",
    description:
      "Scalable LFP battery packs for backup power, peak shaving, and off-grid operations. Built for industrial reliability with integrated BMS, thermal management, and remote monitoring.",
    image: "/images/battery-pack-v3.png",
    features: [
      "LFP / NMC cell chemistry",
      "Integrated Battery Management System (BMS)",
      "Active thermal management",
      "Modular, rack-mount design",
      "Remote monitoring via IoT",
    ],
    specs: {
      Chemistry: "LFP / NMC (TBD)",
      Voltage: "12V – 400V (TBD)",
      Capacity: "5kWh – 100kWh (TBD)",
      "Cycle Life": "3000+ cycles (TBD)",
      Warranty: "10 years (TBD)",
    },
    cta: {
      text: "Request Product Info",
      link: "/contact?product=battery",
    },
    slug: "battery",
    status: "coming-soon",
  },
];

export type Product = (typeof products)[0];

import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Premium Skincare & Beauty Products India",

  description:
    "SilkyGold Healthcare Pvt Ltd offers premium skincare and beauty products in India including Silky Gold Aloe Vera White Rice Face Serum. Shop quality cosmetic products online.",

  keywords: [
    "SilkyGold",
    "Silky Gold",
    "Silky Gold face serum",
    "Silky Gold skincare products",
    "Silky Gold Aloe Vera White Rice Face Serum",
    "aloe vera serum",
    "white rice face serum",
    "face serum",
    "skincare products india",
    "beauty products india",
    "glowing skin serum",
    "anti aging serum",
    "premium skincare",
    "cosmetic products online",
  ],

  alternates: {
    canonical: "https://www.silkygolds.com",
  },

  openGraph: {
    title: "SilkyGold Premium Cosmetic Products",
    description:
      "Premium skincare and beauty products for healthy glowing skin.",
    url: "https://www.silkygolds.com",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeClient />;
}

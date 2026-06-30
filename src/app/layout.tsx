import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  Bodoni_Moda,
} from "next/font/google";
import "./globals.css";
import "./mobile.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.silkygolds.com"),

  title: {
    default: "SilkyGold Healthcare Pvt Ltd",
    template: "%s | SilkyGold",
  },

  description:
    "SilkyGold Healthcare Pvt Ltd offers premium skincare and beauty products in India.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.silkygolds.com",
  },

  openGraph: {
    title: "SilkyGold Healthcare Pvt Ltd",
    description:
      "Premium skincare and beauty products in India.",
    url: "https://www.silkygolds.com",
    siteName: "SilkyGold",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} ${plusJakartaSans.variable} ${bodoniModa.variable}`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="zyD1UQ-pH9p-QRSjcAgRxDQeOAArgGFfA7QPuCEAxTI"
        />
        <meta name="author" content="SilkyGold Healthcare Pvt Ltd" />
        <meta name="publisher" content="SilkyGold Healthcare Pvt Ltd" />
        <meta name="language" content="English" />
      </head>
      <body>{children}</body>
    </html>
  );
}
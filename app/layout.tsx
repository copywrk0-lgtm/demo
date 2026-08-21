import type { Metadata } from "next";
import { Playfair_Display, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCta from "@/components/MobileCta";

const headingFont = Playfair_Display({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const bodyFont = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const monoFont = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Motion & Mend Physiotherapy | Koramangala, Bengaluru", template: "%s | Motion & Mend Physiotherapy" },
  description: "Assessment-led physiotherapy, sports rehabilitation and practical recovery plans in Koramangala, Bengaluru.",
  metadataBase: new URL("https://motionandmend.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Motion & Mend Physiotherapy",
    description: "Move better. Live fully.",
    type: "website",
    url: "https://motionandmend.com",
    siteName: "Motion & Mend Physiotherapy",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Motion & Mend Physiotherapy" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Motion & Mend Physiotherapy",
    description: "Assessment-led physiotherapy and rehabilitation in Koramangala, Bengaluru.",
    areaServed: "Koramangala, Bengaluru",
    url: "https://motionandmend.com",
  };

  return <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
    <body>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <MobileCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </body>
  </html>;
}

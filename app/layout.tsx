import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
  keywords: "anime, manga, Japanese animation, episodes, series",
  robots: "index, follow",
  creator: "Vedant Bhawsar",
  openGraph: {
    type: "website",
    title: "Anime Vault",
    description: "Your favorite anime, all in one place.",
    images: [
      {
        url: "https://res.cloudinary.com/dydrdxj16/image/upload/v1712501269/screenshot1_qjhrpa.png",
        width: 800,
        height: 600,
        alt: "Anime Vault",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@simply.vednat",
    title: "Anime Vault",
    description: "Your favorite anime, all in one place.",
    images: [
      "https://res.cloudinary.com/dydrdxj16/image/upload/v1712501269/screenshot1_qjhrpa.png",
      "https://res.cloudinary.com/dydrdxj16/image/upload/v1712501267/screenshot2_le1o4t.png",
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <SpeedInsights />
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

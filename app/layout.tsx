import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { ConditionalSiteHeader } from "@/components/layout/ConditionalSiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipToContent } from "@/components/layout/SkipToContent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "[BRAND]",
  description: "Local media agency — [CITY]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-cream font-sans text-near-black antialiased">
        <SkipToContent />
        <ConditionalSiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

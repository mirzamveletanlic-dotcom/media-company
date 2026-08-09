import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConditionalSiteHeader } from "@/components/layout/ConditionalSiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipToContent } from "@/components/layout/SkipToContent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans text-near-black antialiased">
        <SkipToContent />
        <ConditionalSiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

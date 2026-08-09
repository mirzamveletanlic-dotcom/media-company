import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
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
      <body className="font-sans antialiased">
        <SkipToContent />
        <SiteHeader />
        <main id="main-content" className="min-h-screen pt-16">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Serif_Display, Inter_Tight } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  display: "swap",
});

const interTight = Inter_Tight({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${interTight.variable}`}>
      <body className="font-body text-base leading-relaxed">{children}</body>
    </html>
  );
}

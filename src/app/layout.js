import {
  DM_Serif_Display,
  Geist,
  Geist_Mono,
  Manrope,
  Playfair_Display,
} from "next/font/google";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { siteConfig } from "@/constants/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope-family",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display-family",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${dmSerifDisplay.variable} ${playfair.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors">
        <SmoothScroll>
          <Header className={manrope.className} />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

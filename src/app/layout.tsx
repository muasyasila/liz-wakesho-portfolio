import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import ThemeToggle from "@/components/shared/ThemeToggle";
import ScrollReset from "@/components/shared/ScrollReset";
import BackToTop from "@/components/shared/BackToTop";

// 1. FONT CONFIGURATION
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. METADATA (SEO & BRANDING)
export const metadata: Metadata = {
  title: "Liz Wakesho Mwashori | Leader, Model, Advocate & Tech CEO",
  description: "Official portfolio of Liz Wakesho Mwashori - CEO of Trelio Mental Health App, Cyber Security Expert, Leader and Advocate building tech with purpose.",
  keywords: ["Liz Wakesho", "Liz Wakesho Mwashori", "Trelio CEO", "Kenyan Tech Leaders", "Female Kenyan Leaders", "Cyber Security Expert Kenya"],
  authors: [{ name: "Liz Wakesho" }],

  verification: {
    google: "hNflrd3mTMZntb4Rlht_2Uo6wtyKexfodIz4oGokMCw",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png", 
  },
  // OpenGraph for "Epic" when shared on WhatsApp/Twitter/LinkedIn
  openGraph: {
    title: "Liz Wakesho | The Visionary",
    description: "Leader, Model, Advocate & Tech CEO.",
    url: "https://lizwakesho.co.ke", 
    siteName: "Liz Wakesho Portfolio",
    images: [
      {
        url: "/images/profile2.webp",
        width: 1200,
        height: 630,
        alt: "Liz Wakesho Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// 3. THE SINGLE ROOT LAYOUT
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-navy-deep text-navy-deep dark:text-white transition-colors duration-500 overflow-x-hidden`}
  suppressHydrationWarning
>
        <ThemeProvider>
          <ScrollReset />
          <BackToTop />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
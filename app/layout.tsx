import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* ✨ Import CursorGlow */
import { CursorGlow } from "@/components/ui/CursorGlow";
import { CursorTrail } from "@/components/ui/CursorTrail";
import { CursorRipple } from "@/components/ui/CursorRipple";
import { Cursor } from "@/components/ui/Cursor";
import { PageTransition } from "@/components/ui/PageTransition";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prathamesh Ugale | Full Stack Developer, Designer & Visual Creator",
    template: "%s | Prathamesh Ugale",
  },

  description:
    "Portfolio of Prathamesh Ugale – Full Stack Developer, UI/UX Designer, Photographer, and Illustrator crafting modern digital experiences and visual work.",

  keywords: [
    "Prathamesh Ugale",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "UI UX Designer",
    "Photographer",
    "Illustrator",
    "Developer Portfolio",
  ],

  authors: [{ name: "Prathamesh Ugale" }],
  creator: "Prathamesh Ugale",

  metadataBase: new URL("https://www.sonurajeugale.com"),

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✨ Global Cursor Glow */}
        <Cursor/> 
        {/* <CursorTrail /> */}
        <CursorRipple />
          <ScrollProgress />

          {children}

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Prathamesh Ugale",
      url: "https://www.sonurajeugale.com",
      jobTitle: "Full Stack Developer & Visual Creator",
      knowsAbout: [
        "Web Development",
        "UI/UX Design",
        "Photography",
        "Illustration"
      ]
    }),
  }}
/>
      
      </body>
    </html>
  );
}
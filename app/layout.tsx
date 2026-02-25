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
  metadataBase: new URL("https://www.sonurajeugale.com"),

  title: {
    default: "Prathamesh Ugale | Full Stack Developer",
    template: "%s | Prathamesh Ugale",
  },

  description:
    "Prathamesh Ugale – Full Stack Developer specialising in modern web development, scalable applications, UI/UX design, photography, and illustration.",

  keywords: [
    "Prathamesh Ugale",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer India",
    "Software Developer Portfolio",
    "UI UX Developer",
  ],

  authors: [{ name: "Prathamesh Ugale" }],
  creator: "Prathamesh Ugale",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.sonurajeugale.com",
  },
};;

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
      jobTitle: "Full Stack Developer",
      knowsAbout: [
        "Full Stack Development",
        "React",
        "Next.js",
        "UI/UX Design",
        "Photography",
        "Illustration"
      ],
      hasPart: [
        {
          "@type": "CreativeWork",
          "name": "Developer",
          "url": "https://www.sonurajeugale.com/developer"
        },
        {
          "@type": "CreativeWork",
          "name": "Photography",
          "url": "https://www.sonurajeugale.com/photography"
        },
        {
          "@type": "CreativeWork",
          "name": "Illustrations",
          "url": "https://www.sonurajeugale.com/illustrations"
        }
      ]
    }),
  }}
/>
      
      </body>
    </html>
  );
}
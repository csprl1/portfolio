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
  title: "Portfolio",
  description: "Full Stack Developer Portfolio",
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
      
      </body>
    </html>
  );
}
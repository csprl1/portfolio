"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { MouseParallax } from "@/components/ui/MouseParallax";
import { DeveloperSection } from "@/components/sections/DeveloperSection";
import { PhotographySection } from "@/components/sections/PhotographySection";
import { IllustrationSection } from "@/components/sections/IllustrationSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile(); // run on mount
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile === null) return null;

  return (
    <main className="relative w-full overflow-x-hidden">
      
      {/* ✅ Render ONLY on desktop */}
      {<GlowBackground />}
      {!isMobile && <MouseParallax />}

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <DeveloperSection />
        <PhotographySection />
        <IllustrationSection />
        <BlogSection />
      </div>

      <Footer />
    </main>
  );
}
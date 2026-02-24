import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { MouseParallax } from "@/components/ui/MouseParallax";
import { DeveloperSection } from "@/components/sections/DeveloperSection";
import { PhotographySection } from "@/components/sections/PhotographySection";
import { IllustrationSection } from "@/components/sections/IllustrationSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { BlogSection } from "@/components/sections/BlogSection";
import { Footer } from "@/components/layout/Footer";

// export default function HomePage() {
//   return (
//     <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//       <GlowBackground />
//       <MouseParallax />
//       <Navbar />
//       <Hero />
//       <DeveloperSection/>
//       <PhotographySection/>
//       <IllustrationSection/>
//       <BlogSection/>
//       <Footer/>
//     </section>
//   );
// }
export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <GlowBackground />
      <MouseParallax className="hidden md:block" />

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
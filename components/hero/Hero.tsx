"use client";

import { motion } from "framer-motion";
import { Magnetic } from "../ui/Magnetic";
import { MagneticLock } from "../ui/MagneticLock";
import { HeroDepth } from "./HeroDepth";

export function Hero() {
  return (
   <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center text-center px-5 sm:px-6">

  {/* Depth overlay */}
  <div className="absolute inset-0 -z-10
    bg-[radial-gradient(circle_at_center,
      transparent_40%,
      rgba(0,0,0,0.65)
    )]"
  />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: [0, -3, 0] }}
    transition={{
      opacity: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    }}
   className="w-full max-w-5xl pt-24 sm:pt-20"
  >
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-accent tracking-[0.32em] sm:tracking-[0.38em]
        text-[10px] sm:text-xs
        mb-6 sm:mb-10 text-opacity-90"
    >
      — FULLSTACK DEVELOPER · PHOTOGRAPHER · ILLUSTRATOR —
    </motion.p>

    <HeroDepth>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.9 }}
        className="font-extrabold
          leading-[1.08] sm:leading-[1.05]
          text-3xl sm:text-6xl md:text-7xl lg:text-[82px]
          tracking-[-0.02em]
          drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
      >
        Creating{" "}
        <span className="relative inline-block text-accent">
          Digital
          <span className="absolute inset-0 shimmer-text" />
        </span>
        <br />
        Experiences
      </motion.h1>
    </HeroDepth>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="mt-5 sm:mt-8 text-gray-400/90
        text-xs sm:text-base md:text-lg
        leading-relaxed
        max-w-2xl mx-auto"
    >
      I build things for the web, capture moments through my lens,
      and bring ideas to life through illustration.
    </motion.p>

    <MagneticLock>
      <motion.button
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        data-cursor="cta"
        className="mt-8 sm:mt-14
          text-accent
          text-xs sm:text-sm
          tracking-[0.22em] sm:tracking-[0.28em]
          hover:tracking-[0.38em]
          transition-all duration-300
          relative group"
      >
        <span className="relative z-10">EXPLORE MY WORK ↓</span>
        <span className="absolute inset-0 glow-pulse" />

        <span className="absolute inset-0 blur-xl opacity-0
          group-hover:opacity-50 transition-opacity
          bg-accent/25"
        />

        <span className="absolute inset-0 opacity-0 group-hover:opacity-20
          bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)]
          transition-opacity"
        />
      </motion.button>
    </MagneticLock>

  </motion.div>
</section>
  );
}
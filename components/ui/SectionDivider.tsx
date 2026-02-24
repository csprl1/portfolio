"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative h-24 w-full overflow-hidden">
      {/* Glow line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 w-[92%] h-px
          -translate-x-1/2 -translate-y-1/2
          bg-gradient-to-r
          from-transparent via-accent/50 to-transparent"
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 blur-2xl opacity-30
        bg-gradient-to-r from-transparent via-accent/20 to-transparent"
      />
    </div>
  );
}
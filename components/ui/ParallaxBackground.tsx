"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxBackground() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 120]);

  return (
    <motion.div
      style={{ y }}
      className="fixed inset-0 -z-10 pointer-events-none"
    >
      <div className="absolute inset-0 glow-bg" />
    </motion.div>
  );
}
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function HeroDepth({ children }: { children: React.ReactNode }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 120, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 15 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (e.clientY - centerY) / 60;
      const offsetY = (e.clientX - centerX) / 60;

      rotateX.set(-offsetX);
      rotateY.set(offsetY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
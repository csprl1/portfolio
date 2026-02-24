"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

interface MouseParallaxProps {
  className?: string;
}

export function MouseParallax({ className }: MouseParallaxProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 60, damping: 20 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className={`
        pointer-events-none fixed z-0
        w-[500px] h-[500px] rounded-full
        bg-accent/6 blur-[120px]
        ${className || ""}
      `}
    />
  );
}
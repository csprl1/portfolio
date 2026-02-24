"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export function Counter({ from = 0, to }: { from?: number; to: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const value = useMotionValue(from);
  const spring = useSpring(value, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (isInView) {
      value.set(to);
    }
  }, [isInView, to, value]);

  useEffect(() => {
    spring.on("change", (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = Math.floor(latest).toString();
      }
    });
  }, [spring]);

  return <span ref={ref} />;
}
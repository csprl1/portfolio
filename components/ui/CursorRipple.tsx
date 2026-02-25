"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorRipple() {
  const [ripples, setRipples] = useState<any[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      let type = "default";

      if (target.closest("[data-cursor='cta']")) {
        type = "cta";
      } else if (target.closest("nav a")) {
        type = "nav";
      }

      const id = Date.now();

      setRipples((prev) => [
        ...prev,
        { id, x: e.clientX, y: e.clientY, type },
      ]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 2.8, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          className={`
            pointer-events-none fixed z-[997]
            w-10 h-10 rounded-full
            border
            ${
              ripple.type === "cta"
                ? "border-accent"
                : ripple.type === "nav"
                ? "border-white/70"
                : "border-white/40"
            }
          `}
        />
      ))}
    </>
  );
}
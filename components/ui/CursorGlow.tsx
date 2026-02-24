"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  const [variant, setVariant] = useState<"default" | "link" | "button" | "cta">(
    "default"
  );

  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleHoverStart = (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.closest("[data-cursor='cta']")) {
        setVariant("cta");
      } else if (target.closest("button")) {
        setVariant("button");
      } else if (target.closest("a")) {
        setVariant("link");
      }
    };

    const handleHoverEnd = () => setVariant("default");

    const handleClick = () => {
      setClicking(true);
      setTimeout(() => setClicking(false), 160);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHoverStart);
    window.addEventListener("mouseout", handleHoverEnd);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverStart);
      window.removeEventListener("mouseout", handleHoverEnd);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [x, y]);

  /* ✨ Cursor animation variants */
  const glowVariants = {
    default: {
      scale: 1,
      opacity: 0.25,
      width: 160,
      height: 160,
    },
    link: {
      scale: 1.2,
      opacity: 0.35,
      width: 200,
      height: 200,
    },
    button: {
      scale: 1.5,
      opacity: 0.45,
      width: 240,
      height: 240,
    },
    cta: {
      scale: 1.8,
      opacity: 0.6,
      width: 280,
      height: 280,
    },
  };

  /* ✨ Cursor labels */
//   const labels = {
//     default: "",
//     link: "VIEW",
//     button: "CLICK",
//     cta: "EXPLORE",
//   };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={variant}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        style={{
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed z-[999]"
      >
        {/* ✨ Glow */}
       <motion.div
  variants={glowVariants}
  animate={variant}
  transition={{ type: "spring", stiffness: 180, damping: 20 }}
  className="rounded-full bg-accent/20 blur-3xl mix-blend-difference"
/>

{/* ✨ Click Pulse Ring */}
<AnimatePresence>
  {clicking && (
    <motion.div
      initial={{ scale: 0.6, opacity: 0.6 }}
      animate={{ scale: 1.8, opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 rounded-full border border-accent"
    />
  )}
</AnimatePresence>

        {/* ✨ Label */}
        <AnimatePresence>
          (
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center
                text-xs tracking-[0.3em] text-white"
            >
            
            </motion.span>
          )
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
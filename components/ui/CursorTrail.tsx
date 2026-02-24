"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

export function CursorTrail() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 60, damping: 20 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });

  /* ✨ Track velocity */
  const velocityX = useVelocity(x);
  const velocityY = useVelocity(y);

  /* ✨ Convert velocity → stretch */
  const scaleX = useTransform(velocityX, [-1000, 0, 1000], [1.6, 1, 1.6]);
  const scaleY = useTransform(velocityY, [-1000, 0, 1000], [1.6, 1, 1.6]);

  /* ✨ Smooth elastic spring */
  const smoothScaleX = useSpring(scaleX, { stiffness: 200, damping: 25 });
  const smoothScaleY = useSpring(scaleY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [x, y]);

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
        scaleX: smoothScaleX,
        scaleY: smoothScaleY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed z-[998]
        w-3 h-3 rounded-full
        bg-accent blur-[0.35px]"
    />
  );
}
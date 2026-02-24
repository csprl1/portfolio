// "use client";

// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { useEffect, useState } from "react";

// type Variant = "default" | "link" | "button" | "cta";

// export function Cursor() {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const springX = useSpring(x, { stiffness: 140, damping: 25 });
//   const springY = useSpring(y, { stiffness: 140, damping: 25 });

//   const [variant, setVariant] = useState<Variant>("default");
//   const [clicking, setClicking] = useState(false);

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       x.set(e.clientX);
//       y.set(e.clientY);
//     };

//     const handleHover = (e: Event) => {
//       const target = e.target as HTMLElement;

//       if (target.closest("[data-cursor='cta']")) {
//         setVariant("cta");
//       } else if (target.closest("button")) {
//         setVariant("button");
//       } else if (target.closest("a")) {
//         setVariant("link");
//       } else {
//         setVariant("default");
//       }
//     };

//     const handleClick = () => {
//       setClicking(true);
//       setTimeout(() => setClicking(false), 180);
//     };

//     window.addEventListener("mousemove", moveCursor);
//     window.addEventListener("mouseover", handleHover);
//     window.addEventListener("mousedown", handleClick);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       window.removeEventListener("mouseover", handleHover);
//       window.removeEventListener("mousedown", handleClick);
//     };
//   }, [x, y]);

//   return (
//     <motion.div
//       style={{
//         left: springX,
//         top: springY,
//         translateX: "-50%",
//         translateY: "-50%",
//       }}
//       className="pointer-events-none fixed z-[9999]"
//     >
//       {/* DEFAULT → Dot */}
//       {variant === "default" && (
//         <motion.div
//           animate={{ scale: clicking ? 0.7 : 1 }}
//           className="w-2.5 h-2.5 rounded-full bg-white"
//         />
//       )}

//       {/* LINK → Ring */}
//       {variant === "link" && (
//         <motion.div
//           animate={{ scale: clicking ? 0.85 : 1 }}
//           className="w-10 h-10 rounded-full border border-white/80"
//         />
//       )}

//       {/* BUTTON → Dot + Ring */}
//       {variant === "button" && (
//         <>
//           <motion.div
//             animate={{ scale: clicking ? 0.6 : 1 }}
//             className="w-3 h-3 rounded-full bg-white"
//           />
//           <motion.div
//             animate={{ scale: clicking ? 0.9 : 1 }}
//             className="absolute inset-0 w-10 h-10 rounded-full border border-white/60"
//           />
//         </>
//       )}

//       {/* CTA → Glow + Label */}
//       {variant === "cta" && (
//         <>
//           <motion.div
//             animate={{ scale: clicking ? 0.8 : 1 }}
//             className="w-24 h-24 rounded-full bg-accent/20 blur-xl"
//           />
//           <span className="absolute inset-0 flex items-center justify-center
//             text-xs tracking-[0.3em] text-white">
//             EXPLORE
//           </span>
//         </>
//       )}
//     </motion.div>
//   );
// }
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type Variant = "default" | "link" | "button" | "cta";

export function Cursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 160, damping: 22 });
  const springY = useSpring(y, { stiffness: 160, damping: 22 });

  const [variant, setVariant] = useState<Variant>("default");
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleHover = (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.closest("[data-cursor='cta']")) {
        setVariant("cta");
      } else if (target.closest("button")) {
        setVariant("button");
      } else if (target.closest("a")) {
        setVariant("link");
      } else {
        setVariant("default");
      }
    };

    const handleClick = () => {
      setClicking(true);
      setTimeout(() => setClicking(false), 160);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [x, y]);

  const variants = {
    default: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "white",
      scale: clicking ? 0.7 : 1,
    },
    link: {
      width: 36,
      height: 36,
      borderRadius: "60%",
      backgroundColor: "transparent",
      border: "1px solid rgba(255,255,255,0.8)",
      scale: clicking ? 0.9 : 1,
    },
    button: {
      width: 18,
      height: 18,
      borderRadius: "40%",
      backgroundColor: "white",
      scale: clicking ? 0.8 : 1,
    },
    cta: {
      width: 90,
      height: 90,
      borderRadius: "45%",
      backgroundColor: "rgba(245,185,66,0.18)",
      scale: clicking ? 0.92 : 1,
    },
  };

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed z-[9999]"
    >
      <motion.div
        animate={variant}
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
        className="relative flex items-center justify-center"
      >
        {variant === "cta" && (
          <span className="text-xs tracking-[0.3em] text-white">
            EXPLORE
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
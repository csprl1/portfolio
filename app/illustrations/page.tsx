"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import {
  Pencil,
  Layers,
  Palette,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { Counter } from "@/components/ui/NewCounter";

/* ---------------- DATA ---------------- */

const categories = ["All", "Characters", "Concept Art", "Comics", "3D", "Slice of Life", "Environments", "Urban Sketches", "Fantasy", "Architecture"];

const artworks = [
 {
  src: "/art/photo_1.jpg",
  category: "Characters",
  title: "Quiet Between Us",
  tools: "Procreate",
  description: "Minimalist line-art character scene capturing a calm, intimate moment with subtle emotional tension.",
  date: "2025"
}, 
{
  src: "/art/photo_2.jpg",
  category: "Slice of Life",
  title: "Lo-Fi Coffee",
  tools: "Procreate",
  description: "A slice-of-life streetscape capturing the understated charm and familiarity of a neighborhood café.",
  date: "2025"
},
{
  src: "/art/photo_3.jpg",
  category: "Characters",
  title: "Pirate’s Oath",
  tools: "Procreate",
  description: "Character-focused line-art illustration capturing a moment of resolve, posture, and quiet intensity.",
  date: "2025"
},
{
  src: "/art/photo_4.jpg",
  category: "Environments",
  title: "Forest Companions",
  tools: "Procreate",
  description: "A gentle story-driven line-art illustration capturing a quiet moment of rest between whimsical forest creatures.",
  date: "2025"
},
{
  src: "/art/photo_5.jpg",
  category: "Illustrations",
  title: "Dreamscape",
  tools: "Procreate",
  description: "A quiet night moment where stillness, light, and space create a gentle visual pause.",
  date: "2025"
},
{
  src: "/art/photo_7.jpg",
  category: "Urban Sketches",
  title: "Midnight Ramen",
  tools: "Procreate",
  description: "An intimate urban vignette portraying stillness, solitude, and the comfort of a late-night meal.",
  date: "2025"
},
{
  src: "/art/photo_8.jpg",
  category: "Fantasy",
  title: "Guild Hall Tales",
  tools: "Procreate",
  description: "Fantasy slice-of-life scene exploring character dynamics through gesture, staging, and composition.",
  date: "2025"
},
{
  src: "/art/photo_9.jpg",
  category:"Slice of Life",
  title: "New Beginnings",
  tools: "Procreate",
  description: "Story-driven line-art illustration capturing a quiet travel moment — anticipation, transition, and the beginning of a new chapter.",
  date: "2025"
},
{
  src: "/art/photo_10.jpg",
  category: "Characters",
  title: "The Hustle",
  tools: "Procreate",
  description: "Story-driven line-art illustration capturing a focused late-night work session shaped by quiet determination and routine.",
  date: "2025"
},
{
  src: "/art/photo_11.jpg",
  category:"Characters",
  title: "Companions",
  tools: "Procreate",
  description: "Story-driven line-art illustration capturing a quiet shared journey, blending companionship, motion, and gentle introspection.",
  date: "2025"
},
{
  src: "/art/photo_12.jpg",
  category: "Architecture",
  title: "Hall of Learning: IIT KGP",
  tools: "Procreate",
  description: "Story-driven architectural line-art illustration capturing the calm symmetry and quiet presence of an academic landmark.",
  date: "2025"
},
{
  src: "/art/photo_13.jpg",
  category: "Characters",
  title: "Breaking Point",
  tools: "Procreate",
  description: "A study of grit and vulnerability within a single frozen moment.",
  date: "2025"
},
{
  src: "/art/photo_14.jpg",
  category: "Characters",
  title: "Edge of Madness",
  tools: "Procreate",
  description: "Story-driven line-art illustration capturing manic intensity, chaos, and raw energy through expression and dynamic framing.",
  date: "2025"
},
{
  src: "/art/photo_15.png",
  category: "Architecture",
  title: "Minars of Charminar",
  tools: "Procreate",
  description: "Story-driven architectural illustration capturing elegance, symmetry, and cultural presence beneath a serene sky.",
  date: "2025"
},
{
  src: "/art/photo_16.jpg",
  category: "Architecture",
  title: "The Hidden City",
  tools: "Procreate",
  description: "A contemplative city scene filled with micro-stories and atmospheric depth.",
  date: "2025"
},
{
  src: "/art/photo_17.jpg",
  category: "Characters",
  title: "Descent",
  tools: "Procreate",
  description: "An introspective vignette portraying solitude, motion, and the emotional weight of a fleeting moment.",
  date: "2025"
},
{
  src: "/art/photo_18.jpg",
  category: "Characters",
  title: "Between Notes",
  tools: "Procreate",
  description: "Story-driven line-art illustration capturing a quiet moment of escape, where music, space, and thought dissolve into stillness.",
  date: "2025"
}
];

/* ---------------- PAGE ---------------- */

export default function IllustrationPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeArt, setActiveArt] = useState<(typeof artworks)[0] | null>(null);
  const [artIndex, setArtIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isPortrait, setIsPortrait] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [isIdle, setIsIdle] = useState(false);

  const pinchRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const filteredArtworks = useMemo(() => {
    return activeCategory === "All"
      ? artworks
      : artworks.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  const navigate = (direction: number) => {
    const newIndex =
      (artIndex + direction + filteredArtworks.length) %
      filteredArtworks.length;

    setArtIndex(newIndex);
    setActiveArt(filteredArtworks[newIndex]);
  };

  /* ---------------- KEYBOARD ---------------- */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!activeArt) return;

      if (e.key === "Escape") setActiveArt(null);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeArt, artIndex, filteredArtworks]);

  /* ---------------- RESET ---------------- */

  useEffect(() => {
    if (!activeArt) return;

    x.set(0);
    y.set(0);
    setZoom(1);
    setShowDetails(true);
  }, [activeArt]);

  /* ---------------- SCROLL LOCK ---------------- */

  useEffect(() => {
    document.body.style.overflow = activeArt ? "hidden" : "auto";
  }, [activeArt]);

  /* ---------------- PORTRAIT DETECTION ---------------- */

  useEffect(() => {
    if (!activeArt) return;

    const img = new window.Image();
    img.src = activeArt.src;

    img.onload = () => {
      setIsPortrait(img.height > img.width);
    };
  }, [activeArt]);

  /* ---------------- IDLE AUTO-HIDE ---------------- */

  useEffect(() => {
    if (!activeArt) return;

    setIsIdle(false);

    let timer = setTimeout(() => {
      setIsIdle(true);
      setShowDetails(false);
    }, 6000);

    const resetIdle = () => {
      setIsIdle(false);
      setShowDetails(true);
      clearTimeout(timer);

      timer = setTimeout(() => {
        setIsIdle(true);
        setShowDetails(false);
      }, 3000);
    };

    window.addEventListener("mousemove", resetIdle);
    window.addEventListener("keydown", resetIdle);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetIdle);
      window.removeEventListener("keydown", resetIdle);
    };
  }, [activeArt]);

  /* ---------------- ZOOM ---------------- */

  const handleZoom = (delta: number) => {
    setZoom((prev) => Math.min(Math.max(prev + delta, 1), 3));
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const delta = e.deltaY * -0.0015;
    const newZoom = Math.min(Math.max(zoom + delta, 1), 3);
    const zoomFactor = newZoom / zoom;

    x.set((x.get() - offsetX) * zoomFactor + offsetX);
    y.set((y.get() - offsetY) * zoomFactor + offsetY);

    setZoom(newZoom);
  };

  const handleDoubleClick = () => {
    if (zoom > 1) {
      setZoom(1);
      x.set(0);
      y.set(0);
    } else {
      setZoom(2);
    }
  };

  /* ---------------- TOUCH PINCH ---------------- */

  const getDistance = (touches: React.TouchList) => {
    const [a, b] = [touches[0], touches[1]];
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = getDistance(e.touches);

      if (!pinchRef.current) {
        pinchRef.current = dist;
        return;
      }

      const delta = (dist - pinchRef.current) * 0.005;
      pinchRef.current = dist;

      setZoom((prev) => Math.min(Math.max(prev + delta, 1), 3));
    }
  };

  const handleTouchEnd = () => {
    pinchRef.current = null;
  };

  useEffect(() => {
    if (zoom === 1) {
      x.set(0);
      y.set(0);
    }
  }, [zoom]);

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat);
  }, []);

  /* ---------------- UI ---------------- */

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <ParallaxBackground />

      {/* HERO */}
     <section className="py-20 sm:py-28 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">
    <p className="text-accent tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6">
      03 — ILLUSTRATIONS
    </p>

    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
      Art & <span className="text-accent">Imagination</span>
    </h1>

    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-accent/70 to-transparent my-6 sm:my-10" />

    <p className="text-gray-400 max-w-2xl text-sm sm:text-base leading-relaxed">
      From character designs to fantastical worlds, my illustrations
      explore the intersection of imagination and technique.
    </p>
  </div>
</section>

      {/* STATS */}
     <section className="px-4 sm:px-6 pb-16 sm:pb-20">
  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
    <Stat icon={Pencil} value={45} label="Illustrations" />
    <Stat icon={Layers} value={20} label="Concept Designs" />
    <Stat icon={Palette} value={6} label="Tools Mastered" />
    <Stat icon={Sparkles} value={3} label="Years Creating" />
  </div>
</section>

      {/* FILTERS */}
      <section className="px-4 sm:px-6 pb-6 sm:pb-10">
  <div className="max-w-6xl mx-auto flex flex-wrap gap-2 sm:gap-3">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => handleCategoryChange(cat)}
        className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm transition ${
          activeCategory === cat
            ? "bg-accent text-black"
            : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
</section>

      {/* GALLERY */}
     <section className="px-4 sm:px-6 pb-20 sm:pb-28">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
    {filteredArtworks.map((art, i) => (
      <motion.div
        key={art.src + i}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          setActiveArt(art);
          setArtIndex(i);
        }}
        className="cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 border border-white/10"
      >
        <Image
          src={art.src}
          alt={art.title}
          width={800}
          height={600}
          loading="lazy"
          quality={75}
          className="w-full h-full object-cover"
        />
      </motion.div>
    ))}
  </div>
</section>

      {/* LIGHTBOX */}
     <AnimatePresence>
  {activeArt && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 sm:bg-black/80 backdrop-blur-sm sm:backdrop-blur-md"
        onClick={() => setActiveArt(null)}
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full h-[100dvh] sm:h-[85vh]
                   max-w-full sm:max-w-6xl
                   bg-[#0f1115] border border-white/10
                   rounded-none sm:rounded-3xl overflow-hidden"
      >
        {/* Close */}
        <button
          onClick={() => setActiveArt(null)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30
                     w-9 h-9 sm:w-10 sm:h-10 rounded-full
                     bg-black/50 backdrop-blur-md
                     border border-white/10
                     flex items-center justify-center
                     hover:bg-black/70 transition"
        >
          <X size={16} />
        </button>

        {/* Viewer */}
        <div
          ref={containerRef}
          onWheel={handleWheel}
          onDoubleClick={handleDoubleClick}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black"
        >
          {/* Portrait cinematic blur */}
          {isPortrait && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <Image
                src={activeArt.src}
                alt=""
                fill
                quality={40}
                className="object-cover scale-110 blur-2xl"
              />
            </motion.div>
          )}

          {/* SCALE */}
          <motion.div
            animate={{ scale: zoom }}
            transition={{ type: "spring", stiffness: 140, damping: 24 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {isPortrait ? (
              <motion.div
                drag={zoom > 1}
                dragConstraints={containerRef}
                dragElastic={0.12}
                style={{ x, y }}
                className="relative w-full h-full flex items-center justify-center p-6 sm:p-10 cursor-grab"
              >
                <Image
                  src={activeArt.src}
                  alt={activeArt.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>
            ) : (
              <motion.div
                drag={zoom > 1}
                dragConstraints={containerRef}
                dragElastic={0.12}
                style={{ x, y }}
                className="relative w-full h-full cursor-grab"
              >
                <Image
                  src={activeArt.src}
                  alt={activeArt.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* DETAILS */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: zoom > 1 ? 0 : 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-28 sm:bottom-24 left-0 right-0 px-4 sm:px-8"
            >
              <div className="max-w-xl bg-black/50 sm:bg-black/40
                              border border-white/10 rounded-xl sm:rounded-2xl
                              p-4 sm:p-5 text-sm sm:text-base">
                <h3 className="text-white">{activeArt.title}</h3>
                <p className="text-gray-400">{activeArt.tools}</p>
                <p className="text-gray-400">{activeArt.description}</p>
                <p className="text-gray-500">{activeArt.date}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* NAV */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30
                     w-9 h-9 sm:w-10 sm:h-10 rounded-full
                     bg-black/50 backdrop-blur-md
                     border border-white/10
                     flex items-center justify-center
                     hover:bg-black/70 transition"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => navigate(1)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30
                     w-9 h-9 sm:w-10 sm:h-10 rounded-full
                     bg-black/50 backdrop-blur-md
                     border border-white/10
                     flex items-center justify-center
                     hover:bg-black/70 transition"
        >
          <ChevronRight size={18} />
        </button>

        {/* ZOOM */}
        <div className="absolute bottom-20 sm:bottom-4 right-3 sm:right-4 flex gap-2 z-20">
          <button
            onClick={() => handleZoom(-0.5)}
            className="w-8 h-8 rounded-full bg-black/50 border border-white/10"
          >
            −
          </button>
          <button
            onClick={() => handleZoom(0.5)}
            className="w-8 h-8 rounded-full bg-black/50 border border-white/10"
          >
            +
          </button>
        </div>

        {/* THUMBNAILS */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 sm:bg-black/40
                        px-3 sm:px-6 py-2 sm:py-3 flex gap-2 sm:gap-3
                        overflow-x-auto">
          {filteredArtworks.map((a, i) => (
            <button
              key={a.src + i}
              onClick={() => {
                setActiveArt(a);
                setArtIndex(i);
              }}
              className="shrink-0"
            >
              <Image
                src={a.src}
                alt={a.title}
                width={56}
                height={56}
                loading="lazy"
                quality={60}
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    <section className="px-4 sm:px-6 pb-20 sm:pb-32">
  <div
    className="
      max-w-6xl mx-auto
      relative
      rounded-2xl sm:rounded-[28px]
      border border-amber-400/20
      bg-gradient-to-b from-amber-300/[0.10] to-amber-500/[0.02]
      backdrop-blur-lg sm:backdrop-blur-2xl
      px-5 sm:px-10
      py-8 sm:py-14
      text-center
      shadow-[0_25px_90px_rgba(0,0,0,0.65)]
      overflow-hidden
    "
  >
    {/* Subtle Golden Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_30%)] pointer-events-none" />

    <div className="relative">
      <h3 className="text-lg sm:text-[22px] font-semibold tracking-tight text-amber-100 mb-2 sm:mb-3">
        Want a Custom Illustration?
      </h3>

      <p className="text-amber-200/60 text-xs sm:text-sm mb-5 sm:mb-8 leading-relaxed max-w-xl mx-auto">
        I take on select commissions for character designs,
        book covers, concept art, and visual storytelling projects.
      </p>

      <Link
       href="/contact"
       className="
            group mt-5 sm:mt-6
            inline-flex items-center gap-2

            px-4 sm:px-5
            py-2 sm:py-2.5
            rounded-full

            bg-amber-400
            text-black
            text-sm font-medium

            shadow-[0_10px_40px_rgba(255,215,0,0.35)]
            hover:shadow-[0_12px_50px_rgba(255,215,0,0.45)]

            transition-all duration-300
            active:scale-[0.98]
          "
      >
        Commission Work
      </Link>

      <p className="text-amber-300/40 text-[10px] sm:text-xs mt-3 sm:mt-5">
        Limited availability · Open for selected projects
      </p>
    </div>
  </div>
</section>

      <Footer />
    </main>
  );
}

/* ---------------- STAT ---------------- */

// function Stat({ icon: Icon, value, label }: any) {
//   return (
//     <motion.div
//       whileHover={{ y: -4, scale: 1.01 }}
//       className="rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl px-6 py-5 text-center"
//     >
//       <Icon size={18} className="text-accent mb-2 mx-auto" />
//       <p className="text-lg font-semibold">
//         <Counter to={value} suffix="+" />
//       </p>
//       <p className="text-[10px] tracking-[0.25em] text-gray-500 uppercase">
//         {label}
//       </p>
//     </motion.div>
//   );
// }
function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: number;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="
        group relative rounded-2xl
        bg-gradient-to-b from-white/[0.05] to-white/[0.01]
        border border-white/10
        backdrop-blur-xl
        px-6 py-5
        flex flex-col items-center justify-center
        text-center
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
      "
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-accent/5" />

      <Icon size={18} className="text-accent mb-2 opacity-80" />

      {/* Animated Value */}
      <p className="text-lg font-semibold tracking-tight">
        <Counter to={value} suffix="+" />
      </p>

      <p className="text-[10px] tracking-[0.25em] text-gray-500 uppercase mt-1">
        {label}
      </p>
    </motion.div>
  );
}
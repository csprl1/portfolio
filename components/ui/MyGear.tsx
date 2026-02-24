"use client";

import { motion } from "framer-motion";
import { Camera, Aperture } from "lucide-react";
import { useState } from "react";

export function MyGear() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpen(open === section ? null : section);
  };

  return (
   <section className="px-4 sm:px-6 pb-16 sm:pb-24">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="
      max-w-6xl mx-auto
      rounded-2xl sm:rounded-3xl
      border border-white/10
      bg-gradient-to-b from-white/[0.04] to-white/[0.01]
      backdrop-blur-lg sm:backdrop-blur-xl
      shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.6)]
      p-6 sm:p-10 md:p-14
      relative overflow-hidden
    "
  >
    {/* Ambient glow */}
    <div className="absolute inset-0 opacity-20 sm:opacity-30 pointer-events-none">
      <div className="absolute -top-20 sm:-top-24 -left-20 sm:-left-24 w-56 sm:w-72 h-56 sm:h-72 bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-20 sm:-bottom-24 -right-20 sm:-right-24 w-56 sm:w-72 h-56 sm:h-72 bg-accent/10 blur-3xl" />
    </div>

    <div className="relative z-10">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-10 tracking-tight text-center sm:text-left">
        My Gear
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
        <GearCard
          icon={Camera}
          title="Camera Bodies"
          isOpen={open === "bodies"}
          onClick={() => toggle("bodies")}
        >
          <GearItem>Sony A7 III — Primary workhorse</GearItem>
          <GearItem>Fujifilm X-T4 — Street & travel</GearItem>
          <GearItem>Canon EOS R5 — Studio work</GearItem>
        </GearCard>

        <GearCard
          icon={Aperture}
          title="Favorite Lenses"
          isOpen={open === "lenses"}
          onClick={() => toggle("lenses")}
        >
          <GearItem>Sony 24-70mm f/2.8 GM</GearItem>
          <GearItem>Sony 85mm f/1.4 GM</GearItem>
          <GearItem>Fuji 35mm f/1.4</GearItem>
        </GearCard>
      </div>
    </div>
  </motion.div>
</section>
  );
}

/* ---------------- CARD ---------------- */

function GearCard({
  icon: Icon,
  title,
  children,
  isOpen,
  onClick,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="
        group relative
        rounded-2xl
        border border-white/10
        bg-black/40
        p-5
        cursor-pointer
        overflow-hidden
      "
      onClick={onClick}
    >
      {/* Magnetic glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 bg-accent/10 blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <Icon size={18} className="text-accent" />
          <h3 className="text-sm font-medium">{title}</h3>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden"
        >
          <div className="pt-4 space-y-2">{children}</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ---------------- ITEM ---------------- */

function GearItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-2 text-sm text-gray-300"
    >
      {/* Icon bullet */}
      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent/70" />
      <span className="group-hover:text-white transition">{children}</span>
    </motion.div>
  );
}
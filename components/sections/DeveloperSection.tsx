"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Database,
  Smartphone,
  Cloud,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const cards = [
  {
    icon: Globe,
    title: "Frontend",
    tech: "React, Next.js, Vue, Vite, TypeScript",
  },
  {
    icon: Server,
    title: "Backend",
    tech: "Node.js, Express, Axios, REST/GraphQL",
  },
  {
    icon: Database,
    title: "Database",
    tech: "PostgreSQL, MongoDB, Redis, NeonDB",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    tech: "React Native, Flutter, Swift, Kotlin",
  },
  {
    icon: Cloud,
    title: "DevOps",
    tech: "Docker, AWS, Vercel, Railwayr, Cloudflare",
  },
  {
    icon: Wrench,
    title: "Tools",
    tech: "Git, VS Code, Figma, Xcode, Android Studio",
  },
];
/* ✨ Animation Variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export function DeveloperSection() {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto relative">

        {/* ✨ Background Aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2
          w-[620px] h-[620px] bg-accent/10 blur-[140px]
          rounded-full pointer-events-none"
        />

        {/* ✨ Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-accent tracking-[0.3em] text-xs mb-4">
            01 — DEVELOPER
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Building the <span className="text-accent">Future</span>
          </h2>

          <div className="w-16 h-px bg-accent/40 my-6" />

          <p className="text-gray-400 max-w-xl text-sm sm:text-base">
            Crafting scalable, performant applications with modern technologies
            and clean architecture.
          </p>
        </motion.div>

        {/* ✨ Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                variants={item}
                whileHover={{ scale: 1.03 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();

                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;

                  const rotateX =
                    ((e.clientY - rect.top) / rect.height - 0.5) * -10;
                  const rotateY =
                    ((e.clientX - rect.left) / rect.width - 0.5) * 10;

                  setSpotlight({ x, y });
                  setTilt({ x: rotateX, y: rotateY });
                }}
                onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                className="relative group rounded-2xl overflow-hidden"
              >
                {/* 🌈 Gradient Border */}
                <div className="gradient-border" />

                {/* 💎 Card */}
                <div className="relative rounded-2xl
                  bg-white/[0.02]
                  border border-white/10
                  backdrop-blur-xl
                  p-6
                  shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                  overflow-hidden"
                >
                  {/* 💡 Spotlight */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                    style={{
                      background: `radial-gradient(
                        circle at ${spotlight.x}% ${spotlight.y}%,
                        rgba(245,185,66,0.18),
                        transparent 40%
                      )`,
                    }}
                  />

                  {/* ✨ Glass Reflection Sweep */}
                  <div className="glass-sweep" />

                  {/* ✨ Floating Icon */}
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    style={{ transform: "translateZ(35px)" }}
                    className="mb-4"
                  >
                    <Icon size={20} className="text-accent" />
                  </motion.div>

                  <h3
                    className="text-white font-medium mb-2 relative z-10"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {card.title}
                  </h3>

                  <p
                    className="text-gray-400 text-sm relative z-10"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {card.tech}
                  </p>

                  {/* ✨ Glow Edge */}
                  <div className="absolute inset-0 rounded-2xl opacity-0
                    group-hover:opacity-20 blur-xl bg-accent/20 transition"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ✨ Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <h3 className="text-lg font-semibold mb-10">
            Featured <span className="text-accent">Projects</span>
          </h3>

          <div className="space-y-4">
            {[
  {
    id: "01",
    title: "EaseFeedback.com",
    desc: "Customer feedback SaaS platform with a reward-based engagement system for collecting actionable insights.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "02",
    title: "Employee Performance Portal",
    desc: "Internal HR dashboard for tracking employee KPIs, feedback scores, and productivity metrics.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "03",
    title: "3D Web Development and its Mathematical Application",
    desc: "Master’s thesis project exploring Three.js, WebGL, and mathematical models for real-time 3D rendering.",
    tech: ["Three.js", "WebGL", "TypeScript", "Linear Algebra"],
  },
].map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01, x: 6 }}
                className="group relative rounded-2xl
                  bg-white/[0.02]
                  border border-white/10
                  backdrop-blur-xl
                  px-6 py-5
                  flex items-center justify-between
                  transition-all duration-300
                  hover:border-accent/30"
              >
                {/* Glow Bar */}
                <div className="absolute left-0 top-0 h-full w-[3px]
                  bg-accent opacity-0 group-hover:opacity-100 transition"
                />

                {/* Left */}
                <div className="flex items-start gap-5">
                  <span className="text-accent/70 text-sm mt-1">
                    {project.id}
                  </span>

                  <div>
                    <h4 className="text-white font-medium">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Right Tags */}
                <div className="hidden sm:flex gap-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 4 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="text-xs px-3 py-1 rounded-full
                        bg-white/5 border border-white/10
                        text-gray-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0
                  group-hover:opacity-10 blur-xl bg-accent/20 transition"
                />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
           <motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
>
  <Link
    href="/developer"
    data-cursor="cta"
    className="
      text-accent
      text-xs
      tracking-[0.3em]
      hover:tracking-[0.4em]
      transition-all duration-300
      inline-block
    "
  >
    VIEW ALL PROJECTS ↗
  </Link>
</motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
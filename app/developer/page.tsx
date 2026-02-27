"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Server,
  Database,
  Smartphone,
  Cloud,
  Wrench,
  X,
  ShoppingCart,
  LineChart,
  Users,
  Sparkles,
   Github,
  ExternalLink,
  BarChart3,
  Box,
  Link2,
  Rocket,
  Atom, 
} from "lucide-react";
import Link from "next/link";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

/* ---------------- TYPES ---------------- */

interface Skill {
  icon: React.ElementType;
  title: string;
  tech: string;
  level: number;
}

interface Project {
  icon: React.ElementType;
  title: string;
  desc: string;
  tech: string[];
  role: string;
  duration: string;
  team: string;
  highlights: string[];
  challenge: string;
  github?: string;
  demo?: string;    
}

/* ---------------- DATA ---------------- */

const skills: Skill[] = [
  { icon: Globe, title: "Frontend", tech: "React, Next.js, Vue, Vite, TypeScript, JavaScript, Tailwind CSS, Bootstrap", level: 92 },
  { icon: Server, title: "Backend", tech: "Node.js, Express, JSON Web Token (JWT), Axios, REST/GraphQL", level: 88 },
  { icon: Database, title: "Database", tech: "PostgreSQL, MongoDB, Redis, NeonDB, SupabaseDB", level: 85 },
  { icon: Smartphone, title: "Mobile", tech: "React Native, Flutter, Swift, Kotlin", level: 80 },
  { icon: Cloud, title: "DevOps", tech: "Docker, AWS, Vercel, Railway,Render, Cloudflare, CI/CD", level: 82 },
  { icon: Wrench, title: "Tools", tech: "Git, VS Code, Figma, Postman, Xcode, Android Studio", level: 90 },
];

const projects: Project[] = [
 {
  icon: BarChart3, // or any relevant icon like Sparkles / Users
  title: "EaseFeedback.com",
  desc: "Customer feedback SaaS platform that gamifies user engagement through a reward-based system, helping businesses collect actionable insights.",
  tech: [
    "React (Vite + TypeScript)",
    "Node.js",
    "Express",
    "PostgreSQL (Neon)",
    "Tailwind CSS",
    "JWT",
    "Render",
    "Vercel",
  ],
  role: "Lead Full-Stack Developer",
  duration: "Apr 2025 – Nov 2025",
  team: "3 developers", // adjust if needed
  highlights: [
    "Led end-to-end full-stack development of easefeedback.com",
    "Architected frontend using React (Vite + TypeScript)",
    "Built secure RESTful APIs for auth, feedback & analytics",
    "Implemented JWT-based authentication & RBAC",
    "Optimized PostgreSQL schemas & query performance",
    "Developed responsive UI with Tailwind CSS",
    "Deployed via Vercel (frontend) & Render (backend)",
    "Integrated CI/CD ensuring high uptime & rapid releases",
    "Improved onboarding & engagement during beta testing",
  ],
  challenge:
    "Designing a scalable reward-based engagement system while maintaining low-latency API performance and secure multi-role access control.",
  demo: "https://easefeedback.com",
},
  {
  icon: Box, // or Cube / Box / Atom if you have a 3D-style icon
  title: "3D Web Development & Mathematical Applications",
  desc: "Master’s Thesis Project focused on building a browser-based 3D web application using Three.js and WebGL, integrating mathematical models for rendering optimization and real-time scene performance.",
  tech: [
    "React",
    "Three.js",
    "WebGL",
    "JavaScript",
    "TypeScript",
    "Linear Algebra",
  ],
  role: "Research & Development (Master’s Thesis)",
  duration: "Academic Project",
  team: "Under Prof. H.S. Mahato (Maths Dept, IIT KGP)",
  highlights: [
    "Designed and developed an interactive 3D web application using Three.js & WebGL",
    "Implemented Phong lighting & shading models for realistic illumination",
    "Applied vector transformations, matrix operations, and perspective projections",
    "Built dynamic controls for lighting, textures, and camera movement",
    "Optimized rendering pipeline through benchmarking & performance tuning",
    "Validated scalability of web-based 3D graphics for research/education",
  ],
  challenge:
    "Balancing visual fidelity and real-time rendering performance by leveraging mathematical optimization techniques and efficient GPU resource management.",
},
{
  icon: Atom, // or Cpu / Sparkles / Brain if available in your icon set
  title: "AI Intelligence Platform – Cinematic Motion Website",
  desc: "A modern AI-focused web experience showcasing intelligent systems through advanced scroll-based animations, 3D hover interactions, and cinematic video storytelling. Built with React, GSAP, and Tailwind CSS to deliver a premium, enterprise-grade UI.",
  tech: [
    "React (Vite)",
    "JavaScript (ES6+)",
    "GSAP (ScrollTrigger)",
    "Tailwind CSS",
    "HTML5",
    "WebP / MP4 Optimization",
    "Vercel",
  ],
  role: "Lead Frontend Engineer",
  duration: "Jan 2026 – Feb 2026",
  team: "Solo Project",
  highlights: [
    "Architected and developed a fully animated AI-themed web platform from scratch",
    "Implemented scroll-triggered geometric transitions using GSAP ScrollTrigger",
    "Engineered reusable animated components (Hero, Bento Grid, Floating Image)",
    "Built perspective-based 3D hover tilt interactions",
    "Integrated optimized video backgrounds for cinematic storytelling",
    "Designed modular component structure for scalability and maintainability",
    "Optimized media assets (WebP / compressed MP4) for performance",
    "Ensured full responsiveness across desktop, tablet, and mobile devices",
    "Deployed production-ready build on Vercel",
  ],
  challenge:
    "Maintaining smooth 60fps animation performance while combining scroll-driven transitions, 3D transforms, and video-heavy sections, requiring careful asset optimization and animation tuning.",
  github: "https://github.com/csprl1/ai_intelligence_website", // replace if available
  demo: "hhttps://ai-intelligence-website.vercel.app/",
},

{ icon: LineChart, title: "Analytics Dashboard", desc: "Real-time data visualization platform for business intelligence with interactive charts, custom reports, and WebSocket live feeds.", tech: ["TypeScript", "D3.js", "WebSocket", "Redis"], role: "Full-Stack Developer", duration: "4 months", team: "3 developers", highlights: [ "Developed interactive D3.js visualizations", "Implemented WebSocket live updates", "Optimized performance for large datasets", ], challenge: "Maintaining smooth UI performance while processing real-time streaming data.", github: "https://github.com/yourusername/analytics", demo: "https://demo-link.com", },
  {
  icon: LineChart, 
  title: "Employee Performance Portal",
  desc: "Internal HR dashboard designed for tracking employee KPIs, feedback scores, and productivity metrics through real-time, data-driven visualizations.",
  tech: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "Axios",
    "REST APIs",
  ],
  role: "Frontend Developer (Software Engineer)",
  duration: "Dec 2024 – Apr 2025",
  team: "5 developers",
  highlights: [
    "Developed and maintained performance tracking portal UI",
    "Built dynamic dashboards and leaderboards",
    "Integrated multiple REST APIs for real-time metrics",
    "Implemented role-based views (HR, Manager, Employee)",
    "Designed responsive & accessible layouts with Tailwind CSS",
    "Reduced load time by 30% via lazy loading & code-splitting",
    "Applied memoization for render performance optimization",
    "Collaborated in agile sprint cycles with Git/GitHub",
  ],
  challenge:
    "Balancing real-time data updates with smooth UI performance while ensuring consistent role-based rendering and responsiveness across devices.",
}, {
  icon: Link2, 
  title: "TinyLink",
  desc: "Minimal URL shortener built with Next.js App Router, Prisma ORM, and Neon Postgres. Supports short-code generation, redirects, click analytics, deletion, and a clean Tailwind UI.",
  tech: [
    "Next.js (App Router)",
    "TypeScript",
    "Prisma",
    "PostgreSQL (Neon)",
    "Tailwind CSS",
    "Vercel",
  ],
  role: "Full-Stack Developer",
  duration: "1 month",
  team: "Solo Project",
  highlights: [
    "Implemented short-code creation (custom codes optional)",
    "Enforced validation pattern [A-Za-z0-9]{6,8}",
    "Built redirect handler with click-tracking",
    "Developed dashboard for link management",
    "Created per-link analytics / stats page",
    "Added delete functionality with 404 fallback",
    "Exposed health check endpoint (/healthz)",
    "Used Prisma ORM with Neon Postgres",
    "Designed modern UI using Tailwind CSS",
  ],
  challenge:
    "Designing a reliable redirect + analytics flow while maintaining type safety across server actions and API handlers.",
  github: "https://github.com/csprl1/TinyLink", // replace if available
  demo: "https://tiny-link-ebon.vercel.app",
}, {
  icon: Rocket,
  title: "SpaceX Launch Dashboard",
  desc: "A SpaceX-inspired launch monitoring dashboard showcasing mission details including launch time (UTC), location, orbit, rocket type, and status. Built with a focus on clean data presentation, filtering UX, and responsive design.",
  tech: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "REST API",
    "Vercel",
  ],
  role: "Frontend Developer",
  duration: "1 month",
  team: "Solo Project",
  highlights: [
    "Built responsive launch tracking UI",
    "Implemented filtering (Past 6 Months / All Launches)",
    "Designed dynamic status badges (Upcoming / Success)",
    "Developed paginated mission table",
    "Structured clean reusable components",
    "Optimized layout for readability & scanning",
    "Deployed via Vercel",
  ],
  challenge:
    "Designing a data-dense table UI while maintaining visual clarity, hierarchy, and responsiveness across screen sizes.",
  github: "https://github.com/csprl1/interview-for-prathamesh-ugale", // replace if available
  demo: "https://interview-for-prathamesh-ugale.vercel.app/",
}
];

const experience = [
  {
    year: "Dec 2025 — Present",
    role: "Founding Engineer",
    company: "Senseible · Full-time · Remote",
    desc: "Building scalable full-stack systems, contributing to product architecture, and delivering high-quality user-centric features in a remote-first environment.",
  },
  {
    year: "Apr 2025 — Dec 2025",
    role: "Full Stack Developer",
    company: "Nexor Tech Systems · Full-time",
    desc: "Led end-to-end development of EaseFeedback.com — architected a React + Node.js application, designed secure REST APIs, implemented JWT authentication, and optimized PostgreSQL performance.",
  },
  {
    year: "Jan 2025 — Apr 2025",
    role: "Frontend Developer",
    company: "Presana Systems Pvt. Ltd.",
    desc: "Developed responsive UI systems and real-time dashboards using React + TypeScript, improving performance, usability, and cross-device consistency.",
  },
  {
    year: "May 2023 — Jul 2023",
    role: "Software Developer Intern",
    company: "Suzlon Group",
    desc: "Built React-based interfaces, developed reusable UI components, and integrated REST APIs to support dynamic workflows and responsive layouts.",
  },
];
/* ---------------- COMPONENT ---------------- */

export default function DeveloperPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <ParallaxBackground />

      {/* HERO */}
      <section className="py-20 sm:py-28 md:py-32 px-5 sm:px-6">
  <div className="max-w-6xl mx-auto">

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-accent tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6"
    >
      01 — DEVELOPER
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-5xl md:text-6xl font-bold"
    >
      Building the <span className="text-accent">Future</span>
    </motion.h1>

    <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-accent/70 to-transparent my-6 sm:my-10" />

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed"
    >
      Focused on building scalable, high-performance applications using modern technologies and clean architecture. <br/> Every line of code is written with purpose.
    </motion.p>

  </div>
</section>

      {/* SKILLS */}
      <section className="px-5 sm:px-6 pb-20 sm:pb-24">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-10">
      Technical <span className="text-accent">Skills</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
      {skills.map((skill, i) => {
        const Icon = skill.icon;

        return (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="
              rounded-2xl
              bg-white/[0.02]
              border border-white/10
              backdrop-blur-xl
              p-5 sm:p-6
              shadow-[0_10px_40px_rgba(0,0,0,0.6)]
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <Icon size={16} className="text-accent sm:size-[18]" />
              <h3 className="font-medium text-sm sm:text-base">
                {skill.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 mb-4">
              {skill.tech}
            </p>

            <div className="h-[5px] sm:h-[6px] rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-full bg-accent"
              />
            </div>
          </motion.div>
        );
      })}
    </div>

  </div>
</section>

      {/* PROJECTS */}
    <section className="px-5 sm:px-6 py-16 sm:py-20 md:py-24">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-10">
      Featured <span className="text-accent">Projects</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
      {projects.map((project, i) => {
        const Icon = project.icon;

        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveProject(project)}
            className="
              group cursor-pointer
              rounded-2xl
              bg-white/[0.02]
              border border-white/10
              backdrop-blur-xl
              p-5 sm:p-6
              shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              hover:border-accent/30
              hover:shadow-[0_0_25px_rgba(0,255,200,0.08)]
              transition
              active:scale-[0.98]
            "
          >
            <div className="mb-3 sm:mb-4">
              <div className="
                w-9 h-9 sm:w-10 sm:h-10
                rounded-xl
                bg-white/5
                border border-white/10
                flex items-center justify-center
                group-hover:bg-accent/10
                transition
              ">
                <Icon size={16} className="text-accent sm:size-[18]" />
              </div>
            </div>

            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 leading-relaxed">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-xs
                    px-2.5 sm:px-3
                    py-[5px] sm:py-1
                    rounded-full
                    bg-white/5
                    border border-white/10
                    text-gray-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>
        );
      })}
    </div>

  </div>
</section>

      {/* MODAL */}
      <AnimatePresence>
  {activeProject && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setActiveProject(null)}
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 40 }}
        transition={{ duration: 0.35 }}
        className="
          relative w-full max-w-4xl max-h-[85vh]
          overflow-y-auto
          rounded-2xl sm:rounded-3xl
          bg-[#0f1115]
          border border-white/10
          backdrop-blur-2xl
          p-4 sm:p-6 md:p-8
          shadow-[0_20px_80px_rgba(0,0,0,0.8)]
        "
      >
        {/* Close */}
        <button
          onClick={() => setActiveProject(null)}
          className="
            absolute top-3 right-3 sm:top-6 sm:right-6
            w-8 h-8 sm:w-9 sm:h-9
            rounded-full
            bg-white/5 border border-white/10
            flex items-center justify-center
            text-gray-400 hover:text-white
            hover:bg-white/10 transition
          "
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="
            w-10 h-10 sm:w-12 sm:h-12
            rounded-xl bg-accent/10
            flex items-center justify-center
            border border-accent/20
          ">
            <activeProject.icon size={18} className="text-accent sm:size-[22]" />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              {activeProject.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mt-1">
              {activeProject.desc}
            </p>
          </div>
        </div>

        {/* Meta */}
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <MetaCard label="ROLE" value={activeProject.role} />
          <MetaCard label="DURATION" value={activeProject.duration} />
          <MetaCard label="TEAM" value={activeProject.team} />
        </div>

        {/* Tech */}
        <div className="mb-4 sm:mb-6">
          <p className="text-[10px] sm:text-xs tracking-wider text-accent/70 mb-2 sm:mb-3">
            TECH STACK
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {activeProject.tech.map((tech) => (
              <span
                key={tech}
                className="
                  text-xs px-2.5 sm:px-3
                  py-[5px] sm:py-1
                  rounded-full
                  bg-white/5 border border-white/10
                  text-gray-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-4 sm:mb-6">
          <p className="text-[10px] sm:text-xs tracking-wider text-accent/70 mb-2 sm:mb-3">
            KEY HIGHLIGHTS
          </p>

          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
            {activeProject.highlights.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-accent">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenge */}
        <div className="mb-6 sm:mb-8">
          <p className="text-[10px] sm:text-xs tracking-wider text-accent/70 mb-1 sm:mb-2">
            TECHNICAL CHALLENGE
          </p>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            {activeProject.challenge}
          </p>
        </div>

        {/* Buttons */}
       <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3 justify-center">

  {activeProject.github || activeProject.demo ? (
    <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3 justify-center">

      {activeProject.github && (
        <a
          href={activeProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-4 sm:px-5 py-2 sm:py-2.5
            rounded-xl
            bg-white/5 border border-white/10
            hover:bg-white/10 transition
            text-sm flex items-center gap-2
          "
        >
          <Github size={16} />
          View Code
        </a>
      )}

      {activeProject.demo && (
        <a
          href={activeProject.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-4 sm:px-5 py-2 sm:py-2.5
            rounded-xl
            bg-accent text-black
            hover:brightness-110 transition
            text-sm flex items-center gap-2
          "
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      )}

    </div>
  ) : (
    <div
        className="
    mt-2
    text-xs sm:text-sm
    text-gray-400
    bg-white/[0.035]
    border border-white/10
    rounded-xl
    px-5 py-3.5
    text-center
    leading-relaxed
    max-w-md
    mx-auto
  "
    >
      🔒 Links unavailable — this project was developed for an internal or confidential system.
    </div>
  )}

</div>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* EXPERIENCE */}
     <section className="px-5 sm:px-6 py-10 sm:py-14">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-12">
      Experience
    </h2>

    <div className="relative border-l border-white/10 pl-6 sm:pl-8 space-y-6 sm:space-y-10">
      {experience.map((item, i) => (
        <motion.div
          key={item.role}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <span className="
            absolute -left-[33px] sm:-left-[41px]
            top-1.5
            w-3 h-3 rounded-full
            bg-accent
          " />

          <p className="text-[11px] sm:text-xs text-accent/70 mb-1">
            {item.year}
          </p>

          <h3 className="font-medium text-sm sm:text-base">
            {item.role}
          </h3>

          <p className="text-xs sm:text-sm text-gray-500">
            {item.company}
          </p>

          <p className="text-xs sm:text-sm text-gray-400 mt-1.5 sm:mt-2">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>

      {/* CTA */}
    <section className="px-5 py-16 sm:px-6 pb-20 sm:pb-32">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
    className="
      max-w-5xl mx-auto
      relative
      rounded-2xl sm:rounded-[28px]
      border border-white/10
      bg-gradient-to-b from-white/[0.06] to-white/[0.01]
      backdrop-blur-2xl
      p-6 sm:p-10 md:p-14
      text-center
      shadow-[0_25px_90px_rgba(0,0,0,0.65)]
      overflow-hidden
    "
  >
    {/* Subtle White Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)] pointer-events-none" />

    <div className="relative">
      <h3 className="text-xl sm:text-2xl md:text-[26px] font-semibold tracking-tight text-white mb-3 sm:mb-4">
        Interested in working together?
      </h3>

      <p className="text-white/45 text-xs sm:text-sm mb-6 sm:mb-10 max-w-xl mx-auto leading-relaxed">
        I’m always open to discussing new projects, creative ideas,
        or opportunities to build something meaningful.
      </p>

      <motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
>
  <Link
    href="/contact"
    className="
      inline-flex items-center justify-center
      h-11 sm:h-12
      px-6 sm:px-8
      rounded-full
      bg-accent
      text-black
      text-sm font-medium
      tracking-tight
      shadow-[0_8px_25px_rgba(0,0,0,0.35)]
      transition
    "
  >
    Get in Touch ↗
  </Link>
</motion.div>

      <p className="text-white/25 text-xs mt-4 sm:mt-6">
        Available for select collaborations
      </p>
    </div>
  </motion.div>
</section>

      <Footer />
    </main>
  );
}

/* SMALL COMPONENT */
function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-2xl bg-white/[0.02]
        border border-white/10 p-4
        shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
    >
      <p className="text-[10px] tracking-wider text-gray-500 mb-1">
        {label}
      </p>
      <p className="text-sm font-medium">
        {value}
      </p>
    </div>
  );
}
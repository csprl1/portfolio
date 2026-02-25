"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Download, ArrowUpRight } from "lucide-react";
import { useRef, useEffect, useState , createContext, useContext} from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import {
  Briefcase,
  Rocket,
  Laptop,
  Handshake,
  Camera,
  PenTool,
  X ,
  Code2, 
  Palette,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";



const metaCertifications = [
  {
    title: "Programming Fundamentals in Kotlin",
    issuer: "Meta",
    date: "Issued Dec 2022",
    credential: "Credential ID BACB82R59Q27",
    logo: "/meta.png",
    href: "#",
  },
  {
    title: "Version Control",
    issuer: "Meta",
    date: "Issued Oct 2022",
    credential: "Credential ID 3BB3QUVARHF8",
    logo: "/meta.png",
    href: "#",
  },
  {
    title: "Introduction to Android Mobile Application Development",
    issuer: "Meta",
    date: "Issued Oct 2022",
    credential: "Credential ID Q9ZNBPZ5B7VQ",
    logo: "/meta.png",
    href: "#",
  },
  {
    title: "React Basics",
    issuer: "Meta",
    date: "Issued Apr 2023",
    credential: "Credential ID Z5V92Q8RCP23",
    logo: "/meta.png",
    href: "#",
  },
  {
    title: "HTML and CSS in Depth",
    issuer: "Meta",
    date: "Issued Mar 2023",
    credential: "Credential ID T7X2WRCQ8954",
    logo: "/meta.png",
    href: "#",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "Issued Mar 2023",
    credential: "Credential ID DCWZNMRL4P5F",
    logo: "/meta.png",
    href: "#",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "Issued Mar 2023",
    credential: "Credential ID JJBD57CKAAKZ",
    logo: "/meta.png",
    href: "#",
  },
  {
    title: "Principles of UX/UI Design",
    issuer: "Meta",
    date: "Issued Dec 2022",
    credential: "Credential ID DNPUNQXVA64",
    logo: "/meta.png",
    href: "#",
  },
];
const googleCertifications = [
  {
    title: "Google Data Analytics Specialization",
    issuer: "Google",
    date: "Issued Feb 2023",
    credential: "Credential ID VERP38CLZCL7",
    logo: "/google.png",
    href: "#",
  },
  {
    title: "Google Finance Data Analyst Professional Certificate Specialization",
    issuer: "Google",
    date: "Issued Feb 2023",
    credential: "Credential ID ITW2V6WAWZ6F",
    logo: "/google.png",
    href: "#",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    date: "Issued Dec 2022",
    credential: "Credential ID D8TLZBNMT2U",
    logo: "/google.png",
    href: "#",
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google",
    date: "Issued Dec 2022",
    credential: "Credential ID 4L7UCVZ3ZE42",
    logo: "/google.png",
    href: "#",
  },
  {
    title: "Prepare Data for Exploration",
    issuer: "Google",
    date: "Issued Jan 2023",
    credential: "Credential ID 84BJXEFCPRYCC",
    logo: "/google.png",
    href: "#",
  },
  {
    title: "Process Data from Dirty to Clean",
    issuer: "Google",
    date: "Issued Jan 2023",
    credential: "Credential ID RUHTRYHK6JG5",
    logo: "/google.png",
    href: "#",
  },
  {
    title: "Analyze Data to Answer Questions",
    issuer: "Google",
    date: "Issued Jan 2023",
    credential: "Credential ID LVWZMAUC7N57",
    logo: "/google.png",
    href: "#",
  },
  {
    title: "Share Data Through the Art of Visualization",
    issuer: "Google",
    date: "Issued Jan 2023",
    credential: "Credential ID TDK985F759FJ",
    logo: "/google.png",
    href: "#",
  },
  {
    title: "Data Analysis with R Programming",
    issuer: "Google",
    date: "Issued Feb 2023",
    credential: "Credential ID QP5HSDXXL63U",
    logo: "/google.png",
    href: "#",
  },
];

const semesters = [
  {
    semester: "Semester 1 & 2",
    courses: [
      "Programming and Data Structures",
      "Engineering Drawing and Computer Graphics",
      "Mathematics I & II",
      "Physics",
      "Electrical Technology",
    ],
  },
  {
    semester: "Semester 3",
    courses: [
      "Partial Differential Equations",
      "Transform Calculus",
      "Design and Analysis of Algorithms",
      "Economics",
    ],
  },
  {
    semester: "Semester 4",
    courses: [
      "Probability and Statistics",
      "Discrete Mathematics",
      "Numerical Solution of ODE & PDE",
      "Basic Electronics",
    ],
  },
  {
    semester: "Semester 5",
    courses: [
      "Object Oriented Systems Design",
      "Linear Algebra",
      "Computer Organisation and Architecture",
      "Real Analysis",
    ],
  },
  {
    semester: "Semester 6",
    courses: [
      "Advanced Numerical Techniques",
      "Modern Algebra",
      "Measure Theory and Integration",
      "Operations Research",
      "Switching and Finite Automata",
    ],
  },
  {
    semester: "Semester 7",
    courses: [
      "Systems Programming",
      "Functional Analysis",
      "Fluid Mechanics",
    ],
  },
  {
    semester: "Semester 8",
    courses: [
      "Theory of Operating Systems",
      "Integral Equations",
      "File Organization and Database Systems",
      "Stochastic Processes",
    ],
  },
  {
    semester: "Semester 9",
    courses: [
      "Graph Theory and Algorithms",
      "Project – Part I",
      "Summer Training",
    ],
  },
  {
    semester: "Semester 10",
    courses: [
      "Topology",
      "Project – Part II",
      "Comprehensive Viva",
    ],
  },
];
const ICONS: Record<string, any> = {
  sde: Briefcase,
  startup: Rocket,
  freelance: Laptop,
  collab: Handshake,
  photography: Camera,
  illustration: PenTool,
};

type InterestIcon = "code" | "photography" | "art" | "design";

interface InterestCardProps {
 icon: InterestIcon;
  label: string;
}

const INTEREST_ICONS: Record<InterestIcon, LucideIcon> = {
  code: Code2,
  photography: Camera,
  art: Palette,
  design: PenTool,
};
  

const OpenToContext = createContext<any>(null);

export default function AboutPage() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const certifications = [...metaCertifications, ...googleCertifications];
    const loopedCertifications = [...certifications, ...certifications];
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSemester, setActiveSemester] = useState(0);
    const panelRef = useRef<HTMLDivElement>(null);
const [rotate, setRotate] = useState({ x: 0, y: 0 });


    useEffect(() => {
  const container = carouselRef.current;
  if (!container) return;

  let rafId: number;
  const speed = 0.6; // slightly faster so it's noticeable

  const animate = () => {
    if (!container) return;

    container.scrollLeft += speed;

    // Reset seamlessly at halfway point
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }

    rafId = requestAnimationFrame(animate);
  };

  rafId = requestAnimationFrame(animate);

  const stop = () => cancelAnimationFrame(rafId);
  const start = () => (rafId = requestAnimationFrame(animate));

  container.addEventListener("mouseenter", stop);
  container.addEventListener("mouseleave", start);

  return () => {
    cancelAnimationFrame(rafId);
    container.removeEventListener("mouseenter", stop);
    container.removeEventListener("mouseleave", start);
  };
}, []);

useEffect(() => {
  const container = carouselRef.current;
  if (!container) return;

  const updateCenter = () => {
    const cards = Array.from(
      container.querySelectorAll("[data-cert-card]")
    ) as HTMLElement[];

    const containerCenter =
      container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter =
        card.offsetLeft + card.clientWidth / 2;

      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  updateCenter();
  container.addEventListener("scroll", updateCenter);

  return () => container.removeEventListener("scroll", updateCenter);
}, []);


const handleMouseMove = (e: React.MouseEvent) => {
  const el = panelRef.current;
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 25;
  const rotateY = (centerX - x) / 25;

  setRotate({ x: rotateX, y: rotateY });
};

const resetParallax = () => {
  setRotate({ x: 0, y: 0 });
};
  
  return (
      <OpenToProvider>
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <ParallaxBackground />

      {/* HERO */}
  <section className="relative py-20 sm:py-28 md:py-32 px-5 sm:px-6 overflow-hidden">
  <div className="max-w-6xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        relative
        rounded-3xl
        border border-white/10
        bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent
        backdrop-blur-xl
        p-7 sm:p-10 md:p-16
        shadow-[0_40px_120px_rgba(0,0,0,0.75)]
      "
    >

      {/* Glow */}
      <motion.div
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.04, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,180,0,0.18),transparent_60%)]
          pointer-events-none
        "
      />

      {/* Sweep */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="
          absolute inset-y-0 w-1/2
          bg-gradient-to-r from-transparent via-white/[0.05] to-transparent
          blur-2xl
          pointer-events-none
        "
      />

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* LEFT */}
        <div className="max-w-xl">

          <p className="text-[10px] sm:text-xs tracking-[0.45em] text-accent mb-4 sm:mb-6">
            ABOUT ME
          </p>

          <h1 className="
            text-3xl sm:text-4xl md:text-6xl
            font-bold
            tracking-tight
            leading-[1.05]
          ">
            The Person Behind <br />
            <span className="text-accent">the Pixels</span>
          </h1>

          <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-accent/70 to-transparent my-6 sm:my-8" />

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            I’m a full-stack developer, photographer, and illustrator based in Pune.
            With a foundation in Mathematics &amp; Computing from IIT Kharagpur, I bring
            an analytical approach to building thoughtful, high-performance digital systems.
            <br /><br />
            My work focuses on designing and engineering products that balance scalability,
            precision, and visual clarity — where robust architecture meets refined user experience.
            <br /><br />
            I believe truly exceptional technology feels effortless: technically sound,
            aesthetically disciplined, and intuitively usable.
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-accent" />
              Pune, India
            </div>

            <div className="flex items-center gap-2">
              <Briefcase size={14} className="text-accent" />
              Open to opportunities
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">

            <motion.a
              href="/Prathamesh_Raje_Ugale.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex justify-center items-center gap-2
                px-6 py-3
                rounded-full
                bg-accent text-black
                text-sm font-medium
                shadow-[0_12px_50px_rgba(255,180,0,0.35)]
              "
            >
              <Download size={16} />
              Download Resume
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex justify-center items-center gap-2
                px-6 py-3
                rounded-full
                bg-white/5 border border-white/10
                text-sm
                hover:border-accent/40
                hover:bg-white/10
                transition
              "
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </motion.a>

          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="relative max-w-sm mx-auto md:max-w-none"
        >
          <div className="
            absolute inset-0
            bg-accent/10
            blur-3xl
            opacity-40
          " />

          <div className="
            relative
            rounded-2xl
            overflow-hidden
            border border-white/10
            bg-white/5
            shadow-[0_25px_80px_rgba(0,0,0,0.65)]
          ">
            <img
              src="/photo1.png"
              alt="Profile"
              className="
                w-full h-full object-cover
                transition duration-700
                hover:scale-105
              "
            />
          </div>
        </motion.div>

      </div>
    </motion.div>

  </div>
</section>
{/* STORY */}
<section className="px-5 sm:px-6 py-6 sm:py-10 md:pb-14">
  <div className="max-w-6xl mx-auto">
    <div
      className="
        relative rounded-3xl border border-white/10
        bg-gradient-to-b from-white/[0.06] to-white/[0.01]
        backdrop-blur-xl
        px-5 sm:px-8
        py-5 sm:py-7
        overflow-hidden
      "
    >

      {/* Accent Rail */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent/40 to-transparent opacity-60 sm:opacity-100" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,180,0,0.12),transparent_60%)] pointer-events-none" />

      <p className="text-[10px] sm:text-xs tracking-[0.35em] text-accent mb-2">
        STORY
      </p>

      <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
        The Story Behind My Work
      </h2>

      <div className="w-14 sm:w-16 h-px bg-accent/60 mt-2 mb-4 sm:mb-5" />

      <div className="text-sm sm:text-[15px] text-gray-400 leading-relaxed space-y-3">
        <p>
          My journey into technology didn’t begin with code — it began with a deep
          curiosity for visuals, composition, and storytelling through photography.
        </p>

        <p>
          That same sensitivity to detail naturally evolved into interface design
          and frontend engineering, where aesthetics and performance intersect.
        </p>

        <p>
          Today, I design and build digital experiences that feel intuitive, fast,
          and visually refined — blending creative perspective with engineering precision.
        </p>
      </div>

    </div>
  </div>
</section>
<motion.section
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="px-5 sm:px-8 md:px-10 py-10 sm:py-12 pb-12 sm:pb-16"
>
  <div className="max-w-3xl mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 sm:gap-6 items-start text-center md:text-left">

      {/* Quote Symbol */}
      <span
        className="
          font-serif
          text-accent
          leading-none
          select-none
          text-[6rem] sm:text-[10rem] md:text-[15rem]
          opacity-80
          mb-[-1rem] md:mb-0
          md:translate-y-1
        "
      >
        &ldquo;
      </span>

      {/* Quote Text */}
      <div>
        <p
          className="
            font-serif
            text-xl sm:text-2xl md:text-4xl
            font-semibold
            tracking-tight
            leading-[1.2]
            text-white
          "
        >
          Behind every{" "}
          <span className="text-accent">simple</span>{" "}
          experience is complex{" "}
          <span className="text-accent">mathematics.</span>
        </p>

        <p
          className="
            mt-4 sm:mt-5
            text-[10px] sm:text-[11px]
            tracking-[0.35em]
            text-gray-500
            uppercase
          "
        >
          Philosophy
        </p>
      </div>

    </div>

  </div>
</motion.section>

      {/* SKILLS */}
     <section className="px-5 sm:px-6 py-6 sm:py-6">
  <div className="max-w-6xl mx-auto">
    <SectionTitle>Skills & Expertise</SectionTitle>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">

      <SkillCard
        title="Frontend"
        skills={[
          { name: "React / Next.js", level: 90 },
          { name: "TypeScript", level: 95 },
          { name: "Tailwind CSS", level: 92 },
          { name: "Framer Motion", level: 87 },
        ]}
      />

      <SkillCard
        title="Backend"
        skills={[
          { name: "Node.js", level: 90 },
          { name: "Next APIs", level: 88 },
          { name: "REST APIs", level: 92 },
          { name: "Express.js", level: 85 },
        ]}
      />

      <SkillCard
        title="Database & Tools"
        skills={[
          { name: "PostgreSQL", level: 91 },
          { name: "MongoDB", level: 90 },
          { name: "Docker", level: 82 },
          { name: "Git / CI", level: 96 },
        ]}
      />

    </div>
  </div>
</section>
      {/* EDUCATION */}
<section className="px-5 sm:px-6 pb-20 sm:pb-28 py-14 sm:py-16">
  <div className="max-w-6xl mx-auto">

    <SectionTitle>Education</SectionTitle>

    <div className="mt-8 sm:mt-10">

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="
          group relative overflow-hidden
          rounded-3xl border border-white/10
          bg-gradient-to-b from-white/[0.06] to-white/[0.01]
          backdrop-blur-xl
          px-5 sm:px-6
          py-5 sm:py-6
          hover:border-accent/30
          hover:shadow-[0_20px_80px_rgba(255,180,0,0.08)]
          transition
        "
      >

        {/* ✨ Animated Ambient Glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top,rgba(255,180,0,0.18),transparent_65%)]
            pointer-events-none
          "
        />

        <div className="flex items-start gap-4 sm:gap-5">

          {/* 🎓 IIT Logo */}
          <div className="relative">

            {/* Glow Ring */}
            <div className="
              absolute inset-0 rounded-xl
              bg-accent/20 blur-xl opacity-0
              group-hover:opacity-100
              transition duration-500
            " />

            <div className="
              relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl
              bg-white/[0.06]
              border border-white/10
              flex items-center justify-center
              p-2
            ">
              <img
                src="/kgplogo.png"
                alt="IIT Kharagpur"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">

            <h4 className="text-sm sm:text-base font-medium">
              Indian Institute of Technology, Kharagpur (IIT KGP)
            </h4>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Master of Science — MS, Mathematics and Computer Science
            </p>

            <p className="text-xs text-gray-600 mt-2">
              2019 — 2024
            </p>

          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* COURSEWORK */}
<section className="px-5 sm:px-6 pb-20 sm:pb-32">
  <div className="max-w-6xl mx-auto">

    <SectionTitle>Coursework</SectionTitle>

    <p className="text-xs sm:text-sm text-gray-500 mt-2">
      Mathematics and Computing (IIT KGP)
    </p>

    <div className="mt-8 sm:mt-10 relative">

      {/* Ambient Glow */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top,rgba(255,180,0,0.12),transparent_70%)]
        pointer-events-none
      " />

      <div className="
        relative rounded-3xl
        border border-white/10
        bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent
        backdrop-blur-2xl
        p-5 sm:p-6 md:p-8
        shadow-[0_30px_120px_rgba(0,0,0,0.65)]
      ">

        {/* Semester Selector */}
        <div className="relative flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-2">
          {semesters.map((sem, i) => (
            <button
              key={sem.semester}
              onClick={() => setActiveSemester(i)}
              className={`
                relative text-[11px] sm:text-xs whitespace-nowrap transition py-1
                ${activeSemester === i
                  ? "text-accent"
                  : "text-gray-500 hover:text-gray-300"}
              `}
            >
              {sem.semester}

              {activeSemester === i && (
                <motion.div
                  layoutId="semesterUnderline"
                  className="absolute left-0 right-0 -bottom-1 h-px bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-3 sm:my-4" />

        {/* Courses */}
        <motion.div
          key={activeSemester}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap gap-2"
        >
          {semesters[activeSemester].courses.map((course: string) => (
            <span
              key={course}
              className="
                text-[11px] sm:text-xs text-gray-300
                bg-white/[0.04]
                border border-white/10
                rounded-full px-3 py-1 sm:py-1.5
              "
            >
              {course}
            </span>
          ))}
        </motion.div>

      </div>
    </div>

  </div>
</section>

{/* CERTIFICATIONS */}
<section className="px-5 sm:px-6 pb-20 sm:pb-28">
  <div className="max-w-6xl mx-auto">

    <SectionTitle>Certifications</SectionTitle>

    <div className="relative mt-6 sm:mt-8">

      {/* LEFT FADE */}
      <div className="
        pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-16
        bg-gradient-to-r from-[#0a0a0a] to-transparent
        z-10
      " />

      {/* RIGHT FADE */}
      <div className="
        pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-16
        bg-gradient-to-l from-[#0a0a0a] to-transparent
        z-10
      " />

      {/* CAROUSEL */}
      <div
        ref={carouselRef}
        className="
          flex gap-3 sm:gap-5 overflow-x-auto pb-2 py-2 sm:py-3
          scrollbar-hide scroll-smooth px-3 sm:px-6 md:px-10
          snap-x snap-mandatory
        "
      >
        {loopedCertifications.map((cert, i) => (
          <motion.div
            key={`${cert.title}-${i}`}
            data-cert-card
            animate={{
              scale: activeIndex === i ? 1.02 : 0.97,
              opacity: activeIndex === i ? 1 : 0.5,
            }}
            transition={{ duration: 0.35 }}
            className="min-w-[260px] sm:min-w-[320px]"
          >
            <CertificationCard {...cert} active={activeIndex === i} />
          </motion.div>
        ))}
      </div>

    </div>
  </div>
</section>
      {/* TIMELINE */}
     <section className="px-5 sm:px-6 pb-20 sm:pb-32">
  <div className="max-w-6xl mx-auto">
    <SectionTitle>Journey & Experience</SectionTitle>

    <div className="mt-10 sm:mt-14 relative">

      {/* Vertical timeline spine */}
      <div className="
        absolute left-2 sm:left-4 top-0 bottom-0
        w-px bg-gradient-to-b
        from-transparent via-white/10 to-transparent
      " />

      <div className="space-y-6 sm:space-y-8">

        <TimelineCard
          year="Dec 2025 — Present"
          role="Founding Engineer"
          company="Senseible · Full-time"
          description="Building scalable full-stack systems and contributing to high-quality product development in a remote-first environment."
        />

        <TimelineCard
          year="Apr 2025 — Dec 2025"
          role="Full Stack Developer"
          company="Nexor Tech Systems · Full-time"
          description="Led end-to-end development of EaseFeedback.com, architecting a scalable React + Node.js application, designing secure REST APIs, and optimizing database performance."
        />

        <TimelineCard
          year="Jan 2025 — Apr 2025"
          role="Frontend Developer"
          company="Presana Systems Pvt. Ltd. · Full-time"
          description="Developed responsive UI systems and real-time dashboards using React + TypeScript, improving performance, usability, and cross-device consistency."
        />

        <TimelineCard
          year="May 2023 — Jul 2023"
          role="Software Developer Intern"
          company="Suzlon Group · Internship"
          description="Contributed to React-based web applications, built reusable UI components, and integrated RESTful APIs to support dynamic user workflows."
        />

      </div>
    </div>
  </div>
</section>
      <section className="px-5 sm:px-6 pb-20 sm:pb-28">
  <div className="max-w-6xl mx-auto">

    {/* Title */}
    <div className="mb-6 sm:mb-10">
      <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
        Why Work With Me
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 mt-1">
        What I bring beyond just code
      </p>
    </div>

    {/* Container */}
    <div className="
      rounded-3xl border border-white/10
      bg-white/[0.02]
      backdrop-blur-xl
      p-5 sm:p-6 md:p-8
    ">

      {/* Grid */}
      <div className="grid sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6">

        <WhyItem text="Design-focused engineering mindset" />
        <WhyItem text="Clean, maintainable code structure" />
        <WhyItem text="Strong attention to UI details" />
        <WhyItem text="Performance & responsiveness first" />
        <WhyItem text="Clear communication & reliability" />
        <WhyItem text="Built for scale, not just demos" />

      </div>
    </div>

  </div>
</section>
<section className="px-5 sm:px-6 pb-20 sm:pb-24">
  <div className="max-w-6xl mx-auto">

    {/* Title */}
    <div className="mb-6 sm:mb-10">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
        Currently Open To
      </h2>
      <p className="text-xs sm:text-sm text-amber-300/80 mt-1">
        Opportunities & collaborations
      </p>
    </div>

    {/* Glass Container */}
    <div className="
      relative rounded-3xl
      border border-white/10
      bg-white/[0.05]
      backdrop-blur-2xl
      shadow-[0_0_28px_rgba(255,215,0,0.08)]
      p-5 sm:p-6 md:p-8
    ">

      {/* Soft highlight */}
      <div className="
        absolute inset-0 rounded-3xl
        bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.08),transparent_60%)]
        pointer-events-none
      " />

      <div className="
        rounded-2xl
        bg-black/25
        border border-white/5
        p-4 sm:p-5 md:p-6
        shadow-inner shadow-white/[0.03]
      ">

        <div className="
          grid grid-cols-1 sm:grid-cols-2
          gap-x-4 sm:gap-x-6
          gap-y-2 sm:gap-y-3
        ">
          <OpenRow id="sde" text="Full-time SDE Roles" />
          <OpenRow id="startup" text="Startup Opportunities" />
          <OpenRow id="freelance" text="Freelance Projects" />
          <OpenRow id="collab" text="Product Collaborations" />
          <OpenRow id="photography" text="Photography" />
          <OpenRow id="illustration" text="Illustration" />
        </div>

      </div>
    </div>

  </div>
</section>

<section className="px-5 sm:px-6 pb-20 sm:pb-24">
  <div className="max-w-6xl mx-auto">

    {/* Title */}
    <div className="mb-5 sm:mb-8">
      <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-white">
        Interests & Passions
      </h2>
      <p className="text-xs sm:text-sm text-zinc-400 mt-1">
        Beyond engineering & product building
      </p>
    </div>

    {/* Glass Container */}
    <div className="
      relative rounded-3xl
      border border-white/10
      bg-white/[0.05]
      backdrop-blur-2xl
      shadow-[0_0_28px_rgba(255,215,0,0.08)]
      p-4 sm:p-5 md:p-6
      overflow-hidden
    ">

      {/* Soft golden highlight */}
      <div className="
        absolute inset-0 rounded-3xl
        bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.06),transparent_60%)]
        pointer-events-none
      " />

      {/* Grid */}
      <div className="
        grid grid-cols-2 sm:grid-cols-4
        gap-2 sm:gap-3 md:gap-4
      ">
        <InterestCard icon="code" label="Open Source" />
        <InterestCard icon="photography" label="Photography" />
        <InterestCard icon="art" label="Digital Art" />
        <InterestCard icon="design" label="UI/UX Design" />
      </div>

    </div>
  </div>
</section>
<section className="px-5 sm:px-6 pb-20 sm:pb-28">
  <div className="max-w-6xl mx-auto">

    <div className="
      relative rounded-3xl
      border border-white/10
      bg-gradient-to-b from-white/[0.06] to-white/[0.01]
      backdrop-blur-2xl
      px-4 sm:px-6 md:px-10
      py-8 sm:py-10 md:py-14
      overflow-hidden
    ">

      {/* Soft golden ambient glow */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.08),transparent_65%)]
        pointer-events-none
      " />

      {/* Subtle light sweep */}
      <div className="
        absolute inset-y-0 left-[-30%] w-[60%]
        bg-gradient-to-r from-transparent via-white/[0.05] to-transparent
        blur-2xl pointer-events-none
      " />

      <div className="relative flex flex-col items-center text-center">

        {/* Icon */}
        <div className="mb-3 sm:mb-4 text-amber-300/80">
          ✦
        </div>

        {/* Heading */}
        <h2 className="
          text-lg sm:text-xl md:text-2xl
          font-semibold
          tracking-tight
          text-white
        ">
          Let’s Build Something Great
        </h2>

        {/* Description */}
        <p className="
          mt-3
          text-xs sm:text-sm
          text-zinc-400
          max-w-xl
          leading-relaxed
        ">
          Whether you have a project in mind, need a creative collaborator,
          or just want to chat about technology — I’d love to hear from you.
        </p>

        {/* Button */}
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
          Start a Conversation

          <span className="
            sm:group-hover:translate-x-0.5
            sm:group-hover:-translate-y-0.5
            transition-transform
          ">
            ↗
          </span>
        </Link>

      </div>
    </div>

  </div>
</section>

      <Footer />
    </main>
    </OpenToProvider>
  );
}

/* ---------------- COMPONENTS ---------------- */

function SectionTitle({ children }: any) {
  return (
    <h2 className="text-xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

function StatCard({ value, label }: any) {
  return (
    <div className="
      rounded-2xl border border-white/10
      bg-gradient-to-b from-white/[0.05] to-white/[0.01]
      backdrop-blur-xl px-6 py-5 text-center
    ">
      <p className="text-2xl font-semibold text-accent">{value}</p>
      <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}



export function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; level: number }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="
        relative
        rounded-2xl
        border border-white/10
        bg-gradient-to-b from-white/[0.07] to-transparent
        backdrop-blur-xl
        p-6 sm:p-7
        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        hover:border-accent/30
        transition
      "
    >
      {/* Title */}
      <h3 className="text-lg font-medium text-white mb-5">
        {title}
      </h3>

      {/* Skills */}
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-gray-500">{skill.level}%</span>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-full bg-accent rounded-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Subtle glow */}
      <div className="
        absolute inset-0
        rounded-2xl
        bg-accent/5
        opacity-0
        hover:opacity-100
        transition
        pointer-events-none
      " />
    </motion.div>
  );
}
function TimelineCard({
  year,
  role,
  company,
  description,
}: {
  year: string;
  role: string;
  company: string;
  description: string;
}) {
  return (
    <div className="relative pl-12">

      {/* Timeline node */}
      <div className="
        absolute left-[14px] top-6
        w-2.5 h-2.5 rounded-full
        bg-amber-300
        shadow-[0_0_12px_rgba(255,215,0,0.6)]
      " />

      {/* Glass Card */}
      <div className="
        group rounded-3xl
        border border-white/10
        bg-gradient-to-b from-white/[0.06] to-white/[0.01]
        backdrop-blur-xl

        px-6 py-5

        hover:border-amber-300/30
        hover:shadow-[0_15px_60px_rgba(255,215,0,0.08)]

        transition-all duration-300
      ">
        {/* Year */}
        <p className="text-xs text-amber-300/80 mb-2 tracking-wide">
          {year}
        </p>

        {/* Role */}
        <h4 className="text-sm font-semibold text-white">
          {role}
        </h4>

        {/* Company */}
        <p className="text-xs text-zinc-500 mt-1">
          {company}
        </p>

        {/* Description */}
        <p className="
          text-sm text-zinc-400
          leading-relaxed mt-3
        ">
          {description}
        </p>
      </div>
    </div>
  );
}

function CertificationCard({
  title,
  issuer,
  date,
  credential,
  href,
  logo,
  active,
}: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative block h-full
        rounded-3xl border border-white/10
        bg-gradient-to-b from-white/[0.06] to-white/[0.01]
        backdrop-blur-xl
        p-5 transition

        ${active ? "border-accent/40 shadow-[0_20px_90px_rgba(255,180,0,0.18)]" : ""}
      `}
    >

      {/* Glow */}
      <div className={`
        absolute inset-0
        bg-[radial-gradient(circle_at_top,rgba(255,180,0,0.18),transparent_1%)]
        transition duration-500 pointer-events-none

        ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
      `} />

      <div className="flex items-start gap-4">

        <div className="
          w-12 h-12 rounded-xl
          bg-white/[0.06]
          border border-white/10
          flex items-center justify-center
          p-2
        ">
          <img
            src={logo}
            alt={issuer}
            className="w-8 h-8 object-contain"
          />
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-medium leading-snug">
            {title}
          </h4>

          <p className="text-xs text-gray-500 mt-1">{issuer}</p>
          <p className="text-xs text-gray-600 mt-2">{date}</p>
          <p className="text-xs text-gray-500 mt-1">{credential}</p>

          <div className="mt-3 text-xs text-accent">
            Show credential →
          </div>
        </div>
      </div>
    </a>
  );
}

function SemesterBlock({ semester, courses }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="
      rounded-2xl border border-white/10
      bg-gradient-to-b from-white/[0.05] to-white/[0.01]
      backdrop-blur-xl
    ">
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between
          px-5 py-4 text-sm
        "
      >
        <span>{semester}</span>
        <span className="text-accent">
          {open ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-5 pb-5 grid sm:grid-cols-2 md:grid-cols-3 gap-3"
          >
            {courses.map((course: string) => (
              <div
                key={course}
                className="
                  text-xs text-gray-400
                  bg-white/[0.03]
                  border border-white/5
                  rounded-xl px-3 py-2
                "
              >
                {course}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CourseChip({ label }: any) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.03 }}
      className="
        text-xs text-gray-300
        bg-white/[0.04]
        border border-white/10
        rounded-full px-3 py-1.5
        hover:border-accent/30
        hover:text-white
        transition
      "
    >
      {label}
    </motion.div>
  );
}

function MathQuote() {
  return (
    <div
      className="
        relative rounded-3xl
        border border-white/10
        bg-gradient-to-b from-white/[0.05] to-white/[0.01]
        backdrop-blur-xl
        px-8 py-7
        overflow-hidden
      "
    >
      {/* Subtle Ambient Glow */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top_left,rgba(255,180,0,0.10),transparent_60%)]
        pointer-events-none
      " />

      <blockquote className="relative">
        <p className="
          text-lg sm:text-xl
          text-gray-200
          leading-relaxed
          font-medium
        ">
          Behind every <span className="text-accent">“simple”</span> experience  
          is complex mathematics.
        </p>

        <footer className="
          mt-4 text-xs text-gray-500
          tracking-widest uppercase
        ">
          Philosophy
        </footer>
      </blockquote>
    </div>
  );
}
function WhyItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent/70" />
      <p className="text-sm text-gray-300 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function OpenRow({ id, text }: { id: string; text: string }) {
  const { openModal } = useOpenTo();
  const Icon = ICONS[id];

  return (
    <button
      onClick={() => openModal(id)}
      className="
        group w-full
        flex items-center justify-between

        px-3 sm:px-4 md:px-5
        py-3 sm:py-4 md:py-5

        rounded-xl
        transition-all duration-300

        hover:bg-amber-400/[0.10]
        sm:hover:shadow-[0_0_25px_rgba(255,215,0,0.18)]

        active:scale-[0.99]
      "
    >
      <div className="flex items-center gap-2 sm:gap-3">

        {Icon && (
          <Icon
            className="
              w-3.5 h-3.5 sm:w-4 sm:h-4
              text-amber-300/70
              group-hover:text-amber-200
              transition-colors
            "
          />
        )}

        <span
          className="
            text-sm sm:text-base
            font-medium
            text-zinc-100
            leading-snug

            group-hover:text-white
            transition-colors
          "
        >
          {text}
        </span>
      </div>

      <span className="
        text-amber-300/70
        group-hover:text-amber-200

        sm:group-hover:translate-x-1
        sm:group-hover:-translate-y-1

        transition-all duration-300
      ">
        ↗
      </span>
    </button>
  );
}

export function OpenToProvider({ children }: any) {
  const [active, setActive] = useState<string | null>(null);

  const openModal = (id: string) => setActive(id);
  const closeModal = () => setActive(null);

  return (
    <OpenToContext.Provider value={{ active, openModal, closeModal }}>
      {children}
      <OpenToModal />
    </OpenToContext.Provider>
  );
}


export const useOpenTo = () => useContext(OpenToContext);

function OpenToModal() {
  const { active, closeModal } = useOpenTo();
  if (!active) return null;

  const content: any = {
    sde: {
      title: "Full-time SDE Roles",
      subtitle: "Open to impactful engineering opportunities",
      description:
        "Open to software engineering roles where I can contribute to building scalable, high-quality products.",
      sections: [
        {
          label: "Focus Areas",
          items: [
            "Backend / API systems",
            "Full-stack product development",
            "Performance & scalability",
            "AI-integrated applications",
          ],
        },
        {
          label: "Preferred Environment",
          items: [
            "Product-focused teams",
            "Strong engineering culture",
            "Ownership & autonomy",
            "Remote / flexible-friendly",
          ],
        },
      ],
      tags: ["Backend", "Full-stack", "Scalability", "AI Products"],
    },

    startup: {
      title: "Startup Opportunities",
      subtitle: "Early-stage & ambitious teams",
      description:
        "Interested in working with startups building meaningful, ambitious products.",
      sections: [
        {
          label: "Interested In",
          items: [
            "Founding / early engineering roles",
            "0 → 1 product journeys",
            "High ownership environments",
          ],
        },
      ],
      tags: ["Startups", "0→1", "Product Engineering"],
    },

    freelance: {
      title: "Freelance Projects",
      subtitle: "Selective collaborations",
      description:
        "Available for select freelance projects involving UI, web apps, and creative tech.",
      sections: [
        {
          label: "Project Types",
          items: [
            "Web applications",
            "UI / UX builds",
            "Interactive experiences",
          ],
        },
      ],
      tags: ["Freelance", "UI/UX", "Web Apps"],
    },

    collab: {
      title: "Product Collaborations",
      subtitle: "Co-building innovative ideas",
      description:
        "Open to collaborating on innovative digital products and ideas.",
      sections: [
        {
          label: "Collaboration Style",
          items: [
            "Co-building products",
            "Technical partnerships",
            "Experimental ideas",
          ],
        },
      ],
      tags: ["Collaboration", "Products", "Innovation"],
    },
    photography: {
  title: "Photography",
  subtitle: "Visual storytelling & aesthetics",
  description:
    "Passionate about capturing cinematic moments, moods, and visual narratives through photography.",
  sections: [
    {
      label: "Focus Areas",
      items: [
        "Portrait & lifestyle",
        "Travel & landscapes",
        "Cinematic compositions",
        "Light & mood exploration",
      ],
    },
    {
      label: "Style",
      items: [
        "Moody & atmospheric",
        "Minimal & expressive",
        "Story-driven frames",
      ],
    },
  ],
  tags: ["Photography", "Portraits", "Travel", "Cinematic"],
},

illustration: {
  title: "Illustration",
  subtitle: "Conceptual & artistic expression",
  description:
    "Exploring ideas, emotions, and concepts through digital and creative illustrations.",
  sections: [
    {
      label: "Themes",
      items: [
        "Conceptual art",
        "Futuristic & surreal",
        "Character & mood studies",
      ],
    },
    {
      label: "Medium",
      items: [
        "Digital illustration",
        "Experimental styles",
      ],
    },
  ],
  tags: ["Illustration", "Digital Art", "Conceptual", "Creative"],
},
  };

  const item = content[active];
  if (!item) return null;

  return (
    <div className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/70 backdrop-blur-sm
    ">
      <div className="
        relative w-full max-w-lg
        rounded-3xl
        border border-white/10
        bg-white/[0.06]
        backdrop-blur-2xl
        shadow-[0_0_35px_rgba(255,215,0,0.10)]
        p-6 sm:p-7
      ">
        {/* Golden luxury highlight */}
        <div className="
          absolute inset-0 rounded-3xl
          bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.10),transparent_60%)]
          pointer-events-none
        " />
         <button
    onClick={closeModal}
    className="
      absolute top-4 right-4
      p-1.5 rounded-lg

      text-zinc-500
      hover:text-white
      hover:bg-white/[0.06]

      transition-all duration-200
    "
  >
    <X className="w-4 h-4" />
  </button>

        <div className="relative">

          {/* Header */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-sm text-amber-300/80 mt-1">
              {item.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-300 leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Sections */}
          <div className="space-y-4">
            {item.sections?.map((section: any) => (
              <div key={section.label}>
                <div className="text-xs uppercase tracking-wide text-zinc-500 mb-2">
                  {section.label}
                </div>
                <ul className="text-sm text-zinc-300 space-y-1">
                  {section.items.map((line: string) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tags */}
          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-5">
              {item.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="
                    text-xs px-2 py-1
                    rounded-md
                    bg-white/5
                    text-zinc-400
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <button
            onClick={closeModal}
            className="
              mt-6 text-sm
              text-amber-300/90
              hover:text-amber-200
              transition-colors
            "
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}
function OpenPill({ label }: { label: string }) {
  return (
    <div
      className="
        px-4 py-2 rounded-full
        bg-white/[0.04]
        border border-white/10
        text-sm text-gray-300
        hover:border-accent/30
        hover:text-white
        transition-all duration-200
      "
    >
      {label}
    </div>
  );
}

export function InterestCard({ icon, label }: InterestCardProps) {
  const Icon = INTEREST_ICONS[icon];

  return (
    <div
      className="
        group rounded-2xl
        border border-white/5
        bg-black/25
        backdrop-blur-xl

        px-4 py-4
        sm:px-5 sm:py-5

        flex flex-col items-center justify-center
        text-center

        hover:bg-white/[0.04]
        hover:border-white/10
        hover:shadow-[0_0_14px_rgba(255,215,0,0.10)]

        transition-all duration-300
      "
    >
      <Icon
        className="
          w-5 h-5 mb-2
          text-amber-300/70
          group-hover:text-amber-200
          transition-colors
        "
      />

      <span
        className="
          text-sm font-medium
          text-zinc-200
          group-hover:text-white
          transition-colors
        "
      >
        {label}
      </span>
    </div>
  );
}
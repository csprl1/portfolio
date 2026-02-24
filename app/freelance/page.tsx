"use client";

import { motion , AnimatePresence} from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Camera,
  Palette,
  Check,
  ArrowUpRight,
  Sparkles,
  MessageSquare, FileText, Rocket 
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

/* ---------------- DATA ---------------- */

import { ChevronRight } from "lucide-react";

const faqs = [
  {
    q: "What’s your typical turnaround time?",
    a: "Turnaround time depends on project scope and feedback cycles. Web projects typically take 2–5 weeks. Photography is delivered within 5–10 business days. Design and illustration projects usually take 1–3 weeks.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes. I provide ongoing support for website updates, performance improvements, and content changes. Maintenance plans start at ₹3,000 per month depending on requirements.",
  },
  {
    q: "Can I bundle multiple services?",
    a: "Absolutely. Many clients combine services like web development, design, and photography for a cohesive brand experience. Bundled projects receive preferential pricing.",
  },
  {
    q: "What’s your revision policy?",
    a: "All projects include structured revision rounds to ensure alignment. I work iteratively and collaboratively so feedback is incorporated naturally throughout the project.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. I’m open to working with both Indian and international clients. Communication is async-friendly, with flexible scheduling for meetings when needed.",
  },
];

export const services = [
  {
    icon: Code2,
    title: "Web Development",
    tagline: "Performant, scalable, pixel-perfect.",
    desc: "From landing pages to full-stack SaaS platforms — I build fast, accessible, and beautifully crafted web experiences that convert visitors into customers.",
    points: [
      "Custom React / Next.js applications",
      "E-commerce & SaaS platforms",
      "CMS integration (Sanity, Strapi, WordPress)",
      "API design & backend architecture",
      "Performance optimization & Core Web Vitals",
      "SEO & analytics implementation",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    price: "₹25,000",
    popular: true,
  },
  {
    icon: Camera,
    title: "Photography",
    tagline: "Stories told through light.",
    desc: "Professional photography for brands, products, and events. Every frame is intentional — designed to elevate your visual identity and tell your story.",
    points: [
      "Product & lifestyle photography",
      "Brand & corporate headshots",
      "Event & conference coverage",
      "Photo editing & retouching",
      "Social media content packages",
      "Print-ready deliverables",
    ],
    tech: ["Sony Alpha", "Lightroom", "Capture One", "Studio Lighting"],
    price: "₹5,000" ,
  },
  {
    icon: Palette,
    title: "Illustration & Design",
    tagline: "Ideas made visual.",
    desc: "Custom illustrations, brand identities, and UI/UX design that set you apart. From concept sketches to polished deliverables that resonate with your audience.",
    points: [
      "Brand identity & logo design",
      "Custom digital illustrations",
      "UI/UX design & prototyping",
      "Icon sets & design systems",
      "Print & packaging design",
      "Motion graphics & animation",
    ],
    tech: ["Figma", "Illustrator", "Procreate", "After Effects"],
    price: "₹8,000",
  },
];
export const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "We discuss your vision, goals, audience, and constraints. I ask the right questions so nothing gets missed.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Proposal",
    desc: "A clear scope, timeline, and transparent pricing. No surprises — you know exactly what you're getting.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Creation",
    desc: "I build iteratively with regular check-ins. You see progress, provide feedback, and stay in control.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Polished deliverables, documentation, and handoff. Plus 30 days of post-launch support included.",
    icon: Rocket,
  },
];

import { Zap, ShieldCheck, Clock3, Users } from "lucide-react";

export const features = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Most projects delivered in 2–6 weeks.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    desc: "Unlimited revisions until you're happy.",
  },
  {
    icon: Clock3,
    title: "Always Available",
    desc: "Responsive communication, no ghosting.",
  },
  {
    icon: Users,
    title: "Client-First",
    desc: "Your goals drive every decision I make.",
  },
];


/* ---------------- PAGE ---------------- */

export default function FreelancePage() {
    const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActive(active === i ? null : i);
  };
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <ParallaxBackground />

      {/* HERO */}
     <section className="relative py-24 sm:py-32 px-5 sm:px-6 overflow-hidden">
  {/* Background glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 blur-[140px]" />
  </div>

  <div className="max-w-6xl mx-auto">
    
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-accent tracking-[0.35em] text-[10px] sm:text-xs mb-4"
    >
      FREELANCE SERVICES
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
    >
      Let’s build something{" "}
      <span className="text-accent">remarkable</span>
    </motion.h1>

    <motion.div
      initial={{ opacity: 0, scaleX: 0.6 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay: 0.15, duration: 0.6 }}
      className="origin-left w-24 h-px bg-gradient-to-r from-accent/70 to-transparent my-6 sm:my-10"
    />

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25 }}
      className="text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed"
    >
      I help startups, agencies, and brands craft exceptional digital
      experiences through <span className="text-white/80">code</span>,{" "}
      <span className="text-white/80">camera</span>, and{" "}
      <span className="text-white/80">canvas</span>.  
      Quality work, transparent process, real results.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="flex flex-wrap gap-3 mt-10"
    >
      <Link
        href="/contact"
        className="group h-11 px-6 rounded-full bg-accent text-black text-sm font-medium inline-flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition"
      >
        Start a Project
        <ArrowUpRight
          size={16}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
        />
      </Link>

      <Link
       href="#services"
        className="h-11 px-6 rounded-full border border-white/10 bg-white/5 text-sm inline-flex items-center hover:bg-white/10 hover:border-white/20 transition"
      >
        View Services
      </Link>

      
    </motion.div>
    

  </div>
</section>



      {/* SERVICES */}
     <section  id="services" className="px-5 sm:px-6 pb-20 sm:pb-28">
  <div className="max-w-6xl mx-auto">

    {/* SECTION LABEL */}
    <p className="text-accent tracking-[0.3em] text-[10px] sm:text-xs mb-3">
      WHAT I OFFER
    </p>

    {/* TITLE */}
    <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
      Services
    </h2>

    {/* SUBTEXT */}
    <p className="text-sm text-gray-400 mb-10 max-w-2xl">
      Three disciplines, one standard of excellence. Every project gets my full attention and craftsmanship.
    </p>

    <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
      {services.map((service, i) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.015 }}
            className="
              relative
              rounded-[26px]
              bg-white/[0.02]
              border border-white/10
              backdrop-blur-xl
              p-6 sm:p-7
              shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              hover:border-accent/30
              transition
            "
          >

            {/* MOST POPULAR BADGE */}
            {service.popular && (
              <span className="
                absolute -top-3 left-6
                text-[10px]
                px-3 py-1
                rounded-full
                bg-accent text-black
                font-medium
                shadow
              ">
                Most Popular
              </span>
            )}

            {/* ICON */}
            <div className="mb-5">
              <div className="
                w-11 h-11
                rounded-xl
                bg-accent/10
                border border-accent/20
                flex items-center justify-center
              ">
                <Icon size={18} className="text-accent" />
              </div>
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-base mb-1">
              {service.title}
            </h3>

            {/* TAGLINE */}
            <p className="text-accent text-xs mb-3">
              {service.tagline}
            </p>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              {service.desc}
            </p>

            {/* FEATURES */}
            <ul className="space-y-2.5 text-sm text-gray-300 mb-6">
              {service.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <Check size={14} className="text-accent mt-[2px]" />
                  {point}
                </li>
              ))}
            </ul>

            {/* TECH PILLS */}
            <div className="flex flex-wrap gap-2 mb-6">
              {service.tech?.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-[11px]
                    px-3 py-1
                    rounded-full
                    bg-white/5
                    border border-white/10
                    text-gray-400
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* DIVIDER */}
            <div className="h-px bg-white/5 mb-5" />

            {/* PRICE ROW */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-500 tracking-wider">
                  STARTING AT
                </p>
                <p className="text-xl font-semibold text-accent">
                  {service.price}
                </p>
                 <p className="text-[11px] text-gray-500 mt-1">
      Custom quotes available
    </p>
              </div>
              

          <Link
  href="/contact"
  className="
    group
    text-accent text-sm
    hover:tracking-wide
    transition
    flex items-center gap-1
  "
>
  Get Quote
  <ArrowUpRight
    size={14}
    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
  />
</Link>
            </div>

          </motion.div>
        );
      })}
    </div>
  </div>
  <section className="px-5 sm:px-6 pt-6">
  <div className="max-w-6xl mx-auto text-center">

    <p className="
      inline-flex items-center gap-2
      text-xs text-accent
      bg-accent/10
      border border-accent/20
      px-4 py-2
      rounded-full
    ">
      ● Currently accepting projects for April / May
    </p>

  </div>
</section>
</section>

<section className="px-5 sm:px-6 py-20 sm:py-28">
  <div className="max-w-6xl mx-auto text-center">

    {/* SECTION LABEL */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-accent tracking-[0.35em] text-[10px] sm:text-xs mb-4"
    >
      WHY WORK WITH ME
    </motion.p>

    {/* HEADLINE */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-4xl font-bold mb-16"
    >
      Built on trust & <span className="text-accent">craft.</span>
    </motion.h2>

    {/* FEATURES */}
    <div className="grid md:grid-cols-4 gap-10 sm:gap-12">
      {features.map((feature, i) => {
        const Icon = feature.icon;

        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >

            {/* ICON TILE */}
            <div className="
              w-12 h-12
              rounded-xl
              bg-[#1a1a1a]
              border border-white/10
              flex items-center justify-center
              mb-4
              shadow-[0_0_30px_rgba(255,180,0,0.12)]
            ">
              <Icon size={18} className="text-accent" />
            </div>

            {/* TITLE */}
            <h3 className="text-sm font-semibold mb-1">
              {feature.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-xs text-gray-500 max-w-[170px]">
              {feature.desc}
            </p>

          </motion.div>
        );
      })}
    </div>

  </div>
</section>




      {/* PROCESS */}
 <section className="px-5 sm:px-6 py-20 sm:py-28">
  <div className="max-w-6xl mx-auto text-center sm:text-left">

    {/* SECTION LABEL */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-accent tracking-[0.35em] text-[10px] sm:text-xs mb-4"
    >
      HOW IT WORKS
    </motion.p>

    {/* HEADLINE */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-4xl font-bold mb-16 leading-tight"
    >
      A process that <span className="text-accent">respects your time.</span>
    </motion.h2>

    {/* TIMELINE ROW */}
    <div className="relative">

      <div className="absolute top-6 left-0 right-0 h-px bg-white/5 hidden md:block" />

      <div className="grid md:grid-cols-4 gap-10 sm:gap-12">
        {process.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="relative text-center sm:text-left"
            >

              {/* STEP */}
              <span className="text-[28px] font-semibold text-accent/20 tracking-wide">
                {item.step}
              </span>

              {/* ICON */}
              <div className="mt-2 mb-3 flex justify-center sm:justify-start">
                <div className="
                  w-11 h-11
                  rounded-xl
                  bg-[#1a1a1a]
                  border border-white/10
                  flex items-center justify-center
                  shadow-[0_0_25px_rgba(255,180,0,0.12)]
                ">
                  <Icon size={18} className="text-accent" />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-sm font-semibold mb-1">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-xs text-gray-500 leading-relaxed max-w-[220px] mx-auto sm:mx-0">
                {item.desc}
              </p>

            </motion.div>
          );
        })}
      </div>
    </div>

  </div>
</section>
<section className="relative px-5 sm:px-6 py-24 sm:py-32">


  <div className="max-w-6xl mx-auto text-center relative">

    {/* Label */}
    <p className="
      text-accent
      tracking-[0.35em]
      text-[11px] sm:text-xs
      mb-4
    ">
      STACK
    </p>

    {/* Title */}
    <h2 className="
      text-3xl sm:text-4xl
      font-semibold
      tracking-tight
      mb-5
    ">
      Tools & Technologies
    </h2>

    {/* Supporting Line */}
    <p className="
      text-sm text-gray-400
      mb-10
      max-w-xl mx-auto
    ">
      Modern technologies and creative tools I use to design, build, and refine digital experiences.
    </p>

    {/* Pills Container */}
    <div className="
      flex flex-wrap justify-center
      gap-3 sm:gap-4
    ">
      {[
  "React",
  "Next.js",
  "TypeScript",
  "WordPress",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Three.js",
  "WebGL",
  "AWS",
  "Vercel",
  "Render",

].map((item) => (
        <span
          key={item}
          className="
            text-xs text-gray-300

            px-4 py-2
            rounded-full

            bg-white/[0.03]
            border border-white/10
            backdrop-blur-xl

            hover:border-white/20
            hover:bg-white/[0.05]

            transition-all duration-300
          "
        >
          {item}
        </span>
      ))}
    </div>

  </div>
</section>

 <section className="relative px-5 sm:px-6 py-24 sm:py-32">


  <div className="max-w-5xl mx-auto relative">

    {/* HEADER */}
    <div className="text-center mb-14 sm:mb-20">
      <p className="text-accent tracking-[0.35em] text-[11px] sm:text-xs mb-4">
        FAQ
      </p>

      <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
        Common questions.
      </h2>

      <p className="text-sm text-gray-400 mt-4">
        Everything you might want to know before we start.
      </p>
    </div>

    {/* ACCORDION */}
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = active === i;

        return (
          <motion.div
            key={faq.q}
            layout
            className="
              group
              rounded-2xl sm:rounded-[26px]

              bg-white/[0.03]
              border border-white/10
              backdrop-blur-xl

              shadow-[0_10px_40px_rgba(0,0,0,0.55)]

              hover:border-white/20
              transition-all duration-300
              overflow-hidden
            "
          >

            {/* QUESTION */}
            <button
              onClick={() => toggle(i)}
              className="
                w-full
                flex items-center justify-between

                px-5 sm:px-7
                py-4 sm:py-5

                text-left
              "
            >
              <span className="
                text-sm sm:text-base
                font-medium
                text-white/90
                group-hover:text-white
                transition
              ">
                {faq.q}
              </span>

              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.25 }}
                className="
                  text-gray-500
                  group-hover:text-accent
                  transition
                "
              >
                <ChevronRight size={18} />
              </motion.div>
            </button>

            {/* ANSWER */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="
                    px-5 sm:px-7
                    pb-4 sm:pb-6
                  ">
                    <div className="h-px bg-white/5 mb-4" />

                    <p className="
                      text-sm
                      text-gray-400
                      leading-relaxed
                    ">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        );
      })}
    </div>

  </div>
</section>

      {/* CTA */}
      <section className="relative px-5 py-20 sm:px-6 pb-28">

  {/* Ambient Background Glow */}
  

  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="
      relative
      max-w-5xl mx-auto
      rounded-2xl sm:rounded-[30px]

      border border-white/10
      bg-white/[0.04]
      backdrop-blur-2xl

      p-10 sm:p-14
      text-center

      shadow-[0_30px_120px_rgba(0,0,0,0.7)]
    "
  >

    {/* Glass Highlight Layer */}
    <div className="
      absolute inset-0
      rounded-2xl sm:rounded-[30px]
      bg-gradient-to-b
      from-white/[0.14]
      via-transparent
      to-transparent
      opacity-40
      pointer-events-none
    " />
    <div className="
    absolute inset-0
    bg-[radial-gradient(circle_at_center,rgba(255,180,0,0.08),transparent_60%)]
    pointer-events-none
  " />

    {/* Optional Noise Texture */}
    <div className="
      absolute inset-0
      rounded-2xl sm:rounded-[30px]
      opacity-[0.035]
      mix-blend-overlay
      pointer-events-none
      bg-[url('/noise.png')]
    " />

    {/* Icon */}
    <div className="
      w-12 h-12
      mx-auto mb-6
      rounded-xl
      bg-accent/10
      flex items-center justify-center
      shadow-[0_0_30px_rgba(255,180,0,0.25)]
    ">
      <Sparkles className="text-accent" size={20} />
    </div>

    {/* Heading */}
    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
      Ready to get started?
    </h3>

    {/* Description */}
    <p className="
      text-white/50
      text-sm sm:text-base
      mb-10
      max-w-md mx-auto
      leading-relaxed
    ">
      Tell me about your project and let’s create something exceptional.
    </p>

    {/* CTA Button */}
    <Link
      href="/contact"
      className="
        group
        inline-flex items-center justify-center gap-2

        h-12 px-9
        rounded-full

        bg-accent
        text-black
        text-sm font-medium

        shadow-[0_10px_30px_rgba(255,180,0,0.35)]

        hover:shadow-[0_15px_45px_rgba(255,180,0,0.55)]
        hover:scale-[1.03]
        active:scale-[0.98]

        transition-all duration-300
      "
    >
      Let’s Talk
      <ArrowUpRight
        size={16}
        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
      />
    </Link>

  </motion.div>
</section>

      <Footer />
    </main>
  );
}
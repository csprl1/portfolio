"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Instagram } from "lucide-react";
import { Magnetic } from "../ui/Magnetic";

const exploreLinks = [
  { label: "Developer", href: "/developer" },
  { label: "Photography", href: "/photography" },
  { label: "Illustrations", href: "/illustrations" },
  { label: "Blog", href: "/blog" },
];

const connectLinks = [
  { label: "Freelancer", href: "/freelance" },
  { label: "About Me", href: "/about" },
  { label: "Get in Touch", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 sm:mt-40">

      {/* Top Divider Glow */}
      <div className="h-px w-full bg-gradient-to-r
        from-transparent via-accent/40 to-transparent opacity-60" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-3xl
            bg-white/[0.03]
            border border-white/10
            backdrop-blur-lg sm:backdrop-blur-2xl
            shadow-[0_20px_80px_rgba(0,0,0,0.6)]
            px-5 sm:px-8 py-6 sm:py-10"
        >

          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl blur-3xl
            bg-accent/10 opacity-30 sm:opacity-40 pointer-events-none" />

          <div className="glass-sweep pointer-events-none" />

          <div className="relative flex flex-col md:flex-row
            items-center justify-between gap-6 sm:gap-10">

            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-accent font-semibold text-lg sm:text-xl">
                {"<Prathamesh />"}
              </h3>

              <p className="text-[10px] sm:text-xs text-gray-500 mt-1.5 sm:mt-2 tracking-wide">
                © 2026 — Crafted with precision
              </p>
            </div>

            {/* Navigation Blocks */}
           <div className="grid grid-cols-2 gap-x-12 text-xs sm:text-sm">

  {/* EXPLORE */}
  <div>
    <p className="text-[10px] tracking-[0.35em] text-gray-500 mb-4">
      EXPLORE
    </p>

    <div className="flex flex-col space-y-2">
      {exploreLinks.map((link) => (
        <Magnetic key={link.label}>
          <Link
            href={link.href}
            className="text-gray-400 hover:text-accent
              transition relative group"
          >
            {link.label}

            <span className="absolute left-0 -bottom-1 h-px w-0
              bg-accent transition-all duration-300
              group-hover:w-full"
            />
          </Link>
        </Magnetic>
      ))}
    </div>
  </div>

  {/* CONNECT */}
  <div>
    <p className="text-[10px] tracking-[0.35em] text-gray-500 mb-4">
      CONNECT
    </p>

    <div className="flex flex-col space-y-2">
      {connectLinks.map((link) => (
        <Magnetic key={link.label}>
          <Link
            href={link.href}
            className="text-gray-400 hover:text-accent
              transition relative group"
          >
            {link.label}

            <span className="absolute left-0 -bottom-1 h-px w-0
              bg-accent transition-all duration-300
              group-hover:w-full"
            />
          </Link>
        </Magnetic>
      ))}
    </div>
  </div>

</div>

            {/* Social */}
            <div className="flex items-center gap-2 sm:gap-3">
              <SocialIcon href="https://github.com/csprl1" icon={Github} />
              <SocialIcon href="https://www.linkedin.com/in/prathamesh-ugale-1aa536138/" icon={Linkedin} />
              <SocialIcon href="https://instagram.com/sonurajeugale" icon={Instagram} />
              <SocialIcon href="mailto:sonurajeugale@gmail.com" icon={Mail} />
            </div>

          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon: Icon }: any) {
  return (
    <Magnetic>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full
          flex items-center justify-center
          bg-white/[0.04]
          border border-white/10
          text-gray-400 hover:text-accent
          hover:border-accent/40
          transition relative overflow-hidden group"
      >
        <Icon size={15} className="sm:w-4 sm:h-4" />

        <span className="absolute inset-0 opacity-0 group-hover:opacity-20
          blur-xl bg-accent transition" />
      </motion.a>
    </Magnetic>
  );
}
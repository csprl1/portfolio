"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MagneticLock } from "../ui/MagneticLock";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Developer", href: "/developer" },
  { label: "Photography", href: "/photography" },
  { label: "Illustrations", href: "/illustrations" },
  { label: "Blog", href: "/blog" },
  { label: "Freelancer", href: "/freelance" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ✨ Hide on scroll */
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.header
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 inset-x-0 z-50 pt-[env(safe-area-inset-top)]"
        >
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          className="
  mt-3 md:mt-6
  fixed left-1/2 -translate-x-1/2
  w-[calc(100%-20px)]
  sm:w-[calc(100%-28px)]
  md:w-full md:max-w-4xl
  lg:max-w-6xl
  px-2.5 py-1.5
  md:px-3 md:py-2
  flex items-center
  rounded-full
  backdrop-blur-md md:backdrop-blur-xl
  bg-white/[0.04]
  border border-white/10
  shadow-lg md:shadow-[0_8px_40px_rgba(0,0,0,0.6)]
  relative overflow-hidden
"
          >

            <div className="flex items-center justify-between w-full">
            {/* ✨ Logo */}
            <MagneticLock>
              <Link
                href="/"
                className="px-3 md:px-4 text-accent font-semibold text-base md:text-lg"
              >
                {"<Prathamesh />"}
              </Link>
            </MagneticLock>

            {/* ✨ Desktop Nav (UNCHANGED) */}
            <div className="hidden md:flex relative">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href={item.href}
                      className="relative px-4 py-1.5 text-sm text-gray-400 hover:text-white transition group"
                    >
                      {active && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 rounded-full bg-accent"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      <span
                        className={`relative z-10 ${
                          active ? "text-black font-medium" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* ✨ Right Controls */}
            <div className="flex items-center">
              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden h-11 w-11 flex items-center justify-center text-gray-400 hover:text-white"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
            </div>

            {/* ✨ Glow (now clipped safely) */}
            <motion.div
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-full blur-2xl bg-accent/10 pointer-events-none"
            />
          </motion.nav>

          {/* ✨ Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="md:hidden mx-3 mt-2 rounded-2xl backdrop-blur-xl bg-black/50 border border-white/10 overflow-hidden"
              >
                <div className="flex flex-col">
                  {navItems.map((item) => {
                    const active = pathname === item.href;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`px-5 py-3.5 text-sm transition ${
                          active
                            ? "text-accent bg-white/5"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
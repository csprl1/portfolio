"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const artworks = [
  {
    category: "ARCHITECTURE",
    title: "IIT KGP Main Building",
    image: "/art/photo_12.jpg",
  },
  {
    category: "SLICE OF LIFE",
    title: "LOFI CAFE",
    image: "/art/photo_2.jpg",
  },
  {
    category: "FANTASY",
    title: "Dreamscape",
    image: "/art/photo_5.jpg",
  },
  {
    category: "CHARACTERS",
    title: "One Piece",
    image: "/art/photo_3.jpg",
  },
];

export function IllustrationSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-accent tracking-[0.3em] text-xs mb-4">
            03 — ILLUSTRATIONS
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Art & <span className="text-accent">Imagination</span>
          </h2>

          <div className="w-16 h-px bg-accent/40 my-6" />

          <p className="text-gray-400 max-w-xl text-sm sm:text-base">
            Bringing ideas to life through digital art, character design,
            and visual storytelling.
          </p>
        </motion.div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {artworks.map((art) => (
            <motion.div
              key={art.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden
                bg-white/[0.02]
                border border-white/10
                backdrop-blur-xl
                shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            >
              {/* 🎨 Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  width={800}
                  height={600}
                  priority={art.title === "Character Design"}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="/art/blur.jpg"
                  className="w-full h-[260px] sm:h-[300px] object-cover
                    group-hover:scale-105 transition duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t
                  from-black/70 via-black/10 to-transparent"
                />
              </div>

              {/* Text */}
              <div className="absolute bottom-5 left-5">
                <p className="text-xs tracking-[0.25em] text-accent/70 mb-1">
                  {art.category}
                </p>

                <h3 className="text-white font-medium text-lg">
                  {art.title}
                </h3>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0
                group-hover:opacity-10 blur-xl bg-accent/30 transition"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/illustrations"
              prefetch
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
              VIEW ALL ARTWORK ↗
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
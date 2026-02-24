"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const photos = [
  {
    category: "LANDSCAPE",
    title: "Under Monsoon Skies",
    image: "/photos/photo_6.jpg",
  },
  {
    category: "STREET",
    title: "Hidden Cafe",
    image: "/photos/photo_26.jpg",
  },
  {
    category: "SPORTS",
    title: "Beautiful Stadium",
    image: "/photos/photo_31.jpg",
  },
  {
    category: "ANIMALS",
    title: "Dog",
    image: "/photos/photo_25.jpg",
  },
];

export function PhotographySection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-accent tracking-[0.3em] text-xs mb-4">
            02 — PHOTOGRAPHY
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Through the <span className="text-accent">Lens</span>
          </h2>

          <div className="w-16 h-px bg-accent/40 my-6" />

          <p className="text-gray-400 max-w-xl text-sm sm:text-base">
            Capturing fleeting moments and turning them into lasting visual stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {photos.map((photo) => (
            <motion.div
              key={photo.title}
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
              <div className="relative overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  width={800}
                  height={600}
                  priority={photo.title === "Golden Hour"}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="/photos/blur.jpg"
                  className="w-full h-[260px] sm:h-[300px] object-cover
                    group-hover:scale-105 transition duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t
                  from-black/70 via-black/10 to-transparent"
                />
              </div>

              <div className="absolute bottom-5 left-5">
                <p className="text-xs tracking-[0.25em] text-accent/70 mb-1">
                  {photo.category}
                </p>

                <h3 className="text-white font-medium text-lg">
                  {photo.title}
                </h3>
              </div>

              <div className="absolute inset-0 opacity-0
                group-hover:opacity-10 blur-xl bg-accent/30 transition"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/photography"
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
              VIEW ALL PHOTOS ↗
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
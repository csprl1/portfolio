"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    category: "LIFE",
    title: "Why I Left My Comfort Zone",
    excerpt:
      "A personal reflection on taking risks, embracing uncertainty, and finding growth in unexpected places.",
    date: "Feb 10, 2026",
  },
  {
    category: "THOUGHTS",
    title: "The Art of Balancing Code & Creativity",
    excerpt:
      "How I stay productive as a developer while nurturing my creative pursuits without burnout.",
    date: "Jan 22, 2026",
  },
  {
    category: "PHOTOGRAPHY",
    title: "Lessons From A Year of Photography",
    excerpt:
      "What daily shooting taught me about patience, composition, and perspective.",
    date: "Dec 15, 2025",
  },
];

export function BlogSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ✨ Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-accent tracking-[0.3em] text-xs mb-4">
            04 — BLOG
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Stories & <span className="text-accent">Thoughts</span>
          </h2>

          {/* Animated Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="origin-left w-16 h-px bg-accent/40 my-6"
          />

          <p className="text-gray-400 max-w-xl text-sm sm:text-base">
            Personal reflections on life, creativity, and the journey of building things.
          </p>
        </motion.div>

        {/* ✨ Posts */}
        <div className="space-y-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.09,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="group relative rounded-2xl
                bg-white/[0.025]
                border border-white/10
                backdrop-blur-xl
                px-6 py-5
                transition-all duration-300
                hover:border-accent/25
                hover:bg-white/[0.035]"
            >
              {/* Meta */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] tracking-[0.28em]
                  px-2.5 py-1 rounded-full
                  bg-accent/15 text-accent
                  border border-accent/25">
                  {post.category}
                </span>

                <span className="text-xs text-gray-500">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-medium transition-all duration-300
                group-hover:text-accent">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                {post.excerpt}
              </p>

              {/* ✨ Subtle Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0
                group-hover:opacity-10 blur-xl bg-accent/20 transition" />
            </motion.article>
          ))}
        </div>

        {/* ✨ CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <motion.div
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
>
  <Link
    href="/blog"
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
    READ ALL POSTS ↗
  </Link>
</motion.div>
        </motion.div>

      </div>
    </section>
  );
}
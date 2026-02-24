"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowUpRight,
  Heart,
  Share2,
  X,
} from "lucide-react";

type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  featured?: boolean;
  content?: string;
};

const categories = ["All", "Life", "Thoughts", "Photography", "Code", "Design"];

export default function BlogClient({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  /* ---------------- READING PROGRESS ---------------- */

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const height = el.scrollHeight - el.clientHeight;
      setProgress((scrolled / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- FILTER ---------------- */

  const filteredPosts = useMemo(() => {
    return activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  /* ---------------- MODAL BEHAVIOR ---------------- */

  useEffect(() => {
    document.body.style.overflow = activePost ? "hidden" : "auto";

    const handleKey = (e: KeyboardEvent) => {
      if (!activePost) return;

      if (e.key === "Escape") setActivePost(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activePost]);

  /* ---------------- LIKES (LOCAL STORAGE) ---------------- */

  useEffect(() => {
    const saved = localStorage.getItem("likedPosts");
    if (saved) setLiked(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("likedPosts", JSON.stringify(liked));
  }, [liked]);

  return (
    <>
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-accent z-[60] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      {/* FILTERS */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition ${
                activeCategory === cat
                  ? "bg-accent text-black"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* POSTS */}
     <section className="px-4 sm:px-6 pb-16 sm:pb-24">
  <div className="max-w-6xl mx-auto space-y-3 sm:space-y-4">
    {filteredPosts.map((post) => (
      <motion.article
        key={post.slug}
        onClick={() => setActivePost(post)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="
          group relative rounded-xl sm:rounded-2xl
          bg-gradient-to-b from-white/[0.04] to-white/[0.01]
          border border-white/10
          backdrop-blur-lg sm:backdrop-blur-xl
          px-4 sm:px-6 py-4 sm:py-5
          transition
          hover:border-accent/30
          cursor-pointer
        "
      >
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition bg-accent/5" />

        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div>
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-gray-500 mb-1.5 sm:mb-2">
              <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                {post.category}
              </span>

              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {post.date}
              </span>

              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-sm sm:text-base font-semibold mb-0.5 sm:mb-1">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-xs sm:text-sm text-gray-400 max-w-3xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <ArrowUpRight
            size={16}
            className="opacity-30 sm:opacity-40 group-hover:opacity-100 transition shrink-0"
          />
        </div>
      </motion.article>
    ))}
  </div>
</section>

      {/* MODAL */}
      <AnimatePresence>
  {activePost && (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 sm:bg-black/80 backdrop-blur-sm sm:backdrop-blur-md"
        onClick={() => setActivePost(null)}
      />

      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/5">
        <div
          className="h-full bg-accent transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)] pointer-events-none" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          relative w-full h-[100dvh] sm:h-[88vh]
          max-w-full sm:max-w-5xl
          rounded-none sm:rounded-3xl
          bg-gradient-to-b from-[#0f1115]/95 to-black/95
          backdrop-blur-lg sm:backdrop-blur-2xl
          border border-white/10
          shadow-[0_40px_120px_rgba(0,0,0,0.85)]
          overflow-hidden
        "
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-5 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-white/40">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 tracking-widest">
              {activePost.category.toUpperCase()}
            </span>

            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {activePost.date}
            </span>

            <span className="flex items-center gap-1">
              <Clock size={12} />
              {activePost.readTime}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3">
            <button
              onClick={() =>
                setLiked(prev => ({
                  ...prev,
                  [activePost.slug]: !prev[activePost.slug],
                }))
              }
              className="modal-icon"
            >
              <Heart
                size={16}
                className={
                  liked[activePost.slug]
                    ? "fill-red-500 text-red-500"
                    : "text-white/50"
                }
              />
            </button>

            <button
              onClick={() =>
                navigator.clipboard.writeText(window.location.href)
              }
              className="modal-icon"
            >
              <Share2 size={16} className="text-white/50" />
            </button>

            <button
              onClick={() => setActivePost(null)}
              className="modal-icon"
            >
              <X size={18} className="text-white/50" />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="h-full overflow-y-auto bg-gradient-to-b from-black/40 to-black modal-scrollbar">
          <div className="max-w-3xl mx-auto px-4 sm:px-10 py-8 sm:py-12">
            {/* Header */}
            <div className="mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-5xl font-semibold tracking-tight leading-tight mb-3 sm:mb-5">
                {activePost.title}
              </h2>

              <p className="text-white/40 text-sm sm:text-lg leading-relaxed max-w-2xl">
                {activePost.excerpt}
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 mb-10 sm:mb-16">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/10" />

              <div className="text-xs sm:text-sm leading-tight">
                <p className="text-white/85 font-medium">
                  Prathamesh Ugale
                </p>
                <p className="text-white/35 text-[10px] sm:text-xs">
                  Software Engineer · {activePost.date}
                </p>
              </div>
            </div>

            {/* Article */}
            <article className="prose prose-invert max-w-none
                               prose-p:text-white/70
                               prose-headings:text-white
                               prose-h2:mt-10 sm:prose-h2:mt-16
                               prose-pre:rounded-xl sm:prose-pre:rounded-2xl">
              {activePost.content?.split("\n").map((line, i) => {
                const trimmed = line.trim();

                if (trimmed.startsWith("## ")) {
                  return (
                    <h5
                      key={i}
                      className="text-lg sm:text-2xl font-semibold mt-8 sm:mt-10 mb-3 sm:mb-4"
                    >
                      {trimmed.replace("## ", "")}
                    </h5>
                  );
                }

                if (trimmed === "") {
                  return <div key={i} className="h-2 sm:h-3" />;
                }

                return (
                  <p key={i} className="text-white/70 leading-7 mb-2">
                    {line}
                  </p>
                );
              })}
            </article>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}

  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    viewport={{ once: true }}
    className="mt-24"
  />
</AnimatePresence>
<section className="px-4 sm:px-6 pb-20 sm:pb-32">
  <div className="mt-14 sm:mt-28">
    <div
      className="
        max-w-6xl mx-auto
        relative
        rounded-2xl sm:rounded-[28px]
        border border-white/10
        bg-gradient-to-b from-white/[0.06] to-white/[0.01]
        backdrop-blur-lg sm:backdrop-blur-2xl
        p-5 sm:p-14
        text-center
        shadow-[0_25px_90px_rgba(0,0,0,0.65)]
        overflow-hidden
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-70 sm:opacity-100 rounded-2xl sm:rounded-[28px]
                      bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]
                      pointer-events-none" />

      <div className="relative">
        <div className="mb-4 sm:mb-10">
          <h3 className="text-base sm:text-[22px] font-semibold text-white mb-1.5 sm:mb-3">
            Stay Updated
          </h3>

          <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
            Get notified when I publish new articles.
            No spam, just thoughtful updates.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="
              w-full
              h-11 sm:h-12
              rounded-lg sm:rounded-xl
              bg-black/60 sm:bg-black/50
              border border-white/10
              px-3.5 sm:px-4
              text-sm
              text-white/85
              placeholder:text-white/30
              outline-none
              focus:border-white/30
              focus:bg-black/75 sm:focus:bg-black/70
              transition-all duration-200
            "
          />

          <button
            className="
              w-full sm:w-auto
              h-11 sm:h-12
              px-5 sm:px-6
              rounded-lg sm:rounded-xl
              bg-accent
              text-black
              text-sm
              font-medium
              tracking-tight
              hover:scale-[1.02]
              active:scale-[0.97]
              transition-transform duration-150
              shadow-[0_6px_18px_rgba(0,0,0,0.35)]
            "
          >
            Subscribe
          </button>
        </div>

        <p className="text-white/30 text-[11px] sm:text-xs mt-3.5 sm:mt-6">
          Occasional updates. Unsubscribe anytime.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
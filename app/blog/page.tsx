import { getAllPosts } from "@/lib/posts";
import BlogClient from "./BlogClient";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

export const metadata = {
  title: "Blog & Insights",
  description:
    "Technical articles and insights on React, Next.js, UI/UX, performance optimisation, and modern web development by Prathamesh Ugale.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <ParallaxBackground />

      {/* HERO */}
     <section className="relative py-20 sm:py-28 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">
    <p className="text-accent tracking-[0.28em] sm:tracking-[0.35em] text-[10px] sm:text-xs mb-4 sm:mb-6">
      04 — BLOG
    </p>

    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
      Stories & <span className="text-accent">Thoughts</span>
    </h1>

    <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-accent/70 to-transparent my-6 sm:my-10" />

    <p className="mt-2 sm:mt-6 text-white/60 max-w-2xl text-sm sm:text-base leading-relaxed">
      Personal reflections on life, creativity, code, and the journey of
      building things.
    </p>
  </div>
</section>

      {/* FEATURED POSTS */}
      {featuredPosts.length > 0 && (
  <section className="px-4 sm:px-6 pb-10 sm:pb-16">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {featuredPosts.map((post) => (
        <article
          key={post.slug}
          className="group relative rounded-xl sm:rounded-2xl border border-white/10
                     bg-gradient-to-b from-white/[0.04] to-transparent
                     backdrop-blur-lg sm:backdrop-blur-xl
                     p-4 sm:p-6 transition-all duration-300
                     hover:border-accent/40 hover:shadow-[0_0_40px_rgba(255,170,0,0.08)]"
        >
          {/* Tags Row */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span
              className="text-[9px] sm:text-[10px] tracking-widest
                         px-2.5 sm:px-3 py-1 rounded-full
                         bg-accent/10 text-accent border border-accent/20"
            >
              {post.category}
            </span>

            <span
              className="text-[9px] sm:text-[10px] tracking-widest
                         px-2.5 sm:px-3 py-1 rounded-full
                         bg-white/5 text-white/50 border border-white/10"
            >
              FEATURED
            </span>
          </div>

          {/* Title */}
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-accent transition">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4 sm:mb-6">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-white/40">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
        </article>
      ))}
    </div>
  </section>
)}

      {/* ALL POSTS */}
      <BlogClient posts={posts} />
      

      <Footer />
    </main>
  );
}
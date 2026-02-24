// import { useState, useMemo, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Calendar,
//   Clock,
//   ArrowUpRight,
//   Heart, 
//   Share2,
//   X,
// } from "lucide-react";
// import { getAllPosts } from "@/lib/posts";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
// import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

// /* ---------------- DATA ---------------- */

// const categories = ["All", "Life", "Thoughts", "Photography", "Code", "Design"];

// // const posts = [
// //   {
// //     title: "Why I Left My Comfort Zone",
// //     category: "Life",
// //     excerpt: "A personal reflection on taking risks, embracing uncertainty, and finding growth in unexpected places.",
// //     date: "Feb 10, 2026",
// //     readTime: "6 min read",
// //     featured: true,
// //     content: `
// // Sometimes the most transformative moments in life come from decisions that terrify us the most.

// // Two years ago, I walked away from stability — a predictable salary, structured routines, and a career path that looked “safe” on paper.

// // I chose uncertainty.

// // The first few months were uncomfortable in ways I wasn’t prepared for. No steady income, no external validation, and an overwhelming sense of doubt.

// // But discomfort has a strange way of sharpening clarity.

// // What I learned:

// // • Comfort is the enemy of growth  
// // • Fear often points toward opportunity  
// // • Resilience is built, not inherited  
// // • Betting on yourself changes everything

// // Looking back, leaving my comfort zone wasn’t reckless.

// // It was necessary.
// // `,
// //   },

// //   {
// //     title: "The Art of Balancing Code & Creativity",
// //     category: "Thoughts",
// //     excerpt: "How I stay productive as a developer while nurturing creative passions without burning out.",
// //     date: "Jan 22, 2026",
// //     readTime: "5 min read",
// //     featured: true,
// //     content: `
// // People often assume productivity and creativity live on opposite ends of the spectrum.

// // Structure vs freedom. Logic vs intuition.

// // But I’ve found they can coexist — if designed intentionally.

// // Over time, I developed a rhythm rather than chasing balance.

// // The 70/20/10 Rule:

// // 70% → Primary work  
// // 20% → Creative exploration  
// // 10% → Curiosity-driven experiments

// // Time Blocking:

// // Weekdays → Deep technical focus  
// // Evenings → Creative play  
// // Weekends → Open-ended exploration

// // Creativity doesn’t die under structure.

// // It thrives inside it.
// // `,
// //   },

// //   {
// //     title: "Lessons From a Year of Photography",
// //     category: "Photography",
// //     excerpt: "What shooting every day for 365 days taught me about patience, composition, and perspective.",
// //     date: "Dec 15, 2025",
// //     readTime: "8 min read",
// //     featured: false,
// //     content: `
// // For an entire year, I committed to one simple rule:

// // Take at least one photo every single day.

// // No excuses. No perfectionism.

// // Some days offered dramatic sunsets and perfect light.

// // Most days didn’t.

// // And that’s where the real lessons emerged.

// // Photography stopped being about capturing something extraordinary.

// // It became about noticing.

// // What changed:

// // • I became more patient  
// // • I saw light differently  
// // • I appreciated subtlety  
// // • I embraced imperfection

// // Consistency reshaped my eye more than talent ever could.

// // The camera didn’t just document my days.

// // It transformed how I experienced them.
// // `,
// //   },

// //   {
// //     title: "Building a Design System from Scratch",
// //     category: "Design",
// //     excerpt: "The principles and challenges behind creating a cohesive design language for a growing product.",
// //     date: "Nov 28, 2025",
// //     readTime: "10 min read",
// //     featured: false,
// //     content: `
// // Design systems aren’t just about components and tokens.

// // They’re about decisions.

// // When we started building ours, the goal wasn’t visual consistency alone — it was scalability, clarity, and speed.

// // Early mistakes taught us quickly.

// // What matters most:

// // • Consistency beats creativity at scale  
// // • Constraints improve design quality  
// // • Documentation is as critical as UI  
// // • Systems reduce decision fatigue

// // A design system is not a static library.

// // It’s a living product.

// // And like any product — it evolves.
// // `,
// //   },

// //   {
// //     title: "TypeScript Patterns I Use Every Day",
// //     category: "Code",
// //     excerpt: "Practical TypeScript patterns that improved robustness, maintainability, and developer experience.",
// //     date: "Oct 15, 2025",
// //     readTime: "7 min read",
// //     featured: false,
// //     content: `
// // TypeScript didn’t just make my code safer.

// // It changed how I think about architecture.

// // Strong typing encourages intentional design.

// // Over time, a few patterns became indispensable.

// // Daily essentials:

// // • Discriminated unions for state logic  
// // • Utility types for flexibility  
// // • Strict null checks for sanity  
// // • Inference-first design

// // Good TypeScript isn’t about adding types everywhere.

// // It’s about modeling reality accurately.

// // Types are not overhead.

// // They’re communication.
// // `,
// //   },

// //   {
// //     title: "The Joy of Side Projects",
// //     category: "Thoughts",
// //     excerpt: "Why every developer should build something purely out of curiosity, not obligation.",
// //     date: "Sep 20, 2025",
// //     readTime: "4 min read",
// //     featured: false,
// //     content: `
// // Side projects exist in a different universe.

// // No deadlines. No stakeholders. No pressure.

// // Just curiosity.

// // Some ideas fail quickly.

// // Some evolve into something meaningful.

// // But all of them teach.

// // Why they matter:

// // • They keep creativity alive  
// // • They sharpen problem-solving  
// // • They remove fear of failure  
// // • They remind you why you started

// // Not every project needs to scale.

// // Some projects just need to exist.
// // `,
// //   },
// // ];

// /* ---------------- PAGE ---------------- */

// export default function BlogPage() {
//   const posts = getAllPosts();
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [activePost, setActivePost] = useState<(typeof posts)[0] | null>(null);
//   const [progress, setProgress] = useState(0);
//   const [liked, setLiked] = useState<Record<string, boolean>>({});

// useEffect(() => {
//   const handleScroll = () => {
//     const el = document.documentElement;
//     const scrolled = el.scrollTop;
//     const height = el.scrollHeight - el.clientHeight;
//     setProgress((scrolled / height) * 100);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   const filteredPosts = useMemo(() => {
//   return activeCategory === "All"
//     ? posts
//     : posts.filter((p) => p.category === activeCategory);
// }, [activeCategory, posts]);

//   useEffect(() => {
//   document.body.style.overflow = activePost ? "hidden" : "auto";

//   const handleKey = (e: KeyboardEvent) => {
//   if (!activePost) return;

//   if (e.key === "Escape") setActivePost(null);
//   if (e.key === "ArrowRight") navigate(1);
//   if (e.key === "ArrowLeft") navigate(-1);
// };


//   window.addEventListener("keydown", handleKey);
//   return () => window.removeEventListener("keydown", handleKey);
// }, [activePost]);

// useEffect(() => {
//   const saved = localStorage.getItem("likedPosts");
//   if (saved) setLiked(JSON.parse(saved));
// }, []);

// useEffect(() => {
//   localStorage.setItem("likedPosts", JSON.stringify(liked));
// }, [liked]);

// const navigate = (direction: number) => {
//   if (!activePost) return;

//   const index = filteredPosts.findIndex(p => p.title === activePost.title);
//   const newIndex =
//     (index + direction + filteredPosts.length) % filteredPosts.length;

//   setActivePost(filteredPosts[newIndex]);
// };

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white">
//          <div
//      className="fixed top-0 left-0 h-[2px] bg-accent z-[60] transition-all duration-150"
//       style={{ width: `${progress}%` }}
//     />
//       <Navbar />
//       <ParallaxBackground />

//       {/* HERO */}
//       <section className="py-28 px-6">
//         <div className="max-w-6xl mx-auto">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-accent tracking-[0.3em] text-xs mb-6"
//           >
//             04 — BLOG
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold"
//           >
//             Stories & <span className="text-accent">Thoughts</span>
//           </motion.h1>

//           <div className="w-24 h-px bg-accent/40 my-8" />

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-gray-400 max-w-2xl"
//           >
//             Personal reflections on life, creativity, code, and the journey of building things.
//           </motion.p>
//         </div>
//       </section>
//       {/* FEATURED POSTS */}
// <section className="px-6 pb-14">
//   <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
//     {posts
//       .filter((p) => p.featured)
//       .map((post, i) => (
//         <motion.article
//           key={post.title}
//           //  layoutId={post.title}  
//             onClick={() => setActivePost(post)}
//             whileHover={{ y: -3, scale: 1.01 }}   // ✅ HERE
//  initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// exit={{ opacity: 0 }}
// transition={{ duration: 0.12 }}
//           className="
//             group relative rounded-2xl
//             bg-gradient-to-b from-white/[0.04] to-white/[0.01]
//             border border-white/10
//             backdrop-blur-xl
//             px-6 py-6
//             shadow-[0_10px_40px_rgba(0,0,0,0.6)]
//             hover:border-accent/30
//             transition
//           "
//         >
//           {/* Glow */}
//           <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-accent/5" />

//           {/* Header Row */}
//           <div className="flex items-center justify-between mb-4">
//             <span className="px-3 py-1 rounded-full text-[10px] tracking-wider bg-accent/10 text-accent">
//               {post.category.toUpperCase()}
//             </span>

//             <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-accent text-black">
//               FEATURED
//             </span>
//           </div>

//           {/* Title */}
//           <h3 className="text-sm sm:text-base font-semibold mb-2">
//             {post.title}
//           </h3>

//           {/* Excerpt */}
//           <p className="text-xs sm:text-sm text-gray-400 mb-5 leading-relaxed">
//             {post.excerpt}
//           </p>

//           {/* Meta */}
//           <div className="flex items-center gap-4 text-[11px] text-gray-500">
//             <span className="flex items-center gap-1">
//               <Calendar size={12} />
//               {post.date}
//             </span>

//             <span className="flex items-center gap-1">
//               <Clock size={12} />
//               {post.readTime}
//             </span>
//           </div>
//         </motion.article>
//       ))}
//   </div>
// </section>

//       {/* FILTERS */}
//       <section className="px-6 pb-10">
//         <div className="max-w-6xl mx-auto flex flex-wrap gap-3">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-1.5 rounded-full text-sm transition ${
//                 activeCategory === cat
//                   ? "bg-accent text-black"
//                   : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* POSTS */}
//       <section className="px-6 pb-24">
//         <div className="max-w-6xl mx-auto space-y-4">
//           {filteredPosts.map((post, i) => (
//             <motion.article
//               key={post.title + i}
//               //  layoutId={post.title}
//               onClick={() => setActivePost(post)}
//               initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// exit={{ opacity: 0 }}
// transition={{ duration: 0.12 }}
//              whileHover={{ y: -3, scale: 1.01 }}   // ✅ HERE
// //   transition={{ type: "spring", stiffness: 200, damping: 18 }} // ✅ HERE
//               className={`
//                 group relative rounded-2xl
//                 bg-gradient-to-b from-white/[0.04] to-white/[0.01]
//                 border border-white/10
//                 backdrop-blur-xl
//                 px-6 py-5
//                 transition
//                 hover:border-accent/30
//               `}
//             >
//               {/* Glow */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-accent/5" />

//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   {/* Category + Meta */}
//                   <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
//                     <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent">
//                       {post.category}
//                     </span>

//                     <span className="flex items-center gap-1">
//                       <Calendar size={12} />
//                       {post.date}
//                     </span>

//                     <span className="flex items-center gap-1">
//                       <Clock size={12} />
//                       {post.readTime}
//                     </span>

//                     {post.featured && (
//                       <span className="px-2 py-0.5 rounded-full bg-accent text-black">
//                         Featured
//                       </span>
//                     )}
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-sm sm:text-base font-semibold mb-1">
//                     {post.title}
//                   </h3>

//                   {/* Excerpt */}
//                   <p className="text-xs sm:text-sm text-gray-400 max-w-3xl">
//                     {post.excerpt}
//                   </p>
//                 </div>

//                 {/* Arrow */}
//                 <ArrowUpRight
//                   size={16}
//                   className="opacity-40 group-hover:opacity-100 transition"
//                 />
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </section>

//       {/* SUBSCRIBE */}
//       <section className="px-6 pb-32">
//         <div
//           className="
//             max-w-6xl mx-auto rounded-3xl
//             bg-gradient-to-b from-white/[0.04] to-white/[0.01]
//             border border-white/10
//             backdrop-blur-xl
//             px-10 py-12
//             text-center
//             shadow-[0_20px_80px_rgba(0,0,0,0.6)]
//           "
//         >
//           <h3 className="text-lg font-semibold mb-2">
//             Stay Updated
//           </h3>

//           <p className="text-gray-400 text-sm mb-6">
//             Get notified when I publish new articles. No spam, just good reads.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <input
//               placeholder="your@email.com"
//               className="
//                 px-4 py-2 rounded-full
//                 bg-black/40 border border-white/10
//                 text-sm text-white
//                 focus:outline-none focus:border-accent/40
//                 w-full sm:w-72
//               "
//             />

//             <button
//               className="
//                 px-6 py-2 rounded-full
//                 bg-accent text-black
//                 text-sm font-medium
//                 hover:scale-105 transition
//               "
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>
//       <AnimatePresence>
//   {activePost && (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-black/80 backdrop-blur-md"
//         onClick={() => setActivePost(null)}
//       />

//       {/* Modal */}
//       <motion.div
//       // layoutId={activePost.title}   // ✅ ADD THIS
//         initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// exit={{ opacity: 0 }}
// transition={{ duration: 0.12 }}
//         // transition={{ type: "spring", stiffness: 120, damping: 20 }}
//         className="
//           relative w-full max-w-4xl h-[85vh]
//           bg-gradient-to-b from-[#0f1115] to-black
//           border border-white/10
//           rounded-3xl
//           shadow-[0_30px_120px_rgba(0,0,0,0.8)]
//           overflow-hidden
//         "
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
//           <div className="flex items-center gap-3 text-xs text-gray-400">
//             <span className="px-3 py-1 rounded-full bg-accent/10 text-accent tracking-wider">
//               {activePost.category.toUpperCase()}
//             </span>

//             <span>{activePost.readTime}</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <button
//   onClick={() =>
//     setLiked(prev => ({
//       ...prev,
//       [activePost.title]: !prev[activePost.title],
//     }))
//   }
//   className="modal-icon"
// >
//   <Heart
//     size={16}
//     className={liked[activePost.title] ? "fill-red-500 text-red-500" : ""}
//   />
// </button>

//             <button
//   onClick={() => {
//     navigator.clipboard.writeText(window.location.href);
//     alert("Link copied ✨"); // optional toast later
//   }}
//   className="modal-icon"
// >
//   <Share2 size={16} />
// </button>
//             <button
//               onClick={() => setActivePost(null)}
//               className="modal-icon"
//             >
//               <X size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Scrollable Content */}
//         <div className="h-full overflow-y-auto px-8 py-8">
//           {/* Meta */}
//           <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
//             <span className="flex items-center gap-1">
//               <Calendar size={13} />
//               {activePost.date}
//             </span>

//             <span className="flex items-center gap-1">
//               <Clock size={13} />
//               {activePost.readTime}
//             </span>
//           </div>

//           {/* Title */}
//       <motion.h2
//   initial={{ opacity: 0, y: 10 }}
//   animate={{ opacity: 1, y: 0 }}
//   className="text-3xl font-bold tracking-tight mb-2"
// >
//   {activePost.title}
// </motion.h2>

// <p className="text-sm text-gray-500 mb-6">
//   {activePost.category} · {activePost.readTime}
// </p>

//           {/* Body */}
//         <article className="prose prose-invert prose-sm max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
//   {activePost.content}
// </article>
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>

//       <Footer />
//     </main>
//   );
// }
// import { getAllPosts } from "@/lib/posts";
// import BlogClient from "./BlogClient";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
// import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

// export default function BlogPage() {
//   const posts = getAllPosts();

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white">
//       <Navbar />
//       <ParallaxBackground />

//       {/* HERO */}
//       <section className="py-28 px-6">
//         <div className="max-w-6xl mx-auto">
//           <p className="text-accent tracking-[0.3em] text-xs mb-6">
//             04 — BLOG
//           </p>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
//             Stories & <span className="text-accent">Thoughts</span>
//           </h1>
//         </div>
//       </section>

//       <BlogClient posts={posts} />

//       <Footer />
//     </main>
//   );
// }
import { getAllPosts } from "@/lib/posts";
import BlogClient from "./BlogClient";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

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
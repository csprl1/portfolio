import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

/* ---------------- STATIC PARAMS ---------------- */

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/* ---------------- METADATA ---------------- */

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

/* ---------------- PAGE ---------------- */

export default function PostPage(
  { params }: { params: { slug: string } }
) {
  const post = getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-2">
          {post.category} · {post.readTime}
        </p>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-8">
          {post.title}
        </h1>

        {/* Content */}
        <article className="prose prose-invert">
          <MDXRemote source={post.content ?? ""} />
        </article>
      </div>
    </main>
  );
}
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// export type Post = {
//   slug: string;
//   title: string;
//   date: string;
//   readTime: string;
//   category: string;
//   excerpt: string;
//   featured?: boolean;
// };

// const postsDirectory = path.join(process.cwd(), "content/posts");

// export function getAllPosts(): Post[] {
//   const filenames = fs.readdirSync(postsDirectory);

//   return filenames.map((filename) => {
//     const slug = filename.replace(".mdx", "");
//     const fullPath = path.join(postsDirectory, filename);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     const { data } = matter(fileContents);

//     return {
//       slug,
//       ...data,
//     };
//   });
// }

// export function getPostBySlug(slug: string) {
//   const fullPath = path.join(postsDirectory, `${slug}.mdx`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   return matter(fileContents);
// }
import fs from "fs";
import path from "path";
import matter from "gray-matter";
export type Post = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  featured?: boolean;
  content?: string; // 
};

const postsDirectory = path.join(process.cwd(), "content/posts");

// export function getAllPosts(): Post[] {
//   const files = fs.readdirSync(postsDirectory);

// console.log("CONTENT FOR", files);

//   return files.map((file) => {
//     const fullPath = path.join(postsDirectory, file);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     const { data } = matter(fileContents);
    

//     return {
//       slug: file.replace(".mdx", ""),
//       title: data.title,
//       date: data.date,
//       readTime: data.readTime,
//       category: data.category,
//       excerpt: data.excerpt,
//        content: data.content, 
//       featured: data.featured ?? false,
//     };
//   });
// }
export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);

  console.log("FILES:", files);

  return files.map((file) => {
    const fullPath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents); // ✅ FIXED

    return {
      slug: file.replace(".mdx", ""),
      title: data.title,
      date: data.date,
      readTime: data.readTime,
      category: data.category,
      excerpt: data.excerpt,
      featured: data.featured ?? false,

      content, // ✅ THIS is MDX body
    };
  });
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    readTime: data.readTime,
    category: data.category,
    excerpt: data.excerpt,
    featured: data.featured ?? false,
    content, // 👈 important for slug page
  };
}
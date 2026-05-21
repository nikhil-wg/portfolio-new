export interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  published: boolean;
  created_at: string;
  cover_image?: string;
  tags?: string[];
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    description: "A quick introduction to building applications with Next.js 14 and App Router.",
    content: "<p>Here is a basic introduction to Next.js. Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.</p>",
    published: true,
    created_at: new Date().toISOString(),
    tags: ["Next.js", "React", "Web Developer"]
  }
];

export async function getBlogs(): Promise<Blog[]> {
  return blogs.filter((b) => b.published);
}

export async function getBlog(slug: string): Promise<Blog | null> {
  const blog = blogs.find((b) => b.slug === slug && b.published);
  return blog || null;
}

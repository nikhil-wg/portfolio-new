"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
export interface HashnodePost {
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage?: {
    url: string;
  } | null;
  tags?: {
    name: string;
  }[];
}

interface BlogListProps {
  blogs: HashnodePost[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export default function BlogList({ blogs }: BlogListProps) {
  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-[16px] text-[#666] dark:text-gray-400 mb-2">
          No blog posts yet
        </p>
        <p className="text-[14px] text-[#999] dark:text-gray-500">
          Check back soon for updates!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogs.map((blog, index) => {
        // Format date
        const date = new Date(blog.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });

        return (
          <motion.div
            key={blog.slug}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex"
          >
            <BlogCard
              title={blog.title}
              description={blog.brief}
              image={blog.coverImage?.url}
              href={`https://nikhilwagh.hashnode.dev/${blog.slug}`}
              readTime={blog.readTimeInMinutes}
              tags={blog.tags}
              date={date}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

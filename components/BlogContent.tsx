"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/lib/blogs";

interface BlogContentProps {
  blog: Blog;
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export default function BlogContent({ blog }: BlogContentProps) {
  const date = new Date(blog.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-8">
      {/* Back button */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-[14px] text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to blogs</span>
        </Link>
      </motion.div>

      {/* Cover Image */}
      {blog.cover_image && (
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative w-full aspect-[16/7] rounded-xl overflow-hidden bg-[#f5f5f5] dark:bg-white/5"
        >
          <img
            src={blog.cover_image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      {/* Header */}
      <div className="space-y-4">
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2 text-[13px] text-[#666] dark:text-gray-400"
        >
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </motion.div>

        <motion.h1
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[36px] sm:text-[44px] font-bold text-[#1a1a1a] dark:text-white tracking-tight leading-tight transition-colors duration-300"
        >
          {blog.title}
        </motion.h1>

        {blog.description && (
          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[18px] text-[#666] dark:text-gray-400 leading-relaxed transition-colors duration-300"
          >
            {blog.description}
          </motion.p>
        )}
      </div>

      {/* Divider */}
      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="border-t border-[#e5e5e5] dark:border-white/10 transition-colors duration-300"
      />

      {/* Content */}
      <motion.div
        custom={6}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:text-[#1a1a1a] dark:prose-headings:text-white
          prose-p:text-[#555] dark:prose-p:text-gray-400 prose-p:leading-[1.8]
          prose-a:text-[#1a1a1a] dark:prose-a:text-white prose-a:font-medium prose-a:underline prose-a:underline-offset-2
          prose-a:decoration-[#ccc] dark:prose-a:decoration-gray-600
          hover:prose-a:decoration-[#1a1a1a] dark:hover:prose-a:decoration-white
          prose-strong:text-[#1a1a1a] dark:prose-strong:text-white prose-strong:font-semibold
          prose-code:text-[#1a1a1a] dark:prose-code:text-white prose-code:bg-[#f5f5f5] dark:prose-code:bg-white/5
          prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-[14px]
          prose-pre:bg-[#f5f5f5] dark:prose-pre:bg-white/5 prose-pre:border prose-pre:border-[#e5e5e5] dark:prose-pre:border-white/10
          prose-blockquote:border-l-[#e5e5e5] dark:prose-blockquote:border-l-white/10
          prose-blockquote:text-[#666] dark:prose-blockquote:text-gray-400
          prose-li:text-[#555] dark:prose-li:text-gray-400
          transition-colors duration-300"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}

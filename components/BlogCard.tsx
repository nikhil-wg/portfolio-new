"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  image?: string;
  href?: string;
  date?: string;
  readTime?: number;
  tags?: { name: string }[];
}

export default function BlogCard({
  title,
  description,
  image,
  href = "#",
  date,
  readTime,
  tags,
}: BlogCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group border border-[#e5e5e5] dark:border-white/10 rounded-xl flex flex-col h-full overflow-hidden bg-white dark:bg-white/5 dark:backdrop-blur hover:border-[#ccc] dark:hover:border-white/20 hover:shadow-md dark:hover:shadow-2xl dark:hover:shadow-white/5 transition-all duration-300"
      >
        {image && (
          <div className="relative w-full overflow-hidden bg-[#f5f5f5] dark:bg-white/5 shrink-0" style={{ aspectRatio: "16/7" }}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap items-center justify-between gap-y-2 mb-3">
            {tags && tags.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 2).map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#666] dark:text-gray-300 font-semibold bg-gray-100 dark:bg-white/10 px-2 py-1 rounded transition-colors duration-300"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-[11px] uppercase tracking-wider text-[#999] dark:text-gray-500 font-semibold transition-colors duration-300">
                Article
              </p>
            )}
            <div className="flex items-center gap-3 text-[11px] text-[#666] dark:text-gray-400 transition-colors duration-300">
              {readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{readTime} min read</span>
                </div>
              )}
              {date && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{date}</span>
                </div>
              )}
            </div>
          </div>
          <h3 className="text-[18px] font-semibold text-[#1a1a1a] dark:text-white mb-3 leading-snug group-hover:text-[#000] dark:group-hover:text-gray-100 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-[14px] text-[#666] dark:text-gray-400 leading-relaxed mb-4 transition-colors duration-300 line-clamp-3 flex-grow">
            {description}
          </p>
          <div className="flex items-center mt-auto gap-1 text-[14px] text-[#1a1a1a] dark:text-white font-medium group-hover:gap-2 transition-all duration-300">
            <span>Read article on Hashnode</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </a>
  );
}

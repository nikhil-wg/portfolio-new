"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  image?: string;
  href?: string;
  label?: string;
  date?: string;
}

export default function BlogCard({
  title,
  description,
  image,
  href = "#",
  label = "Check this out",
  date,
}: BlogCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group border border-[#e5e5e5] dark:border-white/10 rounded-xl overflow-hidden bg-white dark:bg-white/5 dark:backdrop-blur hover:border-[#ccc] dark:hover:border-white/20 hover:shadow-md dark:hover:shadow-2xl dark:hover:shadow-white/5 transition-all duration-300"
      >
        {image && (
          <div className="relative w-full overflow-hidden bg-[#f5f5f5] dark:bg-white/5" style={{ aspectRatio: "16/7" }}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] uppercase tracking-wider text-[#999] dark:text-gray-500 font-semibold transition-colors duration-300">
              {label}
            </p>
            {date && (
              <div className="flex items-center gap-1 text-[11px] text-[#666] dark:text-gray-400 transition-colors duration-300">
                <Calendar className="w-3 h-3" />
                <span>{date}</span>
              </div>
            )}
          </div>
          <h3 className="text-[18px] font-semibold text-[#1a1a1a] dark:text-white mb-3 leading-snug group-hover:text-[#000] dark:group-hover:text-gray-100 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[14px] text-[#666] dark:text-gray-400 leading-relaxed mb-4 transition-colors duration-300">
            {description}
          </p>
          <div className="flex items-center gap-1 text-[14px] text-[#1a1a1a] dark:text-white font-medium group-hover:gap-2 transition-all duration-300">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

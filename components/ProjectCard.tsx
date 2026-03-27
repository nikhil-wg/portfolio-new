"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  tags: string[];
  status: "active" | "archived";
  links?: { label: string; href: string }[];
  href?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  tags,
  status,
  links = [],
  href = "#",
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group border border-[#e5e5e5] dark:border-white/10 rounded-xl overflow-hidden bg-white dark:bg-white/5 dark:backdrop-blur hover:border-[#ccc] dark:hover:border-white/20 hover:shadow-md dark:hover:shadow-2xl dark:hover:shadow-white/5 transition-all duration-300 cursor-pointer"
      >
        {/* Image */}
        {image && (
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#f5f5f5] dark:bg-white/5">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h2 className="text-[16px] font-semibold text-[#1a1a1a] dark:text-white leading-tight group-hover:text-[#000] dark:group-hover:text-gray-100 transition-colors duration-300">
              {title}
            </h2>
            <span
              className={`shrink-0 text-[10px] px-2.5 py-1 rounded-full font-medium border transition-colors duration-300 ${
                status === "active"
                  ? "text-green-700 dark:text-green-400 border-green-200 dark:border-green-500/30 bg-green-50 dark:bg-green-500/10"
                  : "text-[#666] dark:text-gray-400 border-[#e5e5e5] dark:border-white/10 bg-[#fafafa] dark:bg-white/5"
              }`}
            >
              {status}
            </span>
          </div>

          {subtitle && (
            <p className="text-[13px] text-[#666] dark:text-gray-400 font-medium mb-2 transition-colors duration-300">
              {subtitle}
            </p>
          )}

          <p className="text-[14px] text-[#666] dark:text-gray-400 leading-relaxed mb-4 transition-colors duration-300">
            {description}
          </p>

          {/* Links */}
          {links.length > 0 && (
            <div className="flex gap-2 mb-4 flex-wrap">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[12px] text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white border border-[#e5e5e5] dark:border-white/10 hover:border-[#ccc] dark:hover:border-white/20 hover:bg-[#fafafa] dark:hover:bg-white/10 rounded-lg px-3 py-1.5 transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-[#666] dark:text-gray-400 bg-[#f5f5f5] dark:bg-white/5 border border-[#e5e5e5] dark:border-white/10 px-2 py-1 rounded group-hover:border-[#d5d5d5] dark:group-hover:border-white/20 group-hover:text-[#555] dark:group-hover:text-gray-300 transition-colors duration-150"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

"use client";

import { motion } from "framer-motion";

interface XFollowCardProps {
  username?: string;
  description?: string;
}

export default function XFollowCard({
  username = "@yourusername",
  description = "Follow me on X for AI insights",
}: XFollowCardProps) {
  return (
    <motion.a
      href={`https://twitter.com/${username.replace("@", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
      className="flex items-center justify-between gap-4 border border-[#e5e5e5] dark:border-white/10 rounded-xl px-5 py-4 bg-white dark:bg-white/5 dark:backdrop-blur hover:border-[#ccc] dark:hover:border-white/20 hover:shadow-sm dark:hover:shadow-2xl dark:hover:shadow-white/5 transition-all duration-300 group max-w-sm"
    >
      <div className="flex items-center gap-3">
        {/* X logo */}
        <div className="w-10 h-10 rounded-full bg-[#1a1a1a] dark:bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="dark:fill-black">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
        <div>
          <p className="text-[14px] font-semibold text-[#1a1a1a] dark:text-white leading-tight transition-colors duration-300">
            Connect with me on X
          </p>
          <p className="text-[13px] text-[#666] dark:text-gray-400 mt-1 transition-colors duration-300">{description}</p>
        </div>
      </div>
      <button className="shrink-0 text-[13px] font-semibold bg-[#1a1a1a] dark:bg-white text-white dark:text-black px-5 py-2 rounded-full hover:bg-[#000] dark:hover:bg-gray-200 transition-colors duration-150">
        Follow
      </button>
    </motion.a>
  );
}

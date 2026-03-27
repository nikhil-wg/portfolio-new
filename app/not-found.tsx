"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-center min-h-[60vh]">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-[13px] text-[#444] mb-3"
      >
        404
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-[32px] font-bold text-white mb-4"
      >
        Page not found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-[14px] text-[#555] mb-6"
      >
        The page you&apos;re looking for doesn&apos;t exist.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <Link
          href="/"
          className="text-[13px] text-white bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] rounded-lg px-4 py-2 transition-colors"
        >
          ← Back home
        </Link>
      </motion.div>
    </div>
  );
}

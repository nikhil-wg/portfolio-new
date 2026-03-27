"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ProjectDetailPage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#555] hover:text-white transition-colors mb-8"
        >
          ← Projects
        </Link>

        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-[32px] sm:text-[38px] font-bold text-white tracking-tight leading-tight">
            Project Title
          </h1>
          <span className="text-[10px] text-emerald-400 border border-emerald-900 bg-emerald-950/40 px-2 py-1 rounded-full shrink-0 mt-2">
            active
          </span>
        </div>

        <p className="text-[14px] text-[#555] mb-8">
          A detailed description of the project.
        </p>

        <div
          className="w-full rounded-xl overflow-hidden bg-[#141414] border border-[#1e1e1e] mb-8"
          style={{ aspectRatio: "16/9" }}
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {["AI", "TypeScript", "Next.js"].map((tag) => (
            <span
              key={tag}
              className="text-[12px] text-[#666] bg-[#141414] border border-[#1e1e1e] rounded px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-[14.5px] text-[#5a5a5a] leading-[1.85] space-y-4">
          <p>
            This is a placeholder for the project detail page. Replace this with
            actual project information, screenshots, and technical details.
          </p>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

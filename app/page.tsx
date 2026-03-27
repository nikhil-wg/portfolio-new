"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import XFollowCard from "@/components/XFollowCard";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div>
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[40px] sm:text-[48px] font-bold text-[#1a1a1a] dark:text-white tracking-tight leading-tight mb-3 transition-colors duration-300"
        >
          Hey, I&apos;m Nikhil
        </motion.h1>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[18px] text-[#666] dark:text-gray-400 font-normal mb-8 transition-colors duration-300"
        >
          Full Stack Developer & AI Engineer
        </motion.h2>

        {/* X Follow Card */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <XFollowCard
            username="@nikhil_twt"
            description="Follow me on X for AI insights"
          />
        </motion.div>

        {/* Intro paragraphs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 text-[15px] text-[#555] dark:text-gray-400 leading-[1.8] transition-colors duration-300"
        >
          <p>
            I am a <strong className="text-[#1a1a1a] dark:text-white font-semibold transition-colors duration-300">Full Stack Developer</strong> and{" "}
            <strong className="text-[#1a1a1a] dark:text-white font-semibold transition-colors duration-300">AI enthusiast</strong> passionate about building
            scalable and intelligent systems that solve real-world problems.
          </p>

          <p>
            Currently pursuing <strong className="text-[#1a1a1a] dark:text-white font-semibold transition-colors duration-300">BE in AI & Data Science</strong> (Expected 2026),
            I specialize in the MERN stack, Next.js, and AI-based applications. I love creating innovative solutions
            at the intersection of web development and artificial intelligence.
          </p>

          <p>
            Working as an Intern Full-Stack Developer at{" "}
            <strong className="text-[#1a1a1a] dark:text-white font-semibold transition-colors duration-300">
              Byte Elephant Technologies
            </strong>
            , building ERP and CRM systems, and developing cross-platform mobile apps using React Native.
            Previously worked at{" "}
            <strong className="text-[#1a1a1a] dark:text-white font-semibold transition-colors duration-300">
              XMega
            </strong>
            , where I built responsive React + Node.js applications and improved
            page load speed by 25%.
          </p>

          <p>
            Check out my{" "}
            <Link
              href="/projects"
              className="text-[#1a1a1a] dark:text-white font-medium underline underline-offset-2 decoration-[#ccc] dark:decoration-gray-600 hover:decoration-[#1a1a1a] dark:hover:decoration-white transition-colors"
            >
              projects
            </Link>
            {" "}including AI SaaS applications, semantic search engines, and intelligent trip planners.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="border-t border-[#e5e5e5] dark:border-white/10 pt-8 transition-colors duration-300"
      >
        {/* Featured Blog Section */}
        <div>
          <h3 className="text-[13px] uppercase tracking-wider text-[#999] dark:text-gray-500 font-semibold mb-4 transition-colors duration-300">
            Featured Blog
          </h3>
          <BlogCard
            title="The Long Flight Test"
            description="A deep dive into testing strategies for long-running processes and how to ensure reliability in complex AI systems."
            image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
            href="/blogs/the-long-flight-test"
            label="Latest Post"
          />
        </div>
      </motion.div>
    </div>
  );
}

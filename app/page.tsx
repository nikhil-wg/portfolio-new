"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import XFollowCard from "@/components/XFollowCard";
import GitHubStats from "@/components/GitHubStats";
import CurrentlyWorkingOn from "@/components/CurrentlyWorkingOn";
import TypingEffect from "@/components/TypingEffect";

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
          Hey, I&apos;m Nikhil 👋
        </motion.h1>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[18px] text-[#666] dark:text-gray-400 font-normal mb-8 transition-colors duration-300"
        >
          <TypingEffect 
            text="Full Stack Developer & AI Engineer crafting intelligent web experiences."
            speed={35}
            delay={400}
          />
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
            description="Building in public. AI insights, dev updates, and occasional hot takes."
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
            <strong className="text-[#1a1a1a] dark:text-white font-semibold transition-colors duration-300">I turn ideas into products.</strong>{" "}
            Not just code that works—but systems that are fast, intelligent, and solve real problems.
          </p>

          <p>
            As a{" "}
            <strong className="text-[#1a1a1a] dark:text-white font-semibold transition-colors duration-300">Full Stack Developer</strong> and{" "}
            <strong className="text-[#1a1a1a] dark:text-white font-semibold transition-colors duration-300">AI Engineer</strong>,
            I live at the intersection where web meets intelligence. MERN, Next.js, AI—that&apos;s my playground.
          </p>

          <p>
            Right now, I&apos;m deep into building{" "}
            <strong className="text-[#1a1a1a] dark:text-white font-semibold transition-colors duration-300">AI-powered tools</strong>{" "}
            that make life easier—think semantic search engines that actually understand context,
            trip planners that learn your preferences, and SaaS apps that automate the boring stuff.
          </p>

          <p>
            My current obsession? Making AI accessible. I believe the best AI products are the ones
            you don&apos;t even notice—they just work, seamlessly integrated into your workflow.
          </p>

          <p>
            Curious what I&apos;ve built? Dive into my{" "}
            <Link
              href="/projects"
              className="text-[#1a1a1a] dark:text-white font-medium underline underline-offset-2 decoration-[#ccc] dark:decoration-gray-600 hover:decoration-[#1a1a1a] dark:hover:decoration-white transition-colors"
            >
              projects
            </Link>
            —each one started as a "what if" and turned into something real.
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
        {/* Currently Working On Section */}
        <div className="mb-8">
          <h3 className="text-[13px] uppercase tracking-wider text-[#999] dark:text-gray-500 font-semibold mb-4 transition-colors duration-300">
            What I&apos;m Up To
          </h3>
          <CurrentlyWorkingOn
            items={[
              {
                title: "Ask to Doc v2",
                description: "Adding multi-document chat and better AI context handling",
                status: "building",
              },
              {
                title: "LangChain & RAG Patterns",
                description: "Deep diving into retrieval-augmented generation for better AI apps",
                status: "learning",
              },
              {
                title: "AI Agent Frameworks",
                description: "Exploring CrewAI and AutoGen for autonomous workflows",
                status: "exploring",
              },
            ]}
          />
        </div>

        {/* GitHub Stats Section */}
        <div className="mb-8">
          <h3 className="text-[13px] uppercase tracking-wider text-[#999] dark:text-gray-500 font-semibold mb-4 transition-colors duration-300">
            GitHub
          </h3>
          <GitHubStats username="nikhil-wg" />
        </div>

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

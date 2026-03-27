"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

const projects = [
  {
    title: "Ask to Doc",
    subtitle: "AI SaaS PDF Assistant",
    description:
      "An intelligent PDF assistant powered by AI that helps you interact with your documents. Built with Next.js, LangChain for AI processing, Convex for real-time database, and Clerk for authentication.",
    tags: ["Next.js", "LangChain", "Convex", "Clerk", "AI", "SaaS"],
    status: "active" as const,
    links: [
      { label: "Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    href: "/projects/ask-to-doc",
  },
  {
    title: "NASA Bioscience Knowledge Engine",
    subtitle: "AI Semantic Search Platform",
    description:
      "Advanced AI-powered semantic search engine for NASA bioscience data. Leverages Google Gemini for intelligent information retrieval and natural language understanding.",
    tags: ["AI", "Gemini", "Semantic Search", "Next.js", "Python"],
    status: "active" as const,
    links: [
      { label: "Visit", href: "#" },
      { label: "GitHub", href: "#" }
    ],
    href: "/projects/nasa-bioscience",
  },
  {
    title: "AI Trip Planner",
    subtitle: "Smart Travel Assistant",
    description:
      "An intelligent trip planning application that helps users create personalized travel itineraries. Built with React, Firebase for backend, and Google OAuth for seamless authentication.",
    tags: ["React", "Firebase", "Google OAuth", "AI", "Travel"],
    status: "active" as const,
    links: [
      { label: "Live Demo", href: "#" },
      { label: "GitHub", href: "#" }
    ],
    href: "/projects/ai-trip-planner",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <motion.h1
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-[38px] sm:text-[44px] font-bold text-white tracking-tight mb-2"
      >
        Projects
      </motion.h1>

      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-[14px] text-[#555] mb-8"
      >
        Featured AI & Full-Stack Projects
      </motion.p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i + 2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

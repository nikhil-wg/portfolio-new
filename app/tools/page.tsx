"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

const categories = [
  {
    name: "AI & LLMs",
    tools: [
      { name: "Claude", description: "Primary LLM for coding and reasoning", href: "https://claude.ai" },
      { name: "ChatGPT", description: "OpenAI's flagship model", href: "https://chat.openai.com" },
      { name: "Cursor", description: "AI-first code editor", href: "https://cursor.sh" },
      { name: "Perplexity", description: "AI-powered search engine", href: "https://perplexity.ai" },
    ],
  },
  {
    name: "Development",
    tools: [
      { name: "VS Code", description: "Code editor of choice", href: "https://code.visualstudio.com" },
      { name: "iTerm2", description: "Terminal emulator for macOS", href: "https://iterm2.com" },
      { name: "TablePlus", description: "Modern DB GUI", href: "https://tableplus.com" },
      { name: "Insomnia", description: "API client for testing", href: "https://insomnia.rest" },
    ],
  },
  {
    name: "Design & Productivity",
    tools: [
      { name: "Figma", description: "Design and prototyping", href: "https://figma.com" },
      { name: "Notion", description: "Notes, docs, and wikis", href: "https://notion.so" },
      { name: "Linear", description: "Project management", href: "https://linear.app" },
      { name: "Raycast", description: "Productivity launcher for macOS", href: "https://raycast.com" },
    ],
  },
  {
    name: "Infrastructure",
    tools: [
      { name: "Vercel", description: "Frontend deployments", href: "https://vercel.com" },
      { name: "Fly.io", description: "Backend deployments", href: "https://fly.io" },
      { name: "Neon", description: "Serverless Postgres", href: "https://neon.tech" },
      { name: "Upstash", description: "Serverless Redis", href: "https://upstash.com" },
    ],
  },
];

export default function ToolsPage() {
  return (
    <div>
      <motion.h1
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-[38px] sm:text-[44px] font-bold text-white tracking-tight mb-2"
      >
        Tools
      </motion.h1>

      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-[14px] text-[#555] mb-10"
      >
        Software and services I use every day.
      </motion.p>

      <div className="flex flex-col gap-10">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.name}
            custom={ci + 2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-[13px] font-semibold text-[#888] uppercase tracking-widest mb-4">
              {cat.name}
            </h2>
            <div className="flex flex-col gap-1">
              {cat.tools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 py-3 border-b border-[#181818] hover:border-[#262626] group transition-colors duration-150"
                >
                  <div>
                    <p className="text-[14px] font-medium text-white group-hover:text-white transition-colors">
                      {tool.name}
                    </p>
                    <p className="text-[12.5px] text-[#4a4a4a] mt-0.5">
                      {tool.description}
                    </p>
                  </div>
                  <span className="text-[#333] group-hover:text-[#666] transition-colors shrink-0">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

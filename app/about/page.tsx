"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" },
  }),
};

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
  },
  {
    category: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "GCP", "AWS"],
  },
];

const sections = [
  {
    title: "Who I Am",
    content:
      "I am Nikhil Wagh, a Full Stack Developer and AI enthusiast passionate about creating innovative solutions that make a real impact. I love exploring the intersection of web development and artificial intelligence to build smart, scalable applications.",
  },
  {
    title: "What I Do",
    content:
      "Currently pursuing BE in AI & Data Science (Expected 2026), I specialize in building full-stack applications using the MERN stack and Next.js. I have hands-on experience in developing AI-powered applications, working with ERP/CRM systems, and building cross-platform mobile apps.",
  },
  {
    title: "My Skills",
    content:
      "Skilled in modern web technologies and AI frameworks, I focus on creating efficient, user-centric solutions. From building scalable backend systems to crafting responsive frontends, I enjoy every aspect of the development process.",
  },
  {
    title: "My Vision",
    content:
      "I am passionate about building scalable and intelligent systems that solve real-world problems. I believe in continuous learning and staying updated with the latest technologies to deliver cutting-edge solutions.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <motion.h1
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-[38px] sm:text-[44px] font-bold text-white tracking-tight mb-3"
      >
        Nikhil Wagh
      </motion.h1>

      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-[14px] text-[#666] mb-8"
      >
        Full-Stack Developer • AI Enthusiast • MERN Stack • Next.js
      </motion.p>

      {/* Skill Categories */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mb-10"
      >
        <h3 className="text-[13px] font-semibold text-white mb-4">
          Technical Skills
        </h3>
        <div className="flex flex-col gap-4">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <p className="text-[12px] text-[#888] mb-2 font-medium">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[12px] text-[#aaa] bg-[#141414] border border-[#222] rounded-full px-3 py-1.5 hover:text-white hover:border-[#333] hover:bg-[#1a1a1a] transition-all duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Sections */}
      <div className="flex flex-col gap-7">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            custom={i + 3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h4 className="text-[13px] font-semibold text-white mb-2">
              {section.title}
            </h4>
            <p className="text-[14px] text-[#5a5a5a] leading-[1.75]">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        custom={sections.length + 3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-10 flex gap-4"
      >
        <Link
          href="/contact"
          className="text-[13px] text-white bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] hover:bg-[#1f1f1f] rounded-lg px-4 py-2 transition-all duration-150"
        >
          Get in Touch
        </Link>
        <Link
          href="/projects"
          className="text-[13px] text-[#666] hover:text-white transition-colors py-2"
        >
          View Projects
        </Link>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" },
  }),
};

const experiences = [
  {
    company: "Byte Elephant Technologies",
    role: "Intern Full-Stack Developer",
    period: "May 2025 — Present",
    description:
      "Working on ERP and CRM systems, building scalable MERN stack applications. Developing cross-platform mobile apps using React Native while improving backend performance and handling large datasets efficiently.",
    tags: ["MERN Stack", "React Native", "ERP", "CRM", "MongoDB", "Node.js"],
    current: true,
  },
  {
    company: "XMega",
    role: "Intern Full-Stack Developer",
    period: "Jan 2025 — Mar 2025",
    description:
      "Built responsive React + Node.js applications and improved page load speed by 25%. Worked with Firebase, MongoDB, and CI/CD pipelines while following Agile and Scrum practices.",
    tags: ["React", "Node.js", "Firebase", "MongoDB", "CI/CD", "Agile"],
    current: false,
  },
];

export default function ExperiencePage() {
  return (
    <div>
      <motion.h1
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-[38px] sm:text-[44px] font-bold text-white tracking-tight mb-8"
      >
        Experience
      </motion.h1>

      <div className="flex flex-col gap-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            custom={i + 1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative pl-6 pb-10 last:pb-0"
          >
            {/* Timeline line */}
            <div className="absolute left-0 top-1.5 bottom-0 w-px bg-[#1e1e1e]" />
            {/* Dot */}
            <div
              className={`absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border ${
                exp.current
                  ? "bg-emerald-500 border-emerald-700"
                  : "bg-[#222] border-[#333]"
              }`}
            />

            <div className="flex items-start justify-between gap-4 mb-1">
              <div>
                <h3 className="text-[15px] font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="text-[13px] text-[#777] mt-0.5">{exp.company}</p>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="text-[12px] text-[#444]">{exp.period}</span>
                {exp.current && (
                  <span className="text-[10px] text-emerald-400 border border-emerald-900 bg-emerald-950/40 px-2 py-0.5 rounded-full">
                    current
                  </span>
                )}
              </div>
            </div>

            <p className="text-[13.5px] text-[#555] leading-relaxed mb-3">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-[#555] bg-[#141414] border border-[#1e1e1e] px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

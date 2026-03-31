"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

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
            key={project.slug}
            custom={i + 2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              description={project.cardDescription}
              image={project.image || undefined}
              tags={project.tags}
              status={project.status}
              links={[
                ...(project.liveUrl ? [{ label: "Live Demo", href: project.liveUrl }] : []),
                ...(project.githubUrl ? [{ label: "GitHub", href: project.githubUrl }] : []),
              ]}
              href={`/projects/${project.slug}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

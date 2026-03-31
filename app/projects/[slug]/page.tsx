"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";
import { ExternalLink, Github } from "lucide-react";
import { getProjectBySlug } from "@/lib/projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4">Project not found</h1>
        <Link href="/projects" className="text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white underline">
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#666] dark:text-[#555] hover:text-[#1a1a1a] dark:hover:text-white transition-colors mb-8"
        >
          ← Back to Projects
        </Link>

        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-[32px] sm:text-[38px] font-bold text-[#1a1a1a] dark:text-white tracking-tight leading-tight">
            {project.title}
          </h1>
          <span className={`text-[10px] px-2.5 py-1 rounded-full shrink-0 mt-2 font-medium ${
            project.status === "active"
              ? "text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/40"
              : "text-[#666] dark:text-gray-400 border border-[#e5e5e5] dark:border-[#1e1e1e] bg-[#fafafa] dark:bg-[#141414]"
          }`}>
            {project.status}
          </span>
        </div>

        <p className="text-[16px] text-[#666] dark:text-gray-400 font-medium mb-4">
          {project.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-white bg-[#1a1a1a] dark:bg-white dark:text-[#0a0a0a] hover:bg-[#333] dark:hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1a1a1a] dark:text-white border border-[#e5e5e5] dark:border-white/20 hover:bg-[#f5f5f5] dark:hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
        </div>

        {/* Video/Image */}
        {project.video ? (
          <div className="w-full rounded-xl overflow-hidden bg-[#f5f5f5] dark:bg-[#141414] border border-[#e5e5e5] dark:border-[#1e1e1e] mb-8">
            <video
              src={project.video}
              controls
              className="w-full aspect-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ) : project.image ? (
          <div
            className="w-full rounded-xl overflow-hidden bg-[#f5f5f5] dark:bg-[#141414] border border-[#e5e5e5] dark:border-[#1e1e1e] mb-8"
            style={{ aspectRatio: "16/9" }}
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        ) : null}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[12px] text-[#666] dark:text-gray-400 bg-[#f5f5f5] dark:bg-[#141414] border border-[#e5e5e5] dark:border-[#1e1e1e] rounded px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="text-[15px] text-[#555] dark:text-[#888] leading-[1.85] space-y-6 mb-10">
          <p className="text-[16px] text-[#444] dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <div>
            <h2 className="text-[16px] font-medium text-[#1a1a1a] dark:text-white mb-3">
              The gist
            </h2>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#999] dark:text-gray-500">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Highlights */}
          <div>
            <h2 className="text-[16px] font-medium text-[#1a1a1a] dark:text-white mb-3">
              Tech
            </h2>
            <ul className="space-y-2">
              {project.techHighlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#999] dark:text-gray-500">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

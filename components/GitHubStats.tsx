"use client";

import { Github, GitFork, Star, Code2 } from "lucide-react";

interface GitHubStatsProps {
  username: string;
}

export default function GitHubStats({ username }: GitHubStatsProps) {
  return (
    <div className="border border-[#e5e5e5] dark:border-white/10 rounded-xl p-5 bg-white dark:bg-white/5 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Github className="w-5 h-5 text-[#1a1a1a] dark:text-white" />
          <span className="text-[14px] font-semibold text-[#1a1a1a] dark:text-white">
            GitHub Activity
          </span>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
        >
          @{username} →
        </a>
      </div>

      {/* Contribution Graph - Using GitHub's official embed */}
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={`https://ghchart.rshah.org/1a1a1a/${username}`}
          alt={`${username}'s GitHub contribution chart`}
          className="w-full dark:hidden"
        />
        <img
          src={`https://ghchart.rshah.org/4ade80/${username}`}
          alt={`${username}'s GitHub contribution chart`}
          className="w-full hidden dark:block"
        />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <a
          href={`https://github.com/${username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-3 rounded-lg bg-[#f5f5f5] dark:bg-white/5 hover:bg-[#eee] dark:hover:bg-white/10 transition-colors group"
        >
          <Code2 className="w-4 h-4 text-[#666] dark:text-gray-400 group-hover:text-[#1a1a1a] dark:group-hover:text-white mb-1 transition-colors" />
          <span className="text-[11px] text-[#666] dark:text-gray-400 group-hover:text-[#1a1a1a] dark:group-hover:text-white transition-colors">
            Repositories
          </span>
        </a>

        <a
          href={`https://github.com/${username}?tab=stars`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-3 rounded-lg bg-[#f5f5f5] dark:bg-white/5 hover:bg-[#eee] dark:hover:bg-white/10 transition-colors group"
        >
          <Star className="w-4 h-4 text-[#666] dark:text-gray-400 group-hover:text-[#1a1a1a] dark:group-hover:text-white mb-1 transition-colors" />
          <span className="text-[11px] text-[#666] dark:text-gray-400 group-hover:text-[#1a1a1a] dark:group-hover:text-white transition-colors">
            Stars
          </span>
        </a>

        <a
          href={`https://github.com/${username}?tab=followers`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-3 rounded-lg bg-[#f5f5f5] dark:bg-white/5 hover:bg-[#eee] dark:hover:bg-white/10 transition-colors group"
        >
          <GitFork className="w-4 h-4 text-[#666] dark:text-gray-400 group-hover:text-[#1a1a1a] dark:group-hover:text-white mb-1 transition-colors" />
          <span className="text-[11px] text-[#666] dark:text-gray-400 group-hover:text-[#1a1a1a] dark:group-hover:text-white transition-colors">
            Contributions
          </span>
        </a>
      </div>
    </div>
  );
}

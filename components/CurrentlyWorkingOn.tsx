"use client";

import { Zap } from "lucide-react";

interface CurrentlyWorkingOnProps {
  items: {
    title: string;
    description: string;
    status: "building" | "learning" | "exploring";
  }[];
}

const statusColors = {
  building: "bg-green-500",
  learning: "bg-blue-500",
  exploring: "bg-purple-500",
};

const statusLabels = {
  building: "Building",
  learning: "Learning",
  exploring: "Exploring",
};

export default function CurrentlyWorkingOn({ items }: CurrentlyWorkingOnProps) {
  return (
    <div className="border border-[#e5e5e5] dark:border-white/10 rounded-xl p-5 bg-white dark:bg-white/5 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-yellow-500" />
        <span className="text-[14px] font-semibold text-[#1a1a1a] dark:text-white">
          Currently Working On
        </span>
        <span className="relative flex h-2 w-2 ml-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-3 rounded-lg bg-[#f5f5f5] dark:bg-white/5 transition-colors"
          >
            <div className={`w-2 h-2 rounded-full mt-1.5 ${statusColors[item.status]}`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[13px] font-medium text-[#1a1a1a] dark:text-white truncate">
                  {item.title}
                </span>
                <span className="text-[10px] text-[#666] dark:text-gray-500 bg-[#e5e5e5] dark:bg-white/10 px-1.5 py-0.5 rounded">
                  {statusLabels[item.status]}
                </span>
              </div>
              <p className="text-[12px] text-[#666] dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

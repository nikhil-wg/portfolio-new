"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ExternalLink, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import RotatingText from "@/components/RotatingText";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://x.com/nikhil_twt",
    label: "X",
    icon: Twitter
  },
  {
    href: "https://www.linkedin.com/in/nikhil-wg/",
    label: "LinkedIn",
    icon: Linkedin
  },
  {
    href: "https://github.com/nikhil-wg",
    label: "GitHub",
    icon: Github
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.aside
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 h-screen w-[220px] flex flex-col pt-8 pb-6 px-5 border-r border-[#e5e5e5] dark:border-white/10 bg-white dark:bg-[#0f0f0f] overflow-y-auto z-50 transition-colors duration-300"
    >
      {/* Profile Section */}
      <div className="mb-6">
        {/* Profile Image */}
        <div className="mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <Image
              src="/8gXCURRZ_400x400.jpg"
              alt="Nikhil"
              width={64}
              height={64}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Name with typing cursor */}
        <div className="flex items-center gap-0 text-[16px] font-semibold text-[#1a1a1a] dark:text-white mb-1 transition-colors duration-300">
          <span>Nikhil Wagh</span>
          <span className="cursor-blink ml-0.5">|</span>
        </div>
        <RotatingText
          texts={[
            "Problem Solver",
            "Full Stack Developer",
            "AI Engineer",
            "Builder",
            "Tech Enthusiast",
          ]}
          interval={2500}
          className="text-[13px] text-[#666] dark:text-gray-400 transition-colors duration-300"
        />
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 text-[13px] px-3 py-2 mb-6 text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white transition-all duration-150 rounded-lg hover:bg-[#fafafa] dark:hover:bg-white/5 group"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <>
            <Moon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Dark Mode</span>
          </>
        ) : (
          <>
            <Sun className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Light Mode</span>
          </>
        )}
      </button>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 mb-8">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13.5px] px-3 py-2 rounded-lg transition-all duration-150 ${
                isActive
                  ? "text-[#1a1a1a] dark:text-white bg-[#f5f5f5] dark:bg-white/10 font-medium"
                  : "text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white hover:bg-[#fafafa] dark:hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Connect */}
      <div className="mt-auto">
        <p className="text-[11px] uppercase tracking-wider text-[#999] dark:text-gray-500 font-semibold mb-3 px-3 transition-colors duration-300">
          Connect
        </p>
        <div className="flex flex-col gap-1">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 text-[13px] px-3 py-2 text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white transition-all duration-150 rounded-lg hover:bg-[#fafafa] dark:hover:bg-white/5 group"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{link.label}</span>
                </div>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
              </a>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
}

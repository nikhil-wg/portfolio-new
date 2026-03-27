"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/tools", label: "Tools" },
];

const socialLinks = [
  { href: "https://x.com/nikhil_twt", label: "X", icon: Twitter },
  { href: "https://www.linkedin.com/in/nikhil-wg/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/nikhil-wg", label: "GitHub", icon: Github },
];

export default function MobileHeader() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-14 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#e5e5e5] dark:border-white/10"
          : "bg-white dark:bg-[#0a0a0a] border-b border-[#e5e5e5] dark:border-white/10"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-[#1a1a1a] dark:text-white font-bold text-xs transition-colors duration-300">
          NW
        </div>
        <span className="text-[15px] font-semibold text-[#1a1a1a] dark:text-white flex items-center transition-colors duration-300">
          Nikhil<span className="cursor-blink ml-0.5">|</span>
        </span>
      </Link>

      {/* Right side - Theme toggle + Hamburger */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white transition-colors p-1"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 left-0 right-0 bg-white dark:bg-[#0f0f0f] border-b border-[#e5e5e5] dark:border-white/10 px-5 py-4 flex flex-col gap-1 shadow-md dark:shadow-2xl dark:shadow-white/5"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "text-[#1a1a1a] dark:text-white bg-[#f5f5f5] dark:bg-white/10 font-medium"
                      : "text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white hover:bg-[#fafafa] dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="border-t border-[#e5e5e5] dark:border-white/10 mt-2 pt-3">
              <p className="text-[11px] uppercase tracking-wider text-[#999] dark:text-gray-500 font-semibold mb-2 px-3">
                Connect
              </p>
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] py-2 px-3 text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white transition-colors rounded-lg hover:bg-[#fafafa] dark:hover:bg-white/5"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

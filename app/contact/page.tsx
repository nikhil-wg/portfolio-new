"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const contactLinks = [
  {
    label: "Email",
    value: "nikhil.waghh@gmail.com",
    href: "mailto:nikhil.waghh@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/nikhil-wg",
    href: "https://github.com/nikhil-wg",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nikhil-wg",
    href: "https://www.linkedin.com/in/nikhil-wg/",
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <div>
      <motion.h1
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-[38px] sm:text-[44px] font-bold text-white tracking-tight mb-4"
      >
        Contact
      </motion.h1>

      <motion.h2
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-[18px] sm:text-[20px] text-[#666] font-medium leading-snug mb-10 max-w-lg"
      >
        Let&apos;s connect! Feel free to reach out for collaborations, project discussions, or just to say hi.
      </motion.h2>

      <div className="flex flex-col gap-4">
        {contactLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.label}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 border border-[#1e1e1e] rounded-xl hover:border-[#2a2a2a] hover:bg-[#0e0e0e] transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center group-hover:border-[#333] group-hover:bg-[#1a1a1a] transition-all duration-200">
                <Icon className="w-5 h-5 text-[#666] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-[13px] text-[#888] mb-0.5">{link.label}</p>
                <p className="text-[14px] text-white group-hover:text-emerald-400 transition-colors">
                  {link.value}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

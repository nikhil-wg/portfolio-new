"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function BlogDetailPage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#555] hover:text-white transition-colors mb-8"
        >
          ← Blogs
        </Link>

        <p className="text-[11px] uppercase tracking-widest text-[#444] font-semibold mb-3">
          Featured
        </p>

        <h1 className="text-[32px] sm:text-[38px] font-bold text-white tracking-tight leading-tight mb-4">
          The Long Flight Test
        </h1>

        <p className="text-[13px] text-[#444] mb-8">March 2025 · 4 min read</p>

        <div className="prose prose-sm max-w-none text-[14.5px] text-[#5a5a5a] leading-[1.85] space-y-5">
          <p>
            There&apos;s a thought experiment I keep coming back to when evaluating
            relationships — professional, personal, or otherwise. I call it the
            Long Flight Test.
          </p>
          <p>
            The question is simple: <em className="text-[#888]">Would you genuinely want to sit next to this
            person on a long, say 12-hour, flight?</em>
          </p>
          <p>
            Not because you have to. Not out of politeness. But because their
            presence would make the journey better — more interesting, more
            comfortable, more alive.
          </p>
          <p>
            It&apos;s a deceptively revealing filter. A long flight strips away
            performative pleasantries. You&apos;re stuck. There&apos;s no agenda, no
            deliverable, no easy exit. It&apos;s just time and conversation — or the
            comfortable lack of it.
          </p>
          <p>
            The people who pass the Long Flight Test are the ones worth holding
            onto. They make time disappear. They ask real questions and actually
            listen to the answers. They share stories that aren&apos;t just résumé
            bullets. They&apos;re curious without being performative, relaxed without
            being disengaged.
          </p>
          <p>
            Apply it to your team. Apply it to your friendships. Apply it to
            yourself — would someone want to sit next to you?
          </p>
        </div>
      </motion.div>

    </div>
  );
}

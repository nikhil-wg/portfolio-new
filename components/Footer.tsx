import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-[#e5e5e5] dark:border-white/10 py-6 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <Link
          href="/contact"
          className="text-[13px] text-[#666] dark:text-gray-400 hover:text-[#1a1a1a] dark:hover:text-white transition-colors"
        >
          Reach out →
        </Link>
        <p className="text-[12px] text-[#999] dark:text-gray-500 transition-colors duration-300">
          Made by Nikhil Wagh | © {year}
        </p>
      </div>
    </footer>
  );
}

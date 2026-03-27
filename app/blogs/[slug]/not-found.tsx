import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-[48px] font-bold text-[#1a1a1a] dark:text-white">
          404
        </h1>
        <h2 className="text-[24px] font-semibold text-[#1a1a1a] dark:text-white">
          Blog Not Found
        </h2>
        <p className="text-[16px] text-[#666] dark:text-gray-400">
          The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
      </div>

      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-[14px] px-5 py-2.5 bg-[#1a1a1a] dark:bg-white text-white dark:text-black rounded-lg hover:bg-[#000] dark:hover:bg-gray-200 transition-colors duration-150 font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Blogs</span>
      </Link>
    </div>
  );
}

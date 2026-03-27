import { supabase } from "@/lib/supabase";
import BlogList from "@/components/BlogList";

// Using Server Component for data fetching
export const revalidate = 60; // Revalidate every 60 seconds

async function getBlogs() {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }

  return data || [];
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-[38px] sm:text-[44px] font-bold text-[#1a1a1a] dark:text-white tracking-tight leading-tight mb-2 transition-colors duration-300">
          Blogs
        </h1>
        <p className="text-[16px] text-[#666] dark:text-gray-400 transition-colors duration-300">
          AI engineering, product thinking, and life.
        </p>
      </div>

      {/* Blog Grid */}
      <BlogList blogs={blogs} />
    </div>
  );
}

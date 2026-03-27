import { supabase, Blog } from "@/lib/supabase";
import BlogContent from "@/components/BlogContent";
import { notFound } from "next/navigation";

// Generate static params for all blogs
export async function generateStaticParams() {
  const { data: blogs } = await supabase
    .from("blogs")
    .select("slug")
    .eq("published", true);

  return blogs?.map((blog) => ({ slug: blog.slug })) || [];
}

// Fetch blog by slug
async function getBlog(slug: string): Promise<Blog | null> {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error("Error fetching blog:", error);
    return null;
  }

  return data;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} — Nikhil Wagh`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.cover_image ? [blog.cover_image] : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  return <BlogContent blog={blog} />;
}

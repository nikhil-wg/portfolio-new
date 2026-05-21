import { getBlogs, getBlog, Blog } from "@/lib/blogs";
import BlogContent from "@/components/BlogContent";
import { notFound } from "next/navigation";

// Generate static params for all blogs
export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs?.map((blog) => ({ slug: blog.slug })) || [];
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
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
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

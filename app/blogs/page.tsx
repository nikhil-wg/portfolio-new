import BlogList, { HashnodePost } from "@/components/BlogList";

// Using Server Component for data fetching
export const revalidate = 3600; // Revalidate every hour since it's a blog

async function getBlogs(): Promise<HashnodePost[]> {
  const query = `
    query Publication {
      publication(host: "nikhilwagh.hashnode.dev") {
        posts(first: 10) {
          edges {
            node {
              title
              brief
              slug
              publishedAt
              readTimeInMinutes
              coverImage {
                url
              }
              tags {
                name
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      return [];
    }

    const text = await res.text();
    try {
      const { data } = JSON.parse(text);
      return data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];
    } catch (parseError) {
      console.error("Error parsing Hashnode JSON response:", parseError);
      console.error("Raw response:", text.substring(0, 200));
      return [];
    }
  } catch (error) {
    console.error("Error fetching Hashnode blogs:", error);
    return [];
  }
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

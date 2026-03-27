# Supabase Blog Integration

This portfolio uses Supabase as the backend for blog posts.

## Setup

1. **Environment Variables**
   - `.env.local` file contains Supabase credentials
   - Variables:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. **Database Schema**

   The `blogs` table should have the following structure:

   ```sql
   CREATE TABLE blogs (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     title TEXT NOT NULL,
     slug TEXT UNIQUE NOT NULL,
     content TEXT NOT NULL,
     excerpt TEXT,
     cover_image TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     published BOOLEAN DEFAULT false
   );

   -- Add index for better query performance
   CREATE INDEX idx_blogs_slug ON blogs(slug);
   CREATE INDEX idx_blogs_published ON blogs(published);
   CREATE INDEX idx_blogs_created_at ON blogs(created_at DESC);
   ```

3. **Row Level Security (RLS)**

   Enable RLS and create policies to allow public read access:

   ```sql
   -- Enable RLS
   ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

   -- Allow public read access to published blogs
   CREATE POLICY "Public blogs are viewable by everyone"
   ON blogs FOR SELECT
   USING (published = true);

   -- Allow authenticated users to manage blogs (optional)
   CREATE POLICY "Authenticated users can insert blogs"
   ON blogs FOR INSERT
   TO authenticated
   WITH CHECK (true);

   CREATE POLICY "Authenticated users can update blogs"
   ON blogs FOR UPDATE
   TO authenticated
   USING (true);
   ```

## File Structure

```
/lib/supabase.ts          # Supabase client & types
/components/
  BlogCard.tsx            # Blog card component (reusable)
  BlogList.tsx            # Grid of blog cards
  BlogContent.tsx         # Full blog content display
/app/blogs/
  page.tsx                # Blog listing page (Server Component)
  loading.tsx             # Loading state for listing
  [slug]/
    page.tsx              # Dynamic blog detail page
    loading.tsx           # Loading state for detail
    not-found.tsx         # 404 page for invalid slugs
```

## Usage

### Adding a New Blog Post

Use the Supabase dashboard or API to insert a new blog:

```javascript
const { data, error } = await supabase
  .from('blogs')
  .insert([
    {
      title: 'My First Blog Post',
      slug: 'my-first-blog-post',
      excerpt: 'A brief description of the blog post',
      content: '<p>Full HTML content of the blog post...</p>',
      cover_image: 'https://example.com/image.jpg',
      published: true
    }
  ]);
```

### Fetching Blogs

The blog pages use Server Components for optimal performance:

```typescript
// Get all published blogs
const { data } = await supabase
  .from("blogs")
  .select("*")
  .eq("published", true)
  .order("created_at", { ascending: false });

// Get single blog by slug
const { data } = await supabase
  .from("blogs")
  .select("*")
  .eq("slug", slug)
  .eq("published", true)
  .single();
```

## Features

✅ Server-side rendering for SEO
✅ Automatic static generation for blog pages
✅ ISR (Incremental Static Regeneration) every 60 seconds
✅ Dark mode support
✅ Loading states
✅ 404 handling
✅ Responsive design
✅ Optimized images with Next.js Image component
✅ Framer Motion animations
✅ Glassmorphism cards in dark mode

## Content Format

Blog content should be in HTML format. Supported elements:

- Headings (`<h1>`, `<h2>`, `<h3>`, etc.)
- Paragraphs (`<p>`)
- Links (`<a>`)
- Code blocks (`<pre><code>`)
- Inline code (`<code>`)
- Lists (`<ul>`, `<ol>`, `<li>`)
- Blockquotes (`<blockquote>`)
- Bold/Strong (`<strong>`, `<b>`)
- Italic/Emphasis (`<em>`, `<i>`)

The BlogContent component uses Tailwind Typography for automatic styling.

## Performance

- **Server Components**: Data fetching happens on the server
- **Static Generation**: Blog pages are pre-rendered at build time
- **Revalidation**: Pages revalidate every 60 seconds (configurable)
- **Image Optimization**: Uses Next.js image optimization
- **Caching**: Supabase client automatically caches responses

## Dark Mode

All blog components support dark mode using Tailwind's `dark:` classes:

- Light theme: Clean white backgrounds
- Dark theme: Glassmorphism with `bg-white/5` and `backdrop-blur`
- Smooth transitions between themes
- Optimized for readability in both modes

## SEO

Each blog post generates proper metadata:

- Page title: `{blog.title} — Nikhil Wagh`
- Meta description: Uses blog excerpt
- Open Graph tags for social sharing
- Dynamic metadata generation in `generateMetadata()`

## Troubleshooting

1. **Blogs not loading**: Check Supabase credentials in `.env.local`
2. **RLS errors**: Ensure RLS policies allow public read access
3. **404 on all blogs**: Verify `published = true` in database
4. **Slow loading**: Check network tab for Supabase response times
5. **Styling issues**: Ensure Tailwind is properly configured with dark mode

## Next Steps

- Add blog categories/tags
- Add search functionality
- Add pagination for large blog lists
- Add related posts section
- Add reading time estimation
- Add blog comments (with Supabase auth)
- Add admin dashboard for content management

# Portfolio — amankumar.ai Clone

A pixel-perfect Next.js clone of [amankumar.ai](https://amankumar.ai), built with:

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with sidebar + mobile header
│   ├── globals.css         # Global styles
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── blogs/
│   │   ├── page.tsx
│   │   └── the-long-flight-test/
│   │       └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── tools/
│   │   └── page.tsx
│   └── not-found.tsx
│
├── components/
│   ├── Sidebar.tsx         # Left sidebar nav (desktop)
│   ├── MobileHeader.tsx    # Top nav with drawer (mobile)
│   ├── Footer.tsx          # Page footer
│   ├── XFollowCard.tsx     # Twitter/X follow card
│   ├── ProjectCard.tsx     # Project grid card
│   └── BlogCard.tsx        # Blog list card
│
├── public/
│   └── images/
│
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

## Design Details

- **Background**: `#0c0c0c` — near-black
- **Surface**: `#0e0e0e–#111111`
- **Borders**: `#1e1e1e–#222222`
- **Muted text**: `#444–#666`
- **Body text**: `#5a5a5a–#777`
- **Headings**: `#ffffff`
- **Active badge**: Emerald green
- **Font**: Inter (system-native feel)

## Customization

1. Replace all placeholder names/links in `app/page.tsx` and `components/Sidebar.tsx`
2. Add real project images to `public/images/`
3. Update social links throughout
4. Add your own blog posts under `app/blogs/[slug]/`

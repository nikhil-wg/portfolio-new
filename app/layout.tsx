import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Nikhil Wagh — Full Stack Developer & AI Enthusiast",
  description:
    "Full-Stack Developer skilled in MERN stack, Next.js, and AI applications. Building scalable and intelligent systems.",
  icons: {
    icon: "/8gXCURRZ_400x400.jpg",
    shortcut: "/8gXCURRZ_400x400.jpg",
    apple: "/8gXCURRZ_400x400.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    // Check system preference
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      document.documentElement.classList.add('dark');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#f5f5f5] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-[#e5e5e5] antialiased transition-colors duration-300">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

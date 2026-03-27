"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      {/* Mobile Header — shown only on small screens */}
      <div className="lg:hidden">
        <MobileHeader />
      </div>

      {/* Sidebar — hidden on mobile, fixed on desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main content wrapper with footer */}
      <div className="min-h-screen flex flex-col pt-14 lg:pt-0 lg:ml-[220px]">
        {/* Main content - grows to fill space */}
        <main className="flex-grow">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 py-10 lg:py-12">
            {children}
          </div>
        </main>

        {/* Footer - stays at bottom */}
        <div className="max-w-3xl mx-auto px-6 lg:px-10 w-full">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

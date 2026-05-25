"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { StarsBackground } from "@/components/ui/stars";

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
      <StarsBackground className="relative flex flex-col min-h-screen pt-14 lg:pt-0 lg:ml-[220px]">
        {/* Main content - grows to fill space */}
        <main className="relative z-10 flex-grow">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 py-10 lg:py-12">
            {children}
          </div>
        </main>

        {/* Footer - stays at bottom */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 w-full">
          <Footer />
        </div>
      </StarsBackground>
    </ThemeProvider>
  );
}

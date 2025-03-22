import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";
import PageLayout from "@/components/PageLayout";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SADH Care Hospital - Care Compassion Empathy",
  description: "SADH Care Hospital - Your trusted healthcare partner providing quality medical services with Care, Compassion, and Empathy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="/js/translations.js" strategy="afterInteractive" />
        <meta name="color-scheme" content="light dark" />
        {/* Prevent theme flickering script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Check for dark mode preference
                function getThemePreference() {
                  if (typeof window !== 'undefined' && window.localStorage) {
                    // Check if theme is stored in localStorage
                    const storedTheme = window.localStorage.getItem('theme');
                    if (storedTheme) {
                      return storedTheme;
                    }
                    
                    // Otherwise check system preference
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      return 'dark';
                    }
                  }
                  return 'light'; // Default theme
                }
                
                // Apply theme immediately to prevent flashing
                const theme = getThemePreference();
                document.documentElement.classList.toggle('dark', theme === 'dark');
                
                // Add a class to handle theme transition instead of using inline styles
                document.documentElement.classList.add('theme-transition');
                
                // Remove the transition class after a delay to allow smooth transitions after initial load
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    document.documentElement.classList.remove('theme-transition');
                  }, 300);
                });
              })();
            `,
          }}
        />
        {/* Add CSS to handle theme transition in a way that doesn't cause hydration mismatches */}
        <style>
          {`
            .theme-transition { 
              opacity: 0;
            }
            html:not(.theme-transition) { 
              transition: opacity 0.3s ease-in; 
              opacity: 1;
            }
          `}
        </style>
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>
          <PageLayout>
            {children}
          </PageLayout>
        </Providers>
      </body>
    </html>
  );
}

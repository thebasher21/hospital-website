'use client';

import { ReactNode, useState, useEffect } from 'react';
import PageTransitionLoader from '@/components/PageTransitionLoader';
import RouterChangeListener from '@/components/RouterChangeListener';
import NavigationEvents from '@/components/NavigationEvents';
import ThemeProvider from '@/components/ThemeProvider';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [isNavigating, setIsNavigating] = useState(false);
  
  const handleRouteChangeStart = () => {
    setIsNavigating(true);
  };
  
  const handleRouteChangeComplete = () => {
    setIsNavigating(false);
  };
  
  // Add a global click handler for all internal links to fix GitHub Pages navigation
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleLinkClicks = (e: MouseEvent) => {
        // Find the closest anchor tag
        let el = e.target as HTMLElement;
        while (el && el.tagName !== 'A') {
          el = el.parentElement as HTMLElement;
        }
        
        // If it's an anchor tag with href
        if (el && el.tagName === 'A') {
          const href = el.getAttribute('href');
          // Only handle internal links
          if (href && href.startsWith('/hospital-website') && !href.startsWith('http')) {
            e.preventDefault();
            window.location.href = `https://thebasher21.github.io${href}`;
            return false;
          }
        }
      };
      
      document.addEventListener('click', handleLinkClicks);
      return () => document.removeEventListener('click', handleLinkClicks);
    }
  }, []);
  
  return (
    <ThemeProvider>
      {/* Use both navigation detection methods for maximum reliability */}
      <RouterChangeListener 
        onRouteChangeStart={handleRouteChangeStart}
        onRouteChangeComplete={handleRouteChangeComplete}
      />
      <NavigationEvents setIsNavigating={setIsNavigating} />
      
      {/* Loading UI */}
      <PageTransitionLoader isLoading={isNavigating} />
      
      {children}
    </ThemeProvider>
  );
} 
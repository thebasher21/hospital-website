'use client';

import { ReactNode, useEffect, useState } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Flag that we're mounted to prevent any server/client mismatches
    setMounted(true);
    
    // Get stored theme preference or system preference
    const getThemePreference = () => {
      // Check if theme is stored in localStorage
      if (typeof window !== 'undefined' && window.localStorage) {
        const storedTheme = window.localStorage.getItem('theme');
        if (storedTheme) {
          return storedTheme === 'dark';
        }
      }
      
      // Fall back to system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };
    
    // Apply dark mode if preferred
    const applyTheme = (isDark: boolean) => {
      document.documentElement.classList.toggle('dark', isDark);
      
      // Store preference
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }
    };
    
    // Initial application of theme
    applyTheme(getThemePreference());
    
    // Listen for changes in system preferences
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only apply system preference changes if user hasn't set a preference
      if (!window.localStorage.getItem('theme')) {
        applyTheme(e.matches);
      }
    };
    
    // Add event listener
    mediaQuery.addEventListener('change', handleChange);
    
    // Cleanup on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  // This helps prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }
  
  return <>{children}</>;
} 
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize state based on current theme
  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    // Add transition class for smooth theme change
    document.documentElement.classList.add('theme-transition');
    
    // Update class on document
    document.documentElement.classList.toggle('dark', newIsDark);
    
    // Store preference
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    }
    
    // Remove transition class after the transition is complete
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 300);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null;

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full w-10 h-10 bg-blue-800/30 hover:bg-blue-700/50 dark:bg-blue-700/30 dark:hover:bg-blue-600/50 transition-all duration-200 border border-blue-400/20 dark:border-blue-300/10"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-100" />
      )}
    </Button>
  );
} 
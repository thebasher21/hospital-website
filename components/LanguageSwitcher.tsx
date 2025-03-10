'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState<string>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
      setCurrentLocale(storedLanguage);
    } else {
      // Default to browser language detection
      const browserLang = navigator.language || (navigator as any).userLanguage;
      const detectedLocale = browserLang.includes('hi') ? 'hi' : 'en';
      setCurrentLocale(detectedLocale);
      localStorage.setItem('preferredLanguage', detectedLocale);
    }
  }, []);

  const handleLanguageChange = (locale: string) => {
    localStorage.setItem('preferredLanguage', locale);
    setCurrentLocale(locale);
    document.documentElement.lang = locale;
    window.location.reload(); // Reload the page to apply language change
  };

  // Only render in client-side
  if (!mounted) return null;

  return (
    <div className="flex space-x-2">
      <Button 
        variant="ghost" 
        size="sm"
        className={cn(
          "px-2 py-1 text-sm", 
          currentLocale === 'en' 
            ? "bg-blue-700 text-white hover:bg-blue-800 hover:text-white" 
            : "text-white hover:bg-blue-700"
        )}
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
      >
        EN
      </Button>
      <Button 
        variant="ghost" 
        size="sm"
        className={cn(
          "px-2 py-1 text-sm", 
          currentLocale === 'hi' 
            ? "bg-blue-700 text-white hover:bg-blue-800 hover:text-white" 
            : "text-white hover:bg-blue-700"
        )}
        onClick={() => handleLanguageChange('hi')}
        aria-label="हिंदी में बदलें"
      >
        हिं
      </Button>
    </div>
  );
} 
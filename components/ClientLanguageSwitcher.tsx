'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export default function ClientLanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState<string>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
      setCurrentLocale(storedLanguage);
    } else {
      // Default to browser language detection
      const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || '';
      const detectedLocale = browserLang.includes('hi') ? 'hi' : 'en';
      setCurrentLocale(detectedLocale);
      localStorage.setItem('preferredLanguage', detectedLocale);
    }
  }, []);

  const handleLanguageChange = (locale: string) => {
    // Set language in localStorage
    localStorage.setItem('preferredLanguage', locale);
    setCurrentLocale(locale);
    document.documentElement.lang = locale;
    
    // Trigger manual translation application via a custom event
    const event = new Event('languageChanged');
    window.dispatchEvent(event);
    
    // Reload the page to apply language change
    window.location.reload();
  };

  // Only render in client-side
  if (!mounted) return null;

  return (
    <div className="flex space-x-2">
      <Button
        variant={currentLocale === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => handleLanguageChange('en')}
        className="font-medium"
      >
        EN
      </Button>
      <Button
        variant={currentLocale === 'hi' ? 'default' : 'outline'}
        size="sm"
        onClick={() => handleLanguageChange('hi')}
        className="font-medium"
      >
        हिन्दी
      </Button>
    </div>
  );
} 
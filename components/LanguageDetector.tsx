'use client';

import { useEffect, useState } from 'react';

export default function LanguageDetector() {
  const [hasMounted, setHasMounted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<string | null>(null);
  
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      setHasMounted(true);
      
      // Get browser language
      const browserLang = navigator.language || (navigator as any).userLanguage;
      
      // Set Hindi if detected, otherwise English
      const detectedLocale = browserLang.includes('hi') ? 'hi' : 'en';
      
      // Store in local storage and set current state
      if (!localStorage.getItem('preferredLanguage')) {
        localStorage.setItem('preferredLanguage', detectedLocale);
        setCurrentLanguage(detectedLocale);
      } else {
        setCurrentLanguage(localStorage.getItem('preferredLanguage'));
      }
      
      // Set HTML lang attribute
      document.documentElement.lang = localStorage.getItem('preferredLanguage') || detectedLocale;
    }
  }, []);
  
  return null; // This component doesn't render anything
} 
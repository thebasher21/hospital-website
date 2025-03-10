'use client';

import { useEffect } from 'react';

export default function LanguageDetector() {
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      // Get browser language
      const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || '';
      
      // Set Hindi if detected, otherwise English
      const detectedLocale = browserLang.includes('hi') ? 'hi' : 'en';
      
      // Store in local storage
      if (!localStorage.getItem('preferredLanguage')) {
        localStorage.setItem('preferredLanguage', detectedLocale);
      }
      
      // Set HTML lang attribute
      document.documentElement.lang = localStorage.getItem('preferredLanguage') || detectedLocale;
    }
  }, []);
  
  return null; // This component doesn't render anything
} 
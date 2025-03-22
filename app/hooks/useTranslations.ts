'use client';

import { useState, useEffect } from 'react';

// Use unknown to avoid circular references
export type TranslationData = Record<string, unknown>;

export function useTranslations() {
  const [translations, setTranslations] = useState<TranslationData>({});
  const [language, setLanguage] = useState<string>('en');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch translations on initial load
  useEffect(() => {
    const fetchTranslations = async () => {
      setIsLoading(true);
      try {
        // Get preferred language from local storage or detect from browser
        let preferredLanguage = localStorage.getItem('preferredLanguage');
        
        if (!preferredLanguage) {
          // Detect browser language
          const browserLang = navigator.language;
          preferredLanguage = browserLang.includes('hi') ? 'hi' : 'en';
          localStorage.setItem('preferredLanguage', preferredLanguage);
        }
        
        setLanguage(preferredLanguage);
        
        // Load translations
        const response = await fetch(`/translations/${preferredLanguage}.json`);
        if (!response.ok) throw new Error('Failed to load translations');
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Error loading translations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslations();
  }, []);
  
  // Set up listener for language changes
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'preferredLanguage' && e.newValue !== language) {
        window.location.reload();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [language]);

  const getTranslation = (key: string): unknown => {
    if (!key) return '';
    
    const keys = key.split('.');
    let current: unknown = translations;
    
    for (const k of keys) {
      if (!current || typeof current !== 'object' || current === null) return '';
      current = (current as Record<string, unknown>)[k];
      if (current === undefined) return '';
    }
    
    return current;
  };

  return {
    translations,
    language,
    isLoading,
    getTranslation
  };
} 
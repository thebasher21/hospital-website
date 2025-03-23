'use client';

import { useState, useEffect } from 'react';
import { getBasePath } from '@/lib/utils';

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
        
        // Load translations with the correct base path for GitHub Pages
        const response = await fetch(getBasePath(`/translations/${preferredLanguage}.json`));
        if (!response.ok) throw new Error('Failed to load translations');
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to default slides if translations fail
        setTranslations({
          hero: {
            carousel: {
              slides: [
                {
                  title: "Your health is our priority",
                  description: "Care · Compassion · Empathy",
                  image: getBasePath("/images/infrastructure/hospitalBuilding.jpg")
                },
                {
                  title: "24 x 7 Open",
                  description: "Emergency services available round the clock",
                  image: getBasePath("/images/services/24x7Open.jpg")
                }
              ]
            }
          }
        });
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
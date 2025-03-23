'use client';

import Script from "next/script";
import { useEffect } from 'react';

export default function ClientScripts() {
  // Language detection
  useEffect(() => {
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

  // Theme detection and application
  useEffect(() => {
    // Get stored theme preference or system preference
    const getThemePreference = () => {
      if (typeof window !== 'undefined' && window.localStorage) {
        // Check if theme is stored in localStorage
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

  return (
    <>
      <Script src="/js/translations.js" strategy="afterInteractive" />
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
      {/* GitHub Pages redirect handling script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Check if there's a redirect parameter in the URL
              const urlParams = new URLSearchParams(window.location.search);
              const redirectPath = urlParams.get('redirect');
              
              // If there is a redirect parameter and we're not already on that page
              if (redirectPath && window.location.pathname.indexOf(redirectPath) === -1) {
                // Remove the redirect parameter from URL
                urlParams.delete('redirect');
                const newQueryString = urlParams.toString();
                const newPath = '/hospital-website' + redirectPath;
                
                // Replace the current state with the correct path without reloading
                const newUrl = newPath + (newQueryString ? '?' + newQueryString : '');
                window.history.replaceState(null, null, newUrl);
              }
            })();
          `,
        }}
      />
    </>
  );
} 
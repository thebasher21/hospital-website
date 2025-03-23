'use client';

import { useRouter } from "next/navigation";
import { getBasePath } from "./utils";

/**
 * Navigate to a path using full GitHub Pages URL in production
 * or client-side routing in development
 */
export function navigateToPage(path: string): void {
  // Dispatch event to trigger loading state
  window.dispatchEvent(new CustomEvent('routeChangeStart'));
  
  if (process.env.NODE_ENV === 'production') {
    // Use direct URL for GitHub Pages
    setTimeout(() => {
      window.location.href = getBasePath(path);
    }, 50);
  } else {
    // Let Next.js handle client-side routing in development
    // This is handled by Link components
  }
}

/**
 * Custom hook for handling navigation with Next.js
 * Works with both production and development environments
 */
export function useNavigation() {
  const router = useRouter();
  
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // Prevent default navigation
    e.preventDefault();
    
    // Dispatch custom events for the RouterChangeListener to detect
    window.dispatchEvent(new CustomEvent('routeChangeStart'));
    
    if (process.env.NODE_ENV === 'production') {
      // For production (GitHub Pages), use direct URL navigation
      // Short timeout to allow loading indicator to show
      setTimeout(() => {
        window.location.href = getBasePath(path);
      }, 100);
    } else {
      // For development, use Next.js router
      setTimeout(() => {
        router.push(path);
      }, 100);
    }
  };
  
  return { handleNavigation };
} 
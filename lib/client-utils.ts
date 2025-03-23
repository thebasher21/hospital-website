'use client';

import { useRouter } from "next/navigation";
import { getBasePath } from "./utils";

/**
 * Navigate to a path using full GitHub Pages URL in production
 * or client-side routing in development
 */
export function navigateToPage(path: string): void {
  if (process.env.NODE_ENV === 'production') {
    // Use direct URL for GitHub Pages
    window.location.href = getBasePath(path);
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
    if (process.env.NODE_ENV === 'production') {
      e.preventDefault();
      window.location.href = getBasePath(path);
    } else {
      e.preventDefault();
      router.push(path);
    }
  };
  
  return { handleNavigation };
} 
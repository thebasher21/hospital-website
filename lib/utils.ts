import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct base path for routes and assets when deployed to GitHub Pages
 */
export function getBasePath(path: string): string {
  // In production (GitHub Pages), add the repository name prefix
  // In development, use the path as is
  
  return `https://thebasher21.github.io/hospital-website${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Navigate to a path using full GitHub Pages URL in production
 * or client-side routing in development
 */
export function navigateToPage(path: string): void {
  if (process.env.NODE_ENV === 'production') {
    // Use direct URL for GitHub Pages
    window.location.href = `https://thebasher21.github.io/hospital-website${path.startsWith('/') ? path : `/${path}`}`;
  } else {
    // Let Next.js handle client-side routing in development
    // This is handled by Link components
  }
}

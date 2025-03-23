import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct base path for routes and assets when deployed to GitHub Pages
 * This can be used in both client and server components
 */
export function getBasePath(path: string): string {
  // In production (GitHub Pages), add the repository name prefix
  // In development, use the path as is
  
  return `https://thebasher21.github.io/hospital-website${path.startsWith('/') ? path : `/${path}`}`;
}

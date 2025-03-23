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
  const basePath = process.env.NODE_ENV === 'production' ? '/hospital-website' : '';
  
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}

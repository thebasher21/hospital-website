import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the correct base path for routes and assets when deployed to GitHub Pages
 * This can be used in both client and server components
 */
export function getBasePath(path: string): string {
  // In production (GitHub Pages), add the repository name prefix
  if (process.env.NODE_ENV === 'production') {
    return `http://sadhcare.org${path.startsWith('/') ? path : `/${path}`}`;
  }

  // In development, check if we're on the client side
  if (typeof window !== 'undefined') {
    // Client-side: get current url and add path to it
    const currentUrl = window.location.origin;
    return `${currentUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  // Server-side: use localhost for development
  return `https://c9nz1602-3000.inc1.devtunnels.ms${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Get the correct base path for routes and assets with SSR support
 * This version can get the actual URL during server-side rendering
 */
export function getBasePathSSR(path: string): string {
  // In production (GitHub Pages), add the repository name prefix
  if (process.env.NODE_ENV === 'production') {
    return `http://sadhcare.org${path.startsWith('/') ? path : `/${path}`}`;
  }

  // In development, check if we're on the client side
  if (typeof window !== 'undefined') {
    // Client-side: get current url and add path to it
    const currentUrl = window.location.origin;
    return `${currentUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }
  return `https://c9nz1602-3000.inc1.devtunnels.ms${path.startsWith('/') ? path : `/${path}`}`;
}

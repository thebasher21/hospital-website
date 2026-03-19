import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Background check for dev tunnel availability
let devTunnelActive = false;
if (typeof window === 'undefined' && process.env.NODE_ENV !== 'production') {
  fetch('https://c9nz1602-3000.inc1.devtunnels.ms', { method: 'HEAD' })
    .then(res => {
      devTunnelActive = res.ok;
    })
    .catch(() => {
      devTunnelActive = false;
    });
}

/**
 * Get the correct base path for routes and assets when deployed to GitHub Pages
 * This can be used in both client and server components
 */
export function getBasePath(path: string): string {
  // First, if we're on the client side (in any environment), use the actual current URL
  if (typeof window !== 'undefined') {
    const currentUrl = window.location.origin;
    return `${currentUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  // Server-side / Build-time fallback paths
  if (process.env.NODE_ENV === 'production') {
    // Optionally use NEXT_PUBLIC_SITE_URL or fallback to sadhcare.org
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://sadhcare.org';
    return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  // Server-side: use dev tunnel if active, otherwise use localhost
  const baseUrl = devTunnelActive ? 'https://c9nz1602-3000.inc1.devtunnels.ms' : 'http://localhost:3000';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Get the correct base path for routes and assets with SSR support
 * This version can get the actual URL during server-side rendering
 */
export function getBasePathSSR(path: string): string {
  // First, if we're on the client side (in any environment), use the actual current URL
  if (typeof window !== 'undefined') {
    const currentUrl = window.location.origin;
    return `${currentUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  // Server-side / Build-time fallback paths
  if (process.env.NODE_ENV === 'production') {
    // Optionally use NEXT_PUBLIC_SITE_URL or fallback to sadhcare.org
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://sadhcare.org';
    return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }

  // Server-side: use dev tunnel if active, otherwise use localhost
  const baseUrl = devTunnelActive ? 'https://c9nz1602-3000.inc1.devtunnels.ms' : 'http://localhost:3000';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

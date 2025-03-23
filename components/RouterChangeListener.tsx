'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { getBasePath } from '@/lib/utils';

interface RouterChangeListenerProps {
  onRouteChangeStart: () => void;
  onRouteChangeComplete: () => void;
}

/**
 * This component captures route changes in Next.js App Router
 * by using a combination of DOM events and navigation hooks
 */
function RouterChangeListenerContent({
  onRouteChangeStart,
  onRouteChangeComplete,
}: RouterChangeListenerProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isNavigatingRef = useRef(false);
  const previousPathnameRef = useRef(pathname);
  const previousSearchParamsRef = useRef(searchParams);

  // When pathname or searchParams change, we know navigation has completed
  useEffect(() => {
    if (isNavigatingRef.current) {
      // Navigation has completed
      onRouteChangeComplete();
      isNavigatingRef.current = false;
    }
    
    // Store current values for next comparison
    previousPathnameRef.current = pathname;
    previousSearchParamsRef.current = searchParams;
  }, [pathname, searchParams, onRouteChangeComplete]);

  useEffect(() => {
    // For capturing clicks on links before navigation
    const handleLinkClick = (e: MouseEvent) => {
      // Check if the click is on an anchor tag
      let target = e.target as HTMLElement;
      while (target && target.tagName !== 'A') {
        target = target.parentElement as HTMLElement;
      }

      // If it's an internal link (same origin)
      if (target && 
          target.tagName === 'A') {
        const anchorElement = target as HTMLAnchorElement;
        if (anchorElement.href && 
            new URL(anchorElement.href).origin === window.location.origin) {
          onRouteChangeStart();
          isNavigatingRef.current = true;
          
          // For GitHub Pages compatibility - update URL manually if needed
          if (process.env.NODE_ENV === 'production' && 
              window.location.pathname.includes('/hospital-website')) {
            
            const path = new URL(anchorElement.href).pathname;
            // Check if the path already contains the base path
            if (!path.includes('/hospital-website/')) {
              // Prevent default to handle our own navigation
              e.preventDefault();
              
              // Manually update history (this helps with GitHub Pages routing)
              const newPath = getBasePath(path);
              window.location.href = newPath;
              return;
            }
          }
          
          // Safety timer to clear loading state if navigation doesn't complete
          setTimeout(() => {
            if (isNavigatingRef.current) {
              onRouteChangeComplete();
              isNavigatingRef.current = false;
            }
          }, 3000); // 3 second timeout as a fallback
        }
      }
    };

    // Add handling for GitHub Pages links
    const handleGitHubPagesLinks = (e: MouseEvent) => {
      if (process.env.NODE_ENV === 'production') {
        // Find the closest anchor tag
        let el = e.target as HTMLElement;
        while (el && el.tagName !== 'A') {
          el = el.parentElement as HTMLElement;
        }
        
        // If it's an anchor tag with href
        if (el && el.tagName === 'A') {
          const href = el.getAttribute('href');
          // Only handle internal links
          if (href && href.startsWith('/hospital-website') && !href.startsWith('http')) {
            e.preventDefault();
            window.location.href = `https://thebasher21.github.io${href}`;
          }
        }
      }
    };

    // For capturing browser back/forward navigation
    const handlePopState = () => {
      onRouteChangeStart();
      isNavigatingRef.current = true;
      
      // Safety timer for popstate events
      setTimeout(() => {
        if (isNavigatingRef.current) {
          onRouteChangeComplete();
          isNavigatingRef.current = false;
        }
      }, 3000);
    };

    document.addEventListener('click', handleLinkClick);
    document.addEventListener('click', handleGitHubPagesLinks);
    window.addEventListener('popstate', handlePopState);

    // Also handle initial page load
    window.addEventListener('load', onRouteChangeComplete);
    
    // In case anything gets stuck, clear loading state on user interaction
    const handleUserInteraction = () => {
      if (isNavigatingRef.current) {
        // If we've been loading for more than 3 seconds and user interacts
        setTimeout(() => {
          if (isNavigatingRef.current) {
            onRouteChangeComplete();
            isNavigatingRef.current = false;
          }
        }, 500);
      }
    };
    
    window.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleLinkClick);
      document.removeEventListener('click', handleGitHubPagesLinks);
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('load', onRouteChangeComplete);
      window.removeEventListener('click', handleUserInteraction);
    };
  }, [onRouteChangeStart, onRouteChangeComplete]);

  return null;
}

// Main component that uses Suspense
export default function RouterChangeListener(props: RouterChangeListenerProps) {
  return (
    <Suspense fallback={null}>
      <RouterChangeListenerContent {...props} />
    </Suspense>
  );
} 
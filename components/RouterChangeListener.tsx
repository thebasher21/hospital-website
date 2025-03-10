'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

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
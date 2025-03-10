'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Create a component that actually uses the hooks and wrap it in Suspense
function NavigationEventsContent({ 
  setIsNavigating 
}: { 
  setIsNavigating: (value: boolean) => void 
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // This effect will run whenever pathname or searchParams change
  // This is the most reliable way to detect navigation changes in Next.js
  useEffect(() => {
    // Navigation has completed
    setIsNavigating(false);
  }, [pathname, searchParams, setIsNavigating]);

  return null;
}

// Main component that uses Suspense
export default function NavigationEvents({ 
  setIsNavigating 
}: { 
  setIsNavigating: (value: boolean) => void 
}) {
  return (
    <Suspense fallback={null}>
      <NavigationEventsContent setIsNavigating={setIsNavigating} />
    </Suspense>
  );
} 
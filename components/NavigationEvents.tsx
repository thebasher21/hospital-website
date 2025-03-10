'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function NavigationEvents({ 
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
'use client';

import { ReactNode, useState, useRef, useCallback } from 'react';
import PageTransitionLoader from '@/components/PageTransitionLoader';
import RouterChangeListener from '@/components/RouterChangeListener';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  // Use a ref for internal state tracking to reduce rerenders
  const isNavigatingRef = useRef(false);
  // State for UI updates only
  const [isLoading, setIsLoading] = useState(false);
  
  // Memoize callback functions to prevent them from changing on rerenders
  const handleRouteChangeStart = useCallback(() => {
    // Update ref immediately
    isNavigatingRef.current = true;
    // Then update state for UI
    setIsLoading(true);
  }, []);
  
  const handleRouteChangeComplete = useCallback(() => {
    // Update ref immediately
    isNavigatingRef.current = false;
    // Then update state for UI
    setIsLoading(false);
  }, []);
  
  return (
    <>
      {/* Use only one navigation detection method to prevent infinite loops */}
      <RouterChangeListener 
        onRouteChangeStart={handleRouteChangeStart}
        onRouteChangeComplete={handleRouteChangeComplete}
      />
      
      {/* Loading UI */}
      <PageTransitionLoader isLoading={isLoading} />
      
      {children}
    </>
  );
} 
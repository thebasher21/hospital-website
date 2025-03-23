'use client';

import { ReactNode, useState } from 'react';
import PageTransitionLoader from '@/components/PageTransitionLoader';
import RouterChangeListener from '@/components/RouterChangeListener';
import NavigationEvents from '@/components/NavigationEvents';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const [isNavigating, setIsNavigating] = useState(false);
  
  const handleRouteChangeStart = () => {
    setIsNavigating(true);
  };
  
  const handleRouteChangeComplete = () => {
    setIsNavigating(false);
  };
  
  return (
    <>
      {/* Use both navigation detection methods for maximum reliability */}
      <RouterChangeListener 
        onRouteChangeStart={handleRouteChangeStart}
        onRouteChangeComplete={handleRouteChangeComplete}
      />
      <NavigationEvents setIsNavigating={setIsNavigating} />
      
      {/* Loading UI */}
      <PageTransitionLoader isLoading={isNavigating} />
      
      {children}
    </>
  );
} 
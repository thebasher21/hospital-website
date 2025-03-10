'use client';

import { useEffect, useState } from 'react';
import { LoadingSpinner } from './ui/loading-spinner';
import { cn } from '@/lib/utils';

interface PageTransitionLoaderProps {
  isLoading: boolean;
}

export default function PageTransitionLoader({ isLoading }: PageTransitionLoaderProps) {
  const [showLoader, setShowLoader] = useState(false);
  
  useEffect(() => {
    if (isLoading) {
      // Show loader immediately when navigation starts
      setShowLoader(true);
      
      // Safety timeout - force hide loader after 5 seconds
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 5000);
      
      return () => clearTimeout(timeout);
    } else {
      // When navigation completes, hide the loader after a small delay
      // This ensures a smooth transition and prevents flickering for fast loads
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 300);
      
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm transition-all duration-300",
      showLoader ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    )}>
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" />
        <p className="text-lg font-medium text-primary animate-pulse">Loading...</p>
      </div>
    </div>
  );
} 
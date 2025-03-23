'use client';

import { useEffect, useState, useRef } from 'react';
import { LoadingSpinner } from './ui/loading-spinner';
import { cn } from '@/lib/utils';

interface PageTransitionLoaderProps {
  isLoading: boolean;
}

export default function PageTransitionLoader({ isLoading }: PageTransitionLoaderProps) {
  const [showLoader, setShowLoader] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const MIN_DISPLAY_TIME = 600; // Minimum time in ms to show the loader
  
  // Single effect to handle both showing and hiding the loader
  useEffect(() => {
    // Clear any existing timeout to prevent stale updates
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    if (isLoading) {
      // Show loader immediately when navigation starts
      setShowLoader(true);
      // Record the start time
      startTimeRef.current = Date.now();
      
      // Safety timeout - force hide loader after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setShowLoader(false);
        timeoutRef.current = null;
        startTimeRef.current = null;
      }, 5000);
    } else if (startTimeRef.current) {
      // Calculate how long we've been showing the loader
      const elapsedTime = Date.now() - startTimeRef.current;
      const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsedTime);
      
      // If we haven't shown the loader for the minimum time, delay hiding it
      timeoutRef.current = setTimeout(() => {
        setShowLoader(false);
        timeoutRef.current = null;
        startTimeRef.current = null;
      }, remainingTime);
    } else {
      // If no start time was recorded, hide after a small delay
      timeoutRef.current = setTimeout(() => {
        setShowLoader(false);
        timeoutRef.current = null;
      }, 300);
    }
    
    // Cleanup on unmount or when dependencies change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
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
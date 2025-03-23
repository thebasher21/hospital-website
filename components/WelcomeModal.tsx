'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getBasePath } from '@/lib/utils';

export default function WelcomeModal() {
  const [showModal, setShowModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  // Show modal on initial load without delay
  useEffect(() => {
    // Only show modal if we haven't shown it before in this session
    const hasSeenModal = sessionStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      // Show modal immediately
      setShowModal(true);
      // Small delay just for the animation
      setTimeout(() => {
        setModalAnimation(true);
      }, 100);
      // Mark that the user has seen the modal in this session
      sessionStorage.setItem('hasSeenModal', 'true');
    }
  }, []);

  const closeModal = () => {
    setModalAnimation(false);
    setTimeout(() => {
      setShowModal(false);
    }, 300); // Match the transition duration
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dimmed background overlay */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${modalAnimation ? 'opacity-50' : 'opacity-0'}`}
        onClick={closeModal}
      />
      
      {/* Modal Content */}
      <div className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-4xl mx-4 flex flex-col md:flex-row transition-all duration-300 border-4 border-blue-600 dark:border-blue-400 ${modalAnimation ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {/* Close button */}
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 z-10"
          onClick={closeModal}
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Left side - Text content */}
        <div className="p-8 pb-12 md:w-1/2 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="text-center md:text-left">
            <div className="animate-pulse mb-2">
              <span className="inline-block bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">Important Notice</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 tracking-tight transform transition-all duration-300 hover:scale-105">
              FREE OPD
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">on all days</h3>
            <div className="mt-4 p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-600">
              <p className="text-blue-800 dark:text-blue-300 font-medium">
                Visit us anytime for free consultation with our specialists
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <Image 
            src={getBasePath("/images/services/freeOPD.jpg")}
            alt="Free OPD Services"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
} 
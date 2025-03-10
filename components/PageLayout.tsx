'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import LanguageDetector from './LanguageDetector';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Language detector - invisible component that handles system language detection */}
      <LanguageDetector />
      
      {/* Header - visible on all pages */}
      <Header />
      
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer - visible on all pages */}
      <Footer />
    </div>
  );
} 
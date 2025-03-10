'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();
  
  // Update currentPath when pathname changes
  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleMenuToggle();
    }
  };

  // Navigation links with their paths
  const navLinks = [
    { name: "header.menu.aboutUs", path: "/about-us", label: "About Us" },
    { name: "header.menu.specialities", path: "/specialities", label: "Specialities" },
    { name: "header.menu.services", path: "/services", label: "Services" },
    { name: "header.menu.outreachProgrammes", path: "/outreach-programmes", label: "Outreach Programmes" },
    { name: "header.menu.gallery", path: "/gallery", label: "Gallery" },
    { name: "header.menu.donations", path: "/donations", label: "Donations" },
    { name: "header.menu.contactUs", path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header className="bg-blue-900 dark:bg-blue-950 text-white p-4 shadow-md transition-colors duration-200">
      <div className="container mx-auto">
        {/* Mobile header layout */}
        <div className="flex md:hidden justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white" data-i18n="header.hospitalName">Sadhcare Hospital</Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button 
              className="flex items-center justify-center p-2 rounded-md hover:bg-blue-800 dark:hover:bg-blue-800/70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300"
              onClick={handleMenuToggle}
              onKeyDown={handleKeyDown}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              tabIndex={0}
            >
              <span className="sr-only" data-i18n="header.openMainMenu">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile navigation */}
        <nav className={cn("md:hidden mt-4", isMenuOpen ? "block" : "hidden")}>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || currentPath === link.path;
              return (
                <li key={link.path} className="h-10">
                  <Link 
                    href={link.path}
                    className={cn(
                      "block h-full w-full px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-blue-700 dark:bg-blue-700 text-white" 
                        : "hover:bg-blue-800 dark:hover:bg-blue-800/70 text-blue-50"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span data-i18n={link.name}>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Desktop header layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Logo on left */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white" data-i18n="header.hospitalName">Sadhcare Hospital</Link>
          </div>
          
          {/* Navigation in center */}
          <nav className="flex-1 flex justify-center px-4">
            <ul className="flex flex-wrap justify-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.path || currentPath === link.path;
                return (
                  <li key={link.path} className="h-10">
                    <Link 
                      href={link.path}
                      className={cn(
                        "block h-full px-4 py-2 rounded-md text-base font-medium transition-colors",
                        isActive 
                          ? "bg-blue-700 dark:bg-blue-700 text-white" 
                          : "hover:bg-blue-800 dark:hover:bg-blue-800/70 text-blue-50"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span data-i18n={link.name}>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          {/* Theme toggle on right */}
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
} 
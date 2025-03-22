'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
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
    { name: "header.menu.home", path: "/", label: "Home" },
    { name: "header.menu.aboutUs", path: "/about-us", label: "About Us" },
    { name: "header.menu.specialities", path: "/specialities", label: "Specialities" },
    { name: "header.menu.services", path: "/services", label: "Services" },
    { name: "header.menu.outreachProgrammes", path: "/outreach-programmes", label: "Outreach Programmes" },
    { name: "header.menu.gallery", path: "/gallery", label: "Gallery" },
    { name: "header.menu.donations", path: "/donations", label: "Donations" },
    { name: "header.menu.contactUs", path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-5 sm:p-6 shadow-md transition-colors duration-200 sticky top-0 z-50">
      <div className="container mx-auto px-1 sm:px-2">
        {/* Mobile header layout */}
        <div className="flex lg:hidden justify-between items-center">
          <Link href="/" aria-label="SADH Care Hospital Home">
            <div className="relative h-12 w-48 sm:h-14 sm:w-52">
              <Image 
                src="/images/logos/hospitalLogo.png" 
                alt="SADH Care Hospital Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button 
              className="flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
        
        {/* Mobile navigation with smooth transition */}
        <div 
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out", 
            isMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          )}
        >
          <nav className="py-2">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.path || currentPath === link.path;
                return (
                  <li key={link.path}>
                    <Link 
                      href={link.path}
                      className={cn(
                        "flex items-center justify-center px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
                        isActive 
                          ? "bg-blue-600 text-white dark:bg-blue-700" 
                          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400"
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
        </div>
        
        {/* Desktop header layout - adjusted for single line */}
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo on left */}
          <div className="flex-shrink-0 mr-2">
            <Link href="/" aria-label="SADH Care Hospital Home">
              <div className="relative h-16 w-48 sm:w-52">
                <Image 
                  src="/images/logos/hospitalLogo.png" 
                  alt="SADH Care Hospital Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          
          {/* Navigation in center - adjusted to ensure single line */}
          <nav className="flex-1 flex justify-center mx-1 sm:mx-2">
            <ul className="flex items-center justify-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.path || currentPath === link.path;
                return (
                  <li key={link.path} className="h-10">
                    <Link 
                      href={link.path}
                      className={cn(
                        "flex items-center justify-center h-full px-1.5 xl:px-2 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap min-w-[60px] xl:min-w-[70px]",
                        isActive 
                          ? "bg-blue-600 text-white dark:bg-blue-700" 
                          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400"
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
          <div className="flex-shrink-0 ml-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
} 
import { ReactNode } from 'react';

interface PageTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
  className?: string;
}

/**
 * PageTitle component for consistent page header sections across the site
 * 
 * This component ensures all page titles have the same styling and structure,
 * making it easier to update the appearance sitewide with a single change.
 */
export default function PageTitle({ 
  title, 
  description, 
  className = "" 
}: PageTitleProps) {
  return (
    <div className={`${className} py-12 sm:py-16 md:py-20 transition-colors duration-200 ${!className.includes('bg-transparent') ? 'bg-blue-800 dark:bg-gray-900 text-white' : 'text-white'}`}>
      <div className="container mx-auto text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          {title}
        </h1>
        {description && (
          <div className="text-lg sm:text-xl max-w-3xl mx-auto text-blue-100 dark:text-gray-300">
            {description}
          </div>
        )}
      </div>
    </div>
  );
} 
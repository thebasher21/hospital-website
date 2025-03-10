import { ReactNode } from 'react';

interface PageTitleProps {
  title: string;
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
    <div className={`bg-blue-900 dark:bg-blue-950 text-white py-20 transition-colors duration-200 ${className}`}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
        {description && (
          <div className="text-xl max-w-3xl mx-auto text-blue-100 dark:text-blue-50">
            {description}
          </div>
        )}
      </div>
    </div>
  );
} 
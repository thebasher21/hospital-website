'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getBasePath } from '@/lib/utils';

// The main 404 component doesn't use useSearchParams
export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4">
      <div className="space-y-8 max-w-md">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400">404</h1>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Page Not Found</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        <div className="pt-4">
          <Link href={getBasePath("/")} passHref>
            <Button size="lg">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
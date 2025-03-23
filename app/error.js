'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Something went wrong
      </h1>
      
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        We're sorry, but an error occurred while processing your request. Our team has been notified.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => reset()}
          className="btn btn-primary"
        >
          Try again
        </button>
        
        <Link href="/" className="btn btn-secondary">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function Breadcrumbs({ customLabel }) {
  const pathname = usePathname();
  
  const breadcrumbs = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    
    // Build breadcrumb items with paths
    const items = [
      { label: 'Home', path: '/' }
    ];
    
    let currentPath = '';
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Skip adding breadcrumb for single blog post if customLabel provided
      if (segments[0] === 'blogs' && segments.length === 2 && index === 1) {
        items.push({
          label: customLabel || segment,
          path: currentPath
        });
      } else if (segments[0] === 'tags' && index === 1) {
        // For tag pages, format the tag name
        items.push({
          label: `Tag: ${decodeURIComponent(segment)}`,
          path: currentPath
        });
      } else {
        // Format segment for readability (capitalize, replace hyphens)
        const readableLabel = segment
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase());
        
        items.push({
          label: readableLabel,
          path: currentPath
        });
      }
    });
    
    return items;
  }, [pathname, customLabel]);
  
  // Don't render breadcrumbs on home page
  if (pathname === '/') {
    return null;
  }
  
  return (
    <nav aria-label="Breadcrumb" className="py-3 mb-6">
      <ol className="flex flex-wrap items-center space-x-1 text-sm">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <svg className="mx-1 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
              
              {isLast ? (
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.path}
                  className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

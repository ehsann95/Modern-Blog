'use client';

import { useState, useEffect } from 'react';
import { extractHeadings } from '@/lib/blogData';

export default function JumpLinks({ content }) {
  const [activeHeading, setActiveHeading] = useState('');
  const headings = extractHeadings(content);
  
  // Set up intersection observer to highlight active section
  useEffect(() => {
    if (typeof window === 'undefined' || !headings.length) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0.1
      }
    );
    
    // Observe all h2 elements
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });
    
    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);
  
  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  if (headings.length === 0) {
    return null;
  }
  
  return (
    <div className="hidden lg:block sticky top-24 border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-2">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Table of Contents</h3>
      <nav>
        <ul className="space-y-1 text-sm">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => handleClick(heading.id)}
                className={`jump-link ${
                  activeHeading === heading.id ? 'jump-link-active' : ''
                }`}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

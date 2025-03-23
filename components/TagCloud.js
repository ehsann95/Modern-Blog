import Link from 'next/link';
import { getAllTags } from '@/lib/blogData';

export default function TagCloud({ activeTag = null, className = '' }) {
  const tags = getAllTags();
  
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Link 
          key={tag} 
          href={`/tags/${encodeURIComponent(tag)}`}
          className={`badge ${
            activeTag === tag 
              ? 'bg-indigo-600 text-white dark:bg-indigo-500' 
              : 'hover:bg-indigo-200 dark:hover:bg-indigo-800'
          } transition-colors`}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { formatDate, truncateText, getReadingTime } from '@/lib/utils';

export default function BlogCard({ post, featured = false }) {
  const readingTime = getReadingTime(post.content);
  
  return (
    <article className={`card ${featured ? 'lg:flex' : ''}`}>
      <div 
        className={`relative ${featured ? 'lg:w-2/5' : ''} h-60`} 
        style={{ position: 'relative' }}
      >
        <Link href={`/blogs/${post.slug}`}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={featured}
          />
        </Link>
      </div>
      
      <div className={`p-6 ${featured ? 'lg:w-3/5' : ''}`}>
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`} className="badge">
              {tag}
            </Link>
          ))}
        </div>
        
        <h2 className={`font-bold text-gray-900 dark:text-white mb-2 ${featured ? 'text-2xl' : 'text-xl'}`}>
          <Link href={`/blogs/${post.slug}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {truncateText(post.excerpt, featured ? 240 : 150)}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
              style={{ width: '32px', height: '32px' }}
            />
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {formatDate(post.date)} · {readingTime} min read
              </p>
            </div>
          </div>
          
          <Link
            href={`/blogs/${post.slug}`}
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}

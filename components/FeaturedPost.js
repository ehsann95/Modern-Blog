import Link from 'next/link';
import Image from 'next/image';
import { formatDate, getReadingTime } from '@/lib/utils';

export default function FeaturedPost({ post }) {
  const readingTime = getReadingTime(post.content);
  
  return (
    <article className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0" style={{ position: 'absolute' }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Link 
              key={tag} 
              href={`/tags/${encodeURIComponent(tag)}`}
              className="bg-white/20 text-white text-xs font-medium px-2.5 py-0.5 rounded backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
        
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
          <Link href={`/blogs/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h1>
        
        <p className="text-gray-200 mb-6 max-w-2xl">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
              style={{ width: '40px', height: '40px' }}
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-white">{post.author.name}</p>
              <p className="text-xs text-gray-300">
                {formatDate(post.date)} · {readingTime} min read
              </p>
            </div>
          </div>
          
          <Link
            href={`/blogs/${post.slug}`}
            className="btn-primary hover:bg-indigo-700 transition-colors"
          >
            Read Article
          </Link>
        </div>
      </div>
    </article>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRecentPosts, getAllPosts } from '@/attached_assets/blogData';
import { formatDate, getReadingTime } from '@/lib/utils';
import Breadcrumbs from '@/components/Breadcrumbs';
import JumpLinks from '@/components/JumpLinks';
import BlogCard from '@/components/BlogCard';

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested article could not be found.'
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ],
      tags: post.tags
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage]
    }
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  
  // If post not found, show 404
  if (!post) {
    notFound();
  }
  
  const readingTime = getReadingTime(post.content);
  const relatedPosts = getRecentPosts().filter(p => p.id !== post.id).slice(0, 3);
  
  return (
    <div className="page-transition">
      {/* Article Header */}
      <header className="pt-8 pb-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <Breadcrumbs customLabel={post.title} />
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`} className="badge">
                {tag}
              </Link>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center mb-8">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
              style={{ width: '40px', height: '40px' }}
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {formatDate(post.date)} · {readingTime} min read
              </p>
            </div>
          </div>
          
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg" style={{ position: 'relative' }}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      </header>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with Jump Links */}
          <aside className="lg:col-span-1">
            <JumpLinks content={post.content} />
          </aside>
          
          {/* Main Content */}
          <article className="lg:col-span-3">
            <div 
              className="prose prose-lg max-w-none dark:prose-invert blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`} className="badge">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
      
      {/* Related Articles */}
      <div className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

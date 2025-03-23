import Link from 'next/link';
import Image from 'next/image';
import { getRecentPosts, getFeaturedPosts } from '@/attached_assets/blogData';
import FeaturedPost from '@/components/FeaturedPost';
import BlogCard from '@/components/BlogCard';
import SearchBar from '@/components/SearchBar';
import TagCloud from '@/components/TagCloud';

export const metadata = {
  title: 'Home',
  description: 'Explore our modern blog with insights on design principles, user experience, and creative techniques.'
};

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts();
  
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Insights for Modern Designers
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Discover articles on design principles, user experience, and creative techniques
            to elevate your digital products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blogs" className="btn bg-white text-indigo-600 hover:bg-gray-100">
              Browse Articles
            </Link>
            <Link href="/search" className="btn bg-transparent text-white border border-white hover:bg-white/10">
              Search Topics
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="container mx-auto px-4 -mt-16 mb-16 relative z-10">
        {featuredPosts.length > 0 && <FeaturedPost post={featuredPosts[0]} />}
      </section>
      
      {/* Recent Posts */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recent Articles</h2>
          <Link href="/blogs" className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
            View all →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      
      {/* Topics Section */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
            Explore Topics
          </h2>
          
          <div className="flex justify-center mb-12">
            <TagCloud className="justify-center" />
          </div>
          
          <div className="max-w-3xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-indigo-600 dark:bg-indigo-800 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Dive Deeper into Design Knowledge
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Our collection of articles covers everything from minimalist design principles to color theory
            and typography fundamentals.
          </p>
          <Link href="/blogs" className="btn bg-white text-indigo-600 hover:bg-gray-100">
            Explore All Articles
          </Link>
        </div>
      </section>
    </div>
  );
}

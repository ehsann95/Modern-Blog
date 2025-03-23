import { notFound } from 'next/navigation';
import { getPostsByTag, getAllTags } from '@/attached_assets/blogData';
import BlogCard from '@/components/BlogCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import TagCloud from '@/components/TagCloud';
import Pagination from '@/components/Pagination';

// Generate metadata for tag pages
export async function generateMetadata({ params }) {
  const { tag: tagParam } = params;
  const tag = decodeURIComponent(tagParam);
  const posts = getPostsByTag(tag);
  
  if (posts.length === 0) {
    return {
      title: 'Tag Not Found',
      description: 'The requested tag could not be found.'
    };
  }
  
  return {
    title: `Articles tagged with "${tag}"`,
    description: `Browse our collection of articles about ${tag.toLowerCase()}, covering design principles, best practices, and creative insights.`
  };
}

// Generate static paths for all tags
export async function generateStaticParams() {
  const tags = getAllTags();
  
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag)
  }));
}

export default async function TagPage({ params, searchParams }) {
  const { tag: tagParam } = params;
  const tag = decodeURIComponent(tagParam);
  const posts = getPostsByTag(tag);
  const page = Number(searchParams?.page) || 1;
  const postsPerPage = 6;
  
  // If tag not found, show 404
  if (posts.length === 0) {
    notFound();
  }
  
  // Calculate pagination
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  
  return (
    <div className="container mx-auto px-4 py-8 page-transition">
      <Breadcrumbs />
      
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        Articles tagged with "{tag}"
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Browse our collection of {posts.length} articles about {tag.toLowerCase()}.
      </p>
      
      {/* Tags filter */}
      <div className="mb-10">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
          Browse Other Topics
        </h2>
        <TagCloud activeTag={tag} />
      </div>
      
      {/* Blog post grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      {/* Pagination */}
      <Pagination totalItems={posts.length} itemsPerPage={postsPerPage} />
    </div>
  );
}

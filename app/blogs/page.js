import { getAllPosts } from "@/attached_assets/blogData";
import BlogCard from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Pagination from "@/components/Pagination";
import TagCloud from "@/components/TagCloud";

export const metadata = {
  title: "All Articles",
  description:
    "Browse our complete collection of articles on design principles, user experience, and creative insights.",
};

export default async function BlogsPage({ searchParams }) {
  const allPosts = getAllPosts();
  const page = Number(await searchParams?.page) || 1;
  const postsPerPage = 3;

  // Calculate pagination
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = allPosts.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8 page-transition">
      <Breadcrumbs />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        All Articles
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Browse our collection of {allPosts.length} articles on design
        principles, user experience, and creative insights.
      </p>

      {/* Tags filter */}
      <div className="mb-10">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
          Filter by Topic
        </h2>
        <TagCloud />
      </div>

      {/* Blog post grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Show message if no posts */}
      {paginatedPosts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            No articles found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* Pagination */}
      <Pagination totalItems={allPosts.length} itemsPerPage={postsPerPage} />
    </div>
  );
}

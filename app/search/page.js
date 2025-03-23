'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { searchPosts, getAllPosts } from '@/attached_assets/blogData';
import BlogCard from '@/components/BlogCard';
import SearchBar from '@/components/SearchBar';
import Breadcrumbs from '@/components/Breadcrumbs';
import Pagination from '@/components/Pagination';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const page = Number(searchParams.get('page') || '1');
  
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const postsPerPage = 6;
  
  useEffect(() => {
    // If there's a query, search posts
    if (query) {
      const results = searchPosts(query);
      setSearchResults(results);
    } else {
      // If no query, show recent posts
      setSearchResults(getAllPosts());
    }
    setLoading(false);
  }, [query]);
  
  // Calculate pagination
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedResults = searchResults.slice(startIndex, endIndex);
  
  const handleClientSearch = (newQuery) => {
    if (newQuery) {
      const results = searchPosts(newQuery);
      setSearchResults(results);
    } else {
      setSearchResults(getAllPosts());
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 page-transition">
      <Breadcrumbs />
      
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {query ? `Search Results for "${query}"` : 'Search Articles'}
      </h1>
      
      <div className="mb-10">
        <SearchBar initialQuery={query} onClientSearch={handleClientSearch} />
      </div>
      
      {/* Results Summary */}
      {query && (
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Found {searchResults.length} article{searchResults.length !== 1 ? 's' : ''} matching your search.
        </p>
      )}
      
      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : (
        <>
          {/* Search Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedResults.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* No Results Message */}
          {searchResults.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try searching with different keywords or browse all articles
              </p>
            </div>
          )}
          
          {/* Pagination */}
          <Pagination totalItems={searchResults.length} itemsPerPage={postsPerPage} />
        </>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { debounce } from "@/lib/utils";

export default function SearchBar({
  initialQuery = "",
  onClientSearch = null,
}) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // If onClientSearch is provided, call it for instant client-side search
    if (onClientSearch) {
      debouncedSearch(newQuery);
    }
  };

  // Debounce search
  const debouncedSearch = debounce((searchTerm) => {
    if (onClientSearch) {
      onClientSearch(searchTerm);
    }
  }, 300);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // If no client-side search callback, navigate to search page with query
      if (!onClientSearch) {
        router.push(`/search?q=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center gap-2 ">
        <div className="flex items-center w-full">
          <input
            type="search"
            className="px-10 form-input"
            placeholder="Search blogs, topics, or tags..."
            value={query}
            onChange={handleInputChange}
            aria-label="Search"
          />
        </div>
        <button type="submit" className="btn btn-primary rounded-md px-4 flex">
          <span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
}

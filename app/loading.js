export default function Loading() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center py-16">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600 dark:border-indigo-400 border-solid"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">Loading content...</p>
    </div>
  );
}

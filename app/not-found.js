import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Page Not Found
      </h2>
      
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <div className="flex gap-4">
        <Link href="/" className="btn btn-primary">
          Return to Homepage
        </Link>
        
        <Link href="/blogs" className="btn btn-secondary">
          Browse Articles
        </Link>
      </div>
    </div>
  );
}

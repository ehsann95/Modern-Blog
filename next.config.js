/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    turbo: {
      // Enable Turbopack compilation for faster development
      loaders: {
        ".js": ["jsx"],
      },
    },
  },
};

module.exports = nextConfig;

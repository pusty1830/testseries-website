/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This enables static export
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      // Add other domains you need
    ],
    unoptimized: true, // REQUIRED for static export
  },
  
  // Optional: Add trailing slash for better compatibility
  trailingSlash: true,
  
  // Optional: Set base path if deploying to subdirectory
  // basePath: '/your-repo-name',
}

module.exports = nextConfig
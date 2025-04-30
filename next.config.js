/** @type {import('next').NextConfig} */

// next.config.js
module.exports = {
  output: 'export', // This replaces next export
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Add trailingSlash for better compatibility
  trailingSlash: true,
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  images: {
    // Add external domains here if using remote images
    // e.g. domains: ['images.unsplash.com']
    unoptimized: false,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // This is required for static exports
    // If you need to use remote images, define domains here
    // domains: ['example.com'],
    // Or use remotePatterns for more specific control
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //     pathname: '/images/**',
    //   },
    // ],
  },
  // The trailing slash is often useful for static exports
  trailingSlash: true,
};

module.exports = nextConfig;

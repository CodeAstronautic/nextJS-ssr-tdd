import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,  // Enables React Strict Mode
  images: {
    domains: ['via.placeholder.com'],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;

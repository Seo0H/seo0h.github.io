const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
    },
    images: {
      unoptimized: true
  }
  },
};

module.exports = withContentlayer(nextConfig);

const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = withContentlayer(nextConfig);

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
      loader: 'akamai',
      path: '',
    },
  },
};

module.exports = withContentlayer(nextConfig);

import { withContentlayer } from 'next-contentlayer';

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
export default withContentlayer(nextConfig);

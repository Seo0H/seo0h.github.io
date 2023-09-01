import { allPosts } from 'contentlayer/generated';

import BlogLayout from '@/components/layout/blog';
import { allPostTitle } from '@/utils/blogDataset';

import type { BlogProps } from '@/lib/types';
import type { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPostTitle.map((post) => `/blog${post.url}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };
  const slug = `/${[...slugs].join('/')}`;
  const post = allPosts.find((post) => post.url === slug);

  return { props: { post } };
};

const Blog = (props: BlogProps) => {
  return <BlogLayout {...props} />;
};

export default Blog;
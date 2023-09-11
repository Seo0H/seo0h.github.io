import BlogLayout from '@/components/layout/blog';
import { cleanAllPost } from '@/utils/blogDataset';

import type { BlogProps } from '@/lib/types';
import type { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: cleanAllPost.map((post) => `/blog${post.url}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };
  const slug = `/${[...slugs].join('/')}`;
  const post = cleanAllPost.find((post) => post.url === slug);

  return { props: { post } };
};

const Blog = (props: BlogProps) => {
  return <BlogLayout {...props} />;
};

export default Blog;

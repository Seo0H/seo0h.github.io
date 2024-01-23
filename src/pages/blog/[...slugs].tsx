import BlogLayout from '@/components/layout/blog';
import { PostData } from '@/constants/blogDataset';
import { Post } from '@/types/post';

import type { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await PostData.getInstance();
  return {
    paths: posts.map((post) => `/blog${post.url}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { posts } = await PostData.getInstance();
  const { slugs } = params as { slugs: string[] };

  const slug = `/${[...slugs].join('/')}`;
  const post = posts.find((post) => post.url === slug);

  return { props: { post } };
};

const Blog = (props: { post: Post }) => {
  return <BlogLayout {...props} />;
};

export default Blog;

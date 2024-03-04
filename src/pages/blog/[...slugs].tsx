import PostContainer from '@/components/blog-post';
import { StaticPostData } from '@/constants/blogDataset/blogDataset';
import { Post } from '@/types/post';

import type { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const { clientPosts: posts } = await StaticPostData.getInstance();
  return {
    paths: posts.map((post) => `/blog${post.url}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { clientPosts: posts } = await StaticPostData.getInstance();
  const { slugs } = params as { slugs: string[] };

  const slug = `/${[...slugs].join('/')}`;
  const post = posts.find((post) => post.url === slug);

  return { props: { post } };
};

const BlogPostFeather = (props: { post: Post }) => {
  return <PostContainer {...props} />;
};

export default BlogPostFeather;

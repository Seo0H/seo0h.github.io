import { useEffect } from 'react';

import { updatePostViews } from '@/api/client';
import BlogLayout from '@/components/layout/blog';
import { StaticPostData } from '@/constants/blogDataset';
import { Post } from '@/types/post';

import type { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await StaticPostData.getInstance();
  return {
    paths: posts.map((post) => `/blog${post.url}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const StaticpostData = await StaticPostData.getInstance();
  const { posts } = StaticpostData;
  const { slugs } = params as { slugs: string[] };

  const slug = `/${[...slugs].join('/')}`;
  const post = posts.find((post) => post.url === slug);

  return { props: { post }, revalidate: 20 };
};

const Blog = (props: { post: Post }) => {
  useEffect(() => {
    let fetchAbortController = new AbortController();
    updatePostHandler(fetchAbortController);

    // 중복 요청 취소 clean up
    return () => fetchAbortController.abort();
  }, []);

  async function updatePostHandler(abortController: AbortController) {
    // TODO: react query 를 이용하도록 변경
    const { data, error } = await updatePostViews({ uuid: props.post.uuid }, abortController);
    if (data?.status) {
      // TODO: Update Post views + 1
    }
  }

  return <BlogLayout {...props} />;
};

export default Blog;

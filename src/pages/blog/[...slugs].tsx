import { useEffect } from 'react';

import { useImmer } from 'use-immer';

import { updatePostViews } from '@/api/client';
import BlogLayout from '@/components/layout/blog';
import { useViewsState } from '@/components/layout/state';
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
  const { posts } = await StaticPostData.getInstance();
  const { slugs } = params as { slugs: string[] };

  const slug = `/${[...slugs].join('/')}`;
  const post = posts.find((post) => post.url === slug);

  return { props: { post }, revalidate: 10 };
};

const BlogPostFeather = (props: { post: Post }) => {
  const [updatedProps, setUpdatedProps] = useImmer(props);
  const { viewsState, setViewsState } = useViewsState();

  useEffect(() => {
    setViewsState({ type: 'SET_LOADING' });

    let fetchAbortController = new AbortController();
    updatePostViews({ uuid: props.post.uuid }, fetchAbortController)
      .then((res) => {
        if (res.status === true) {
          setUpdatedProps((prev) => {
            prev.post.view = Number(res.data);
          });
        }
      })
      .finally(() => setViewsState({ type: 'SET_SUCCESS' }))
      .catch((e) => {
        console.log(e);
        setViewsState({ type: 'SET_ERROR' });
      });

    // 중복 요청 취소 clean up
    return () => fetchAbortController.abort();
  }, []);

  return <BlogLayout {...updatedProps} {...{ viewsState }} />;
};

export default BlogPostFeather;

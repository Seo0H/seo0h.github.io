import { GetStaticProps, InferGetStaticPropsType } from 'next';

import BlogMain from '@/components/blog-main';
import { StaticPostData } from '@/constants/blogDataset';
import { handlePostDataServerUpdate } from '@/utils/db-utils';

import type { Post } from '@/types/post';

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogMain {...props} />;
}

export const getStaticProps = (async () => {
  const { serverPosts, posts, allTags: tags } = await StaticPostData.getInstance();

  await handlePostDataServerUpdate({
    serverPosts,
    clientPosts: posts,
  });

  return {
    props: { posts, tags },
  };
}) satisfies GetStaticProps<{
  posts: Post[];
  tags: string[];
}>;

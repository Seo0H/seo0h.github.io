import { GetStaticProps, InferGetStaticPropsType } from 'next';

import BlogMain from '@/components/blog-main';
import { StaticPostData } from '@/constants/blogDataset';
import useCombinedPost from '@/lib/hooks/use-combined-post';
import { handlePostDataServerUpdate } from '@/utils/db-utils';

import type { Post } from '@/types/post';

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { posts, status: apiStatus, key } = useCombinedPost(props.posts);

  return <BlogMain {...{ ...props, posts, apiStatus }} key={key} />;
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

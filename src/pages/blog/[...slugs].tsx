import Image from 'next/image';

import { type Post, allPosts } from 'contentlayer/generated';

import * as Layout from '@/components/layout';
import { allPostTitle } from '@/utils/blogDataset';

import type { GetStaticPaths, GetStaticProps } from 'next';

const Blog = ({ post }: { post: Post }) => {
  // console.log(post);
  return (
    <Layout.VStack gap='10px' width='100%' alignItems='center' maxWidth='700px'>
      <Layout.Flex position='relative' width='100%' maxWidth='700px' height='340px'>
        <Image
          src={post.image}
          fill
          style={{ objectFit: 'cover', borderRadius: '20px' }}
          alt='img'
        />
      </Layout.Flex>
      <Layout.VStack alignItems='flex-start'>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
        <p>{post.body.raw}</p>
      </Layout.VStack>
    </Layout.VStack>
  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    /* TODO ling as 에 /blog 붙여야 되는거 추후 수정 */
    paths: allPostTitle.map((post) => `/blog${post.url}`),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slugs } = params as { slugs: string[] };
  const slug = `/${[...slugs].join('/')}`;
  const post = allPosts.find((post) => post.url === slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

import Image from 'next/image';

import * as Layout from '@/components/layout';
import { Post, allPosts } from 'contentlayer/generated';

import type { GetStaticPaths, GetStaticProps } from 'next';

const Blog = ({ post }: { post: Post }) => {
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
    paths: allPosts.map((post) => ({ params: { slug: post._raw.flattenedPath } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params as { slug: string };
  // console.log(params);
  const post = allPosts.find((post) => post._raw.sourceFilePath === slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

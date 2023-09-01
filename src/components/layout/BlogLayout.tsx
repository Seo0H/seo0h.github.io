import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import * as Layout from '@/components/layout';
import { BlogProps } from '@/lib/types';

const BlogLayout = ({ post }: BlogProps) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Layout.VStack gap='10px' width='100%' alignItems='center' maxWidth='700px'>
      <Layout.Flex position='relative' width='100%' height='340px'>
        <Image
          src={post.image}
          fill
          style={{ objectFit: 'cover', borderRadius: '20px' }}
          alt='img'
        />
      </Layout.Flex>

      <Layout.HStack
        width='100%'
        justifyContent='space-between'
        alignItems='center'
        margin='30px 0'
      >
        <h1>{post.title}</h1>
        <Layout.VStack alignItems='flex-end'>
          <p>{post.formattedDate}</p>
          <p>{post.readingTime} 분</p>
        </Layout.VStack>
      </Layout.HStack>

      <Layout.VStack width='100%' className='mdx' gap='20px'>
        <MDXContent />
      </Layout.VStack>
    </Layout.VStack>
  );
};

export default BlogLayout;

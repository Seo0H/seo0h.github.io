import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import * as Layout from '@/components/layout';
import { default as Style } from '@/components/layout/blog/style';
import { display } from '@/constants/styles';
import { BlogProps } from '@/lib/types';
import useWindowSize from '@/lib/useWindowSize';
import isMobile from '@/utils/isMobile';

const BlogLayout = ({ post }: BlogProps) => {
  const MDXContent = useMDXComponent(post.body.code);
  const { width } = useWindowSize();

  return (
    <Style gap='10px' width='100%' alignItems='center' maxWidth='700px'>
      <Layout.Flex position='relative' width='100%' height='340px'>
        <Image
          src={post.image}
          fill
          style={{ objectFit: 'cover', borderRadius: '20px' }}
          alt='img'
        />
      </Layout.Flex>

      {isMobile(width) ? (
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
      ) : (
        <Layout.VStack width='100%' gap='15px' margin='20px 0 10px 0'>
          <h1>{post.title}</h1>

          <Layout.HStack gap='10px' alignItems='center'>
            <p>{post.formattedDate}</p>
            <p>{post.readingTime}분</p>
          </Layout.HStack>
        </Layout.VStack>
      )}

      <hr />
      <Layout.VStack width='100%' className='mdx' gap='20px'>
        <MDXContent />
      </Layout.VStack>
    </Style>
  );
};

export default BlogLayout;

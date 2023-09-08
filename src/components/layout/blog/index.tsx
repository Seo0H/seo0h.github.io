import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { CrosshatchTag } from '@/components/common/Tag';
import * as Layout from '@/components/layout';
import { default as Style } from '@/components/layout/blog/style';
import CustomImg from '@/components/mdx/CustomImg';
import CustomLink from '@/components/mdx/CustomLink';
import { BlogProps } from '@/lib/types';
import useWindowSize from '@/lib/useWindowSize';
import { getTag } from '@/utils/blogDataset';
import cvar from '@/utils/cvarAutoComp';
import isMobile from '@/utils/isMobile';

import type { MDXComponents } from 'mdx/types';

const customComponents: MDXComponents = {
  img: CustomImg,
  a: CustomLink,
};

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
        <Layout.VStack width='100%' gap='5px' margin='20px 0 10px 0'>
          <Layout.VStack>
            <CrosshatchTag>{getTag(post)}</CrosshatchTag>
            <h1>{post.title}</h1>
          </Layout.VStack>

          <h5 style={{ color: cvar({ key: 'gray', idx: '300' }), fontWeight: '300' }}>
            {post.description}
          </h5>

          <Layout.HStack
            gap='10px'
            margin='10px 0 0 0'
            alignItems='center'
            style={{ fontWeight: '300' }}
          >
            <p style={{ color: 'inherit', fontWeight: 'inherit' }}>{post.formattedDate}</p>
            <p style={{ color: 'inherit', fontWeight: 'inherit' }}>{post.readingTime}분</p>
          </Layout.HStack>
        </Layout.VStack>
      ) : (
        <Layout.VStack width='100%' gap='10px' margin='20px 0'>
          <Layout.VStack>
            <CrosshatchTag>{getTag(post)}</CrosshatchTag>
            <Layout.HStack width='100%' justifyContent='space-between' alignItems='center'>
              <h1>{post.title}</h1>

              <Layout.VStack alignItems='flex-end'>
                <p>{post.formattedDate}</p>
                <p>{post.readingTime} 분</p>
              </Layout.VStack>
            </Layout.HStack>
          </Layout.VStack>

          <h5
            style={{
              color: cvar({ key: 'gray', idx: '300' }),
              fontWeight: '300',
            }}
          >
            {post.description}
          </h5>
        </Layout.VStack>
      )}

      <hr />
      <Layout.VStack width='100%' className='mdx' gap='20px'>
        <h2>Table Of Contents</h2>
        <MDXContent components={customComponents} />
      </Layout.VStack>
    </Style>
  );
};

export default BlogLayout;

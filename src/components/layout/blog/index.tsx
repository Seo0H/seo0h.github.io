import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { BlogSeo } from '@/components/SEO';
import { CrosshatchTag } from '@/components/common/Tag';
import * as Layout from '@/components/layout';
import { default as Style } from '@/components/layout/blog/style';
import CustomImg from '@/components/mdx/CustomImg';
import CustomLink from '@/components/mdx/CustomLink';
import CustomTable from '@/components/mdx/CustomTable';
import getTag from '@/lib/getTag';
import useWindowSize from '@/lib/useWindowSize';
import cvar from '@/utils/cvarAutoComp';
import isMobile from '@/utils/isMobile';

import type { ViewState } from '@/components/layout/state';
import type { Post } from '@/types/post';
import type { MDXComponents } from 'mdx/types';

const customComponents: MDXComponents = {
  img: CustomImg,
  a: CustomLink,
  table: CustomTable,
};

const BlogLayout = ({ post, viewsState }: { post: Post; viewsState: ViewState }) => {
  const MDXContent = useMDXComponent(post.body.code);
  const { width } = useWindowSize();
  const { tag } = getTag(post);

  return (
    <Style gap='10px' width='100%' alignItems='center' maxWidth='700px'>
      <BlogSeo
        {...post}
        tag={tag}
        url={post.url}
        summary={post.description}
        images={[post.image]}
      />

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
            <CrosshatchTag>{tag}</CrosshatchTag>
            <h1>{post.title}</h1>
          </Layout.VStack>

          <h5 style={{ color: cvar({ key: 'gray', idx: '500' }), fontWeight: '300' }}>
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
            <p style={{ color: 'inherit', fontWeight: 'inherit' }}>
              {viewsState.isSuccess && `${post.view} views`}
              {viewsState.isLoading && `Loading..`}
              {viewsState.isError && `ERROR!`}
            </p>
          </Layout.HStack>
        </Layout.VStack>
      ) : (
        <Layout.VStack width='100%' gap='10px' margin='20px 0'>
          <Layout.VStack>
            <CrosshatchTag>{tag}</CrosshatchTag>
            <Layout.HStack width='100%' justifyContent='space-between' alignItems='center'>
              <h1>{post.title}</h1>

              <Layout.VStack alignItems='flex-end'>
                <p>{post.formattedDate}</p>
                <p>{post.readingTime} min read</p>
                <p>
                  {viewsState.isSuccess && `${post.view} views`}
                  {viewsState.isLoading && `Loading..`}
                  {viewsState.isError && `ERROR!`}
                </p>
              </Layout.VStack>
            </Layout.HStack>
          </Layout.VStack>

          <h5
            style={{
              color: cvar({ key: 'gray', idx: '500' }),
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

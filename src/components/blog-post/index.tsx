import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { BlogSeo } from '@/components/SEO';
import { default as Style } from '@/components/blog-post/style';
import Views from '@/components/blog-post/views';
import { CrosshatchTag } from '@/components/common/Tag';
import * as Layout from '@/components/layout';
import CustomImg from '@/components/mdx/CustomImg';
import CustomLink from '@/components/mdx/CustomLink';
import CustomTable from '@/components/mdx/CustomTable';
import useUpdateViews from '@/hooks/use-update-views';
import getTag from '@/lib/getTag';
import useWindowSize from '@/lib/useWindowSize';
import cvar from '@/utils/cvarAutoComp';
import isMobile from '@/utils/isMobile';

import type { Post } from '@/types/post';
import type { MDXComponents } from 'mdx/types';

const customComponents: MDXComponents = {
  img: CustomImg,
  a: CustomLink,
  table: CustomTable,
};

const PostContainer = ({ post }: { post: Post }) => {
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
              <Views uuid={post.uuid} view={post.view} />
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
                  <Views uuid={post.uuid} view={post.view} />
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

export default PostContainer;

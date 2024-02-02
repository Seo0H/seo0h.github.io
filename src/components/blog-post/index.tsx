import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { BlogSeo } from '@/components/SEO';
import PostInfo from '@/components/blog-post/post-info';
import { default as Style } from '@/components/blog-post/style';
import * as Layout from '@/components/layout';
import CustomImg from '@/components/mdx/CustomImg';
import CustomLink from '@/components/mdx/CustomLink';
import CustomTable from '@/components/mdx/CustomTable';
import getTag from '@/lib/getTag';

import type { Post } from '@/types/post';
import type { MDXComponents } from 'mdx/types';

const customComponents: MDXComponents = {
  img: CustomImg,
  a: CustomLink,
  table: CustomTable,
};

const PostContainer = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code);
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

      <PostInfo post={post} tag={tag} />
      <hr />

      <Layout.VStack width='100%' className='mdx' gap='20px'>
        <h2>Table Of Contents</h2>
        <MDXContent components={customComponents} />
      </Layout.VStack>
    </Style>
  );
};

export default PostContainer;

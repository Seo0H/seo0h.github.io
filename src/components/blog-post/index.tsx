import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { BlogSeo } from '@/components/SEO';
import PostInfo from '@/components/blog-post/post-info';
import * as Layout from '@/components/layout';
import CustomImg from '@/components/mdx/CustomImg';
import CustomLink from '@/components/mdx/CustomLink';
import CustomTable from '@/components/mdx/CustomTable';
import { fadeIn, fadeInUp, staggerHalf } from '@/lib/animations';
import getTag from '@/lib/getTag';

import * as S from './style';
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
    <S.PostGlobalStyleContainer variants={staggerHalf} initial='initial' animate='animate'>
      <BlogSeo
        {...post}
        tag={tag}
        url={post.url}
        summary={post.description}
        images={[post.image]}
      />

      <S.ImageWrapper variants={fadeIn}>
        <Image
          src={post.image}
          fill
          style={{ objectFit: 'cover', borderRadius: '20px' }}
          alt='img'
        />
      </S.ImageWrapper>

      <motion.div
        key='post-info'
        variants={fadeInUp}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <S.PostInfoWrapper>
          <PostInfo post={post} tag={tag} />
        </S.PostInfoWrapper>
      </motion.div>

      <motion.section variants={fadeInUp}>
        <Layout.VStack width='100%' className='mdx' gap='20px'>
          <h2>Table Of Contents</h2>
          <MDXContent components={customComponents} />
        </Layout.VStack>
      </motion.section>
    </S.PostGlobalStyleContainer>
  );
};

export default PostContainer;

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Post } from 'contentlayer/generated';

import { CrosshatchTag } from '@/components/common/Tag';
import * as Layout from '@/components/layout';
import { display } from '@/constants/styles';
import { fadeInUp, hover, tab } from '@/lib/animations';
import useTag from '@/lib/useTag';

import type { ReducedPost } from '@/lib/types';

const BlogBox = ({ post }: { post: ReducedPost }) => {
  return (
    <motion.div variants={fadeInUp} whileHover={hover} whileTap={tab}>
      <Link href={`/blog/[...slugs]`} as={`/blog${post.url}`}>
        <ListBoxWrapper gap='24px' alignItems='center'>
          <ImgContainer position='relative' width='240px' height='240px' minWidth='80px'>
            <Image
              style={{ objectFit: 'cover', borderRadius: '10px' }}
              src={post.image}
              alt='img'
              fill
            />
          </ImgContainer>

          <ResVStack gap='18px' style={{ wordBreak: 'keep-all', flex: '1' }}>
            <Layout.VStack>
              <CrosshatchTag>{post.tag}</CrosshatchTag>
              <ResH2>{post.title}</ResH2>
              <P>{post.description}</P>
            </Layout.VStack>

            <Layout.VStack>
              <Layout.HStack alignItems='flex-end' justifyContent='space-between'>
                <Layout.HStack gap='10px' alignItems='center'>
                  <MiniP suppressHydrationWarning>{post.formattedDate}</MiniP>
                  <MiniP>{`${post.readingTime}분`}</MiniP>
                </Layout.HStack>
              </Layout.HStack>
            </Layout.VStack>
          </ResVStack>
        </ListBoxWrapper>
      </Link>
    </motion.div>
  );
};

export default BlogBox;

const ListBoxWrapper = styled(Layout.HStack)`
  cursor: pointer;
  border-radius: 18px;
  border: 10px solid transparent;

  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  }

  @media (width < ${display.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding-bottom: 10px;
  }
`;

const ResH2 = styled.h2`
  line-height: 1.2;
  @media (width < ${display.tablet}) {
    margin: 5px 0;
  }
`;

const MiniP = styled.p`
  @media (width < ${display.tablet}) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const ImgContainer = styled(Layout.Box)`
  display: block;

  @media (width < ${display.tablet}) {
    width: 100%;
    min-height: 120px;
  }
`;

const ResVStack = styled(Layout.VStack)`
  @media (width <${display.tablet}) {
    gap: 0px;
  }
`;

const P = styled.p`
  line-height: 1.4;
`;

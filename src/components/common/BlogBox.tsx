import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Post } from 'contentlayer/generated';

import * as Layout from '@/components/layout';
import { display } from '@/constants/styles';
import { fadeInUp, hover, tab } from '@/lib/animations';

const BlogBox = ({ post }: { post: Post }) => {
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

          <Layout.VStack gap='16px' style={{ wordBreak: 'keep-all', flex: '1' }}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>

            <Layout.HStack gap='10px' alignItems='center'>
              <time suppressHydrationWarning>{post.formattedDate}</time>
              <p>{`${post.readingTime}분`}</p>
            </Layout.HStack>
          </Layout.VStack>
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
`;

const ImgContainer = styled(Layout.Box)`
  display: block;
  @media (width < ${display.tablet}) {
    display: none;
  }
`;

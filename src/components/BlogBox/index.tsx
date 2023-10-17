import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { CrosshatchTag } from '@/components/common/Tag';
import * as Layout from '@/components/layout';
import { fadeInUp, hover, tab } from '@/lib/animations';

import * as Style from './style';
import type { ReducedPost } from '@/lib/types';

const BlogBox = ({ post }: { post: ReducedPost }) => {
  return (
    <motion.div variants={fadeInUp} whileHover={hover} whileTap={tab}>
      <Link href={`/blog/[...slugs]`} as={`/blog${post.url}`}>
        <Style.ListBoxWrapper gap='24px' alignItems='center'>
          <Style.ImgContainer position='relative' width='240px' height='240px' minWidth='80px'>
            <Image
              style={{ objectFit: 'cover', borderRadius: '10px' }}
              src={post.image}
              alt='img'
              fill
            />
          </Style.ImgContainer>

          <Style.ResVStack gap='18px' style={{ wordBreak: 'keep-all', flex: '1' }}>
            <Layout.VStack>
              <CrosshatchTag>{post.tag}</CrosshatchTag>
              <Style.ResH2>{post.title}</Style.ResH2>
              <Style.P>{post.description}</Style.P>
            </Layout.VStack>

            <Layout.VStack>
              <Layout.HStack alignItems='flex-end' justifyContent='space-between'>
                <Layout.HStack gap='10px' alignItems='center'>
                  <Style.MiniP suppressHydrationWarning>{post.formattedDate}</Style.MiniP>
                  <Style.MiniP>{`${post.readingTime}분`}</Style.MiniP>
                </Layout.HStack>
              </Layout.HStack>
            </Layout.VStack>
          </Style.ResVStack>
        </Style.ListBoxWrapper>
      </Link>
    </motion.div>
  );
};

export default BlogBox;

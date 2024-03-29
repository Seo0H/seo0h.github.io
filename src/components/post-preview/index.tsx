import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { APIStatusType } from '@/api/views/type';
import { CrosshatchTag } from '@/components/common/Tag';
import * as Layout from '@/components/layout';
import { fadeInUp, tab } from '@/lib/animations';

import * as Style from './style';
import type { Post } from '@/types/post';

const PostPreview = ({ post, viewStatus }: { post: Post; viewStatus: APIStatusType }) => {
  return (
    <motion.div variants={fadeInUp} whileTap={tab}>
      <Link href={`/blog/[...slugs]`} as={`/blog${post.url}`}>
        <Style.ListBoxWrapper>
          <Style.ImgContainer>
            <Image
              style={{ objectFit: 'cover', borderRadius: '10px' }}
              src={post.image}
              alt='img'
              fill
            />
          </Style.ImgContainer>

          <Style.ResVStack>
            <Layout.VStack>
              <CrosshatchTag>{post.tag}</CrosshatchTag>
              <Style.ResH2>{post.title}</Style.ResH2>
              <Style.P>{post.description}</Style.P>
            </Layout.VStack>

            <Layout.VStack>
              <Layout.HStack alignItems='flex-end' justifyContent='space-between'>
                <Layout.HStack gap='10px' alignItems='center'>
                  <Style.InfoP suppressHydrationWarning>{post.formattedDate}</Style.InfoP>
                  <Style.InfoP>{`${post.readingTime} min`}</Style.InfoP>
                  {viewStatus.isSuccess && <Style.InfoP>{`${post.views} views`}</Style.InfoP>}
                </Layout.HStack>
              </Layout.HStack>
            </Layout.VStack>
          </Style.ResVStack>
        </Style.ListBoxWrapper>
      </Link>
    </motion.div>
  );
};

export default PostPreview;

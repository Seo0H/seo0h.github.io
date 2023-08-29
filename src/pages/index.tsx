import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import { useLiveReload } from 'next-contentlayer/hooks';

import { Post } from 'contentlayer/generated';

import BlogBox from '@/components/common/BlogBox';
import * as Layout from '@/components/layout';
import { fadeIn, staggerHalf } from '@/lib/animations';
import { allPostTitle } from '@/utils/blogDataset';

export default function Home({ posts }: { posts: Post[] }) {
  useLiveReload();
  return (
    <Layout.Box padding='0 10px' margin='0 0 100px 0'>
      <motion.section variants={staggerHalf} initial='initial' animate='animate'>
        <motion.div variants={fadeIn}>
          <Layout.Box margin='30px 0 25px 0'>
            <h1>Seo (young)</h1>
          </Layout.Box>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Layout.VStack gap='10px' margin='0 0 100px 0'>
            <p>
              I am a front-end developer who loves design and coding.
              <br />
              This is a small space where I record the problems I faced while making the product.
            </p>
            -
            <p>
              디자인과 코딩을 사랑하는 프론트엔드 개발자입니다. 무언가를 만들어내는 것을 사랑하는
              메이커이기도 해요.
              <br />
              이곳은 제가 메이킹을 하며 마주한 문제들을 기록해 둔 소소한 공간입니다.
            </p>
          </Layout.VStack>
        </motion.div>
      </motion.section>

      <motion.section variants={staggerHalf} initial='initial' animate='animate'>
        <motion.div variants={staggerHalf}>
          <Layout.VStack gap='20px'>
            {/* TODO ling as 에 /blog 붙여야 되는거 추후 수정 */}
            {posts.map((post) => (
              <BlogBox key={crypto.randomUUID()} post={post} />
            ))}
          </Layout.VStack>
        </motion.div>
      </motion.section>
    </Layout.Box>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return { props: { posts: allPostTitle } };
};

import { useState } from 'react';

import { Variant, motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import { useLiveReload } from 'next-contentlayer/hooks';

import { Post } from 'contentlayer/generated';

import FilleterBtn from '@/components/FilterTag';
import BlogBox from '@/components/common/BlogBox';
import * as Layout from '@/components/layout';
import { fadeIn, staggerHalf } from '@/lib/animations';
import { TagList, cleanAllPost } from '@/utils/blogDataset';

export default function Home({ posts, tags }: { posts: Post[]; tags: string[] }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedTag, setSelectedTag] = useState('ALL');

  const handleTagFilter = (tagName: string | 'ALL') => {
    if (tagName === 'ALL') {
      setFilteredPosts(posts);
      setSelectedTag('ALL');
    } else {
      setFilteredPosts(posts.filter((post) => post.url.includes(tagName)));
      setSelectedTag(tagName);
    }
  };

  return (
    <Layout.Box padding='0 10px' margin='0 0 100px 0' width='92%'>
      <motion.section variants={staggerHalf} initial='initial' animate='animate'>
        <motion.div variants={fadeIn}>
          <Layout.Box margin='30px 0 25px 0'>
            <h1>Seo / 시오</h1>
          </Layout.Box>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Layout.VStack gap='10px' margin='0 0 50px 0'>
            <p>
              I am a front-end developer who loves design and coding.
              <br />
              This is a space where I record the experiences I encountered while making.
            </p>
            -
            <p>
              디자인과 코딩을 사랑하는 프론트엔드 개발자입니다.
              <br />
              이곳은 제가 메이킹을 하며 마주한 경험들을 기록해 둔 공간입니다.
            </p>
          </Layout.VStack>
        </motion.div>
      </motion.section>

      <motion.section variants={fadeIn} initial='initial' animate='animate'>
        <Layout.HStack margin='0 0 15px 0' gap='10px'>
          <FilleterBtn onClick={() => handleTagFilter('ALL')} $isSelected={selectedTag === 'ALL'}>
            ALL
          </FilleterBtn>
          {tags.map((tag) => (
            <FilleterBtn
              key={crypto.randomUUID()}
              onClick={() => handleTagFilter(tag || '')}
              $isSelected={selectedTag === tag}
            >
              {tag}
            </FilleterBtn>
          ))}
        </Layout.HStack>
      </motion.section>

      <motion.section variants={staggerHalf} initial='initial' animate='animate'>
        <motion.div variants={staggerHalf}>
          <Layout.VStack gap='20px'>
            {filteredPosts.map((post) => (
              <BlogBox key={crypto.randomUUID()} post={post} />
            ))}
          </Layout.VStack>
        </motion.div>
      </motion.section>
    </Layout.Box>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return { props: { posts: cleanAllPost, tags: TagList } };
};

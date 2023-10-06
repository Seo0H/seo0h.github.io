import { useState } from 'react';

import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';

import FilterTagBtn from '@/components/FilterTagBtn';
import { PageSEO } from '@/components/SEO';
import BlogBox from '@/components/common/BlogBox';
import * as Layout from '@/components/layout';
import * as Style from '@/components/style';
import { cleanAllPost, AllTags } from '@/constants/blogDataset';
import { fadeIn, staggerHalf } from '@/lib/animations';

import type { ReducedPost } from '@/lib/types';

export default function Home({ posts, tags }: { posts: ReducedPost[]; tags: string[] }) {
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
      <PageSEO />
      <motion.section variants={staggerHalf} initial='initial' animate='animate'>
        <motion.div variants={fadeIn}>
          <Layout.Box margin='30px 0 25px 0'>
            <h1>Seo / 시오</h1>
          </Layout.Box>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Layout.VStack gap='10px' margin='0 0 50px 0'>
            <Style.GettingP>
              I am a front-end developer who loves design and coding.
              {`
              This is a space where I record the experiences I encountered while making.`}
            </Style.GettingP>
            -
            <Style.GettingP>
              디자인과 코딩을 사랑하는 프론트엔드 개발자입니다.{' '}
              {`
              이곳은 제가 메이킹을 하며 마주한 경험들을 기록해 둔 공간입니다.`}
            </Style.GettingP>
          </Layout.VStack>
        </motion.div>
      </motion.section>

      <motion.section variants={fadeIn} initial='initial' animate='animate'>
        <Layout.HStack margin='0 0 15px 0' gap='10px'>
          <FilterTagBtn onClick={() => handleTagFilter('ALL')} $isSelected={selectedTag === 'ALL'}>
            ALL
          </FilterTagBtn>
          {tags.map((tag) => (
            <FilterTagBtn
              key={crypto.randomUUID()}
              onClick={() => handleTagFilter(tag || '')}
              $isSelected={selectedTag === tag}
            >
              {tag}
            </FilterTagBtn>
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
  return { props: { posts: cleanAllPost, tags: AllTags } };
};

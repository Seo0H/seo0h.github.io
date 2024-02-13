import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import GetAllPost from '@/api/post/get-all-post';
import { isError } from '@/api/views/type';
import FilterTagBtn from '@/components/FilterTagBtn';
import { updateViewFromServerPost } from '@/components/blog-main/utils';
import * as Layout from '@/components/layout';
import PostPreview from '@/components/post-preview';
import { fadeIn, staggerHalf } from '@/lib/animations';

import type { BlogMainProps } from '@/components/blog-main';

const PostList = ({ posts, tags }: BlogMainProps) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [selectedTag, setSelectedTag] = useState('ALL');

  useEffect(() => {
    const postViewFromServer = new GetAllPost();
    postViewFromServer.fetch().then((serverPosts) => {
      if (isError(serverPosts) || serverPosts.length === 0) return;
      setFilteredPosts((clientPosts) => updateViewFromServerPost(clientPosts, serverPosts));
    });
  }, []);

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
    <>
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
              <PostPreview key={crypto.randomUUID()} post={post} />
            ))}
          </Layout.VStack>
        </motion.div>
      </motion.section>
    </>
  );
};

export default PostList;

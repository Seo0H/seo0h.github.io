import { AnimatePresence, motion } from 'framer-motion';

import TagFilter from '@/components/blog-main/tag-fliter';
import * as Layout from '@/components/layout';
import PostPreview from '@/components/post-preview';
import PostPreviewSkeleton from '@/components/post-preview/skeleton';
import { fadeIn, staggerHalf } from '@/lib/animations';
import useCombinedPost from '@/lib/hooks/use-combined-post';
import useFilteredPost from '@/lib/hooks/use-filtered-post';

import type { BlogMainProps } from '@/components/blog-main';

const PostList = ({ posts: initialPost, tags }: BlogMainProps) => {
  const { posts, status: postStatus } = useCombinedPost(initialPost);
  const { filteredPosts, selectedTag, setTag } = useFilteredPost(posts, 'ALL');

  const handleTagFilter = (tagName: string | 'ALL') => {
    setTag(tagName);
  };

  return (
    <>
      <motion.section variants={fadeIn} initial='initial' animate='animate'>
        <Layout.HStack margin='0 0 15px 0' gap='10px'>
          <TagFilter onSelect={handleTagFilter} tags={tags} selectedTag={selectedTag} />
        </Layout.HStack>
      </motion.section>

      <motion.section variants={staggerHalf} initial='initial' animate='animate'>
        <motion.div variants={staggerHalf}>
          <Layout.VStack gap='20px'>
            <AnimatePresence>
              {(postStatus.isLoading || postStatus.isAbort) && (
                <motion.div
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Layout.VStack width='100%' gap='20px'>
                    <PostPreviewSkeleton />
                    <PostPreviewSkeleton />
                    <PostPreviewSkeleton />
                  </Layout.VStack>
                </motion.div>
              )}
              {(postStatus.isSuccess || postStatus.isError) &&
                filteredPosts.map((post) => (
                  <PostPreview key={crypto.randomUUID()} post={post} viewStatus={postStatus} />
                ))}
            </AnimatePresence>
          </Layout.VStack>
        </motion.div>
      </motion.section>
    </>
  );
};

export default PostList;

import { AnimatePresence, motion } from 'framer-motion';

import { usePostsContext } from '@/components/blog-main/context';
import * as Layout from '@/components/layout';
import PostPreview from '@/components/post-preview';
import PostPreviewSkeleton from '@/components/post-preview/skeleton';
import { staggerHalf } from '@/lib/animations';

const PostList = () => {
  const { displayPosts, apiStatus: postApiStatus } = usePostsContext();

  return (
    <motion.section variants={staggerHalf} initial='initial' animate='animate'>
      <motion.div variants={staggerHalf}>
        <Layout.VStack gap='20px'>
          <AnimatePresence>
            {(postApiStatus.isLoading || postApiStatus.isAbort) && (
              <motion.div initial={{ opacity: 0.8 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Layout.VStack width='100%' gap='20px'>
                  <PostPreviewSkeleton />
                  <PostPreviewSkeleton />
                  <PostPreviewSkeleton />
                </Layout.VStack>
              </motion.div>
            )}
            {(postApiStatus.isSuccess || postApiStatus.isError) &&
              displayPosts.map((post) => (
                <PostPreview key={crypto.randomUUID()} post={post} viewStatus={postApiStatus} />
              ))}
          </AnimatePresence>
        </Layout.VStack>
      </motion.div>
    </motion.section>
  );
};

export default PostList;

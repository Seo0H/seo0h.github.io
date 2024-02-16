import { motion } from 'framer-motion';

import TagFilter from '@/components/blog-main/tag-fliter';
import * as Layout from '@/components/layout';
import { fadeIn } from '@/lib/animations';
import useFilteredPost from '@/lib/hooks/use-filtered-post';

const TagFilterContainer = ({ tags }: { tags: string[] }) => {
  const { setTag, selectedTag } = useFilteredPost('ALL');

  const handleTagFilter = (tagName: string | 'ALL') => {
    setTag(tagName);
  };

  return (
    <motion.section variants={fadeIn} initial='initial' animate='animate'>
      <Layout.HStack margin='0 0 15px 0' gap='10px'>
        <TagFilter onSelect={handleTagFilter} tags={tags} selectedTag={selectedTag} />
      </Layout.HStack>
    </motion.section>
  );
};

export default TagFilterContainer;

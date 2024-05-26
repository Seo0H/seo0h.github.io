import { motion } from 'framer-motion';

import FilterTagBtn from '../FilterTagBtn';
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
  );
};

export default TagFilterContainer;

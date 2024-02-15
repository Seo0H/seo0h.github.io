import { useCallback, useState } from 'react';

import type { Post } from '@/types/post';

const useFilteredPost = (initialPosts: Post[], initialTag: string) => {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const [selectedTag, setSelectedTag] = useState(initialTag);

  const setTag = useCallback((tag: string) => {
    if (tag === initialTag) {
      setFilteredPosts(initialPosts);
    } else {
      setFilteredPosts(initialPosts.filter((post) => post.url.includes(tag)));
    }

    setSelectedTag(tag);
  }, []);

  return { setTag, filteredPosts, selectedTag };
};

export default useFilteredPost;

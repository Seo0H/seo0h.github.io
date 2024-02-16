import { useCallback, useEffect, useState } from 'react';

import { usePostsContext } from '@/components/blog-main/context';

const useFilteredPost = (initialTag: string) => {
  const { setDisplayPosts, allPosts } = usePostsContext();
  const [selectedTag, setSelectedTag] = useState(initialTag);

  const setTag = useCallback(
    (tag: string) => {
      if (tag === initialTag) {
        setDisplayPosts(allPosts);
      } else {
        setDisplayPosts(allPosts.filter((post) => post.url.includes(tag)));
      }

      setSelectedTag(tag);
    },
    [allPosts, initialTag],
  );

  return { setTag, selectedTag };
};

export default useFilteredPost;

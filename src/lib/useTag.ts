import { Post } from 'contentlayer/generated';

const useTag = (post: Post) => {
  // ex. /2023/some-tag/title -> ['', 2023, some-tag, title]
  return { tag: post._raw.sourceFileDir.split('/')[1] || null };
};

export default useTag;

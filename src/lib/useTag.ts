import { Post } from 'contentlayer/generated';

const useTag = (post: Post) => {
  // ex. /2023/some-tag/title -> ['', 2023, some-tag, title]
  return { tag: post.url.split('/')[2] };
};

export default useTag;

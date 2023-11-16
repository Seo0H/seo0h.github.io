import { Post } from 'contentlayer/generated';

const getTag = (post: Post) => {
  // ex. /2023/some-tag/title -> ['', 2023, some-tag, title]
  return { tag: post._raw.sourceFileDir.split('/')[1] };
};

export default getTag;

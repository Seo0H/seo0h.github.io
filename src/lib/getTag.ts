import { Post } from 'contentlayer/generated';

const getTag = (post: Post) => {
  return { tag: post._raw.sourceFileDir.split('/')[0] };
};

export default getTag;

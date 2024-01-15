import { Post } from 'contentlayer/generated';

const getTag = (post: Post) => {
  return { tag: post._raw.sourceFileDir.replace('/', '') }; // ex. /some-tag
};

export default getTag;

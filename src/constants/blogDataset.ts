import { compareDesc } from 'date-fns';

import { type Post, allPosts } from 'contentlayer/generated';

export const reducePost = ({ body: _, _raw, _id, ...post }: Post) => post;

export const cleanAllPost = allPosts
  .filter((post) => !post.draft)
  .map(makeTag)
  .sort((a, b) => compareDesc(new Date(a.date).getTime(), new Date(b.date).getTime()));

export const allReducedPosts = cleanAllPost.map(reducePost);

function makeTag(post: Post) {
  return {
    tag: post._raw.sourceFileDir.split('/')[1],
    ...post,
  };
}

export const AllTags = Array.from(
  cleanAllPost.reduce<Set<string>>((acc, post) => {
    acc.add(post.tag);
    return acc;
  }, new Set()),
);

import { compareDesc } from 'date-fns';

import { type Post as ContentlayerPost, allPosts } from 'contentlayer/generated';

import getTag from '@/lib/getTag';

export const reducePost = ({ body: _, _raw, _id, ...post }: ContentlayerPost) => post;

type Post = ContentlayerPost & { tag: string };

export const cleanAllPost = allPosts
  .filter((post) => !post.draft)
  .map(removeUUIDNewLine)
  .map(enrichPostWithTag)
  .sort((a, b) => compareDesc(new Date(a.date).getTime(), new Date(b.date).getTime()));

export const allReducedPosts = cleanAllPost.map(reducePost);

function enrichPostWithTag(post: ContentlayerPost): Post {
  const { tag } = getTag(post);
  return {
    tag,
    ...post,
  };
}

function removeUUIDNewLine(post: ContentlayerPost) {
  return {
    ...post,
    uuid: post.uuid.replace(/\n|\r|\s*/g, ''),
  };
}

export const AllTags = Array.from(
  cleanAllPost.reduce<Set<string>>((acc, post) => {
    acc.add(post.tag);
    return acc;
  }, new Set()),
);

import { compareDesc } from 'date-fns';

import { type Post, allPosts } from 'contentlayer/generated';

import type { ReducedPost } from '@/lib/types';
import type { RawDocumentData } from 'contentlayer/source-files';

export const reducePost = ({ body: _, _raw, _id, ...post }: Post) =>
  addTagProp({ _raw, ...post }) as ReducedPost;

export const cleanAllPost = allPosts
  .map(reducePost)
  .filter((post) => post.draft !== true)
  .sort((a, b) => compareDesc(new Date(a.date).getTime(), new Date(b.date).getTime()));

export const TagList = cleanAllPost.filter((post) => post.tag !== undefined);

function addTagProp({ _raw, ...post }: { _raw: RawDocumentData }) {
  return {
    tag: _raw.sourceFileDir.split('/')[1],
    ...post,
  };
}

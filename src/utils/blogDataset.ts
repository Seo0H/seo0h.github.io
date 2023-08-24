import type { ReducedPost } from '@/lib/types';
import { type Post, allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const reducePost = ({ body: _, _raw, _id, ...post }: Post): ReducedPost => post;

export const allPostTitle = allPosts
  .map(reducePost)
  .sort((a, b) => compareDesc(new Date(a.date).getTime(), new Date(b.date).getTime()));

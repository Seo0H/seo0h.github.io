import type { ReducedPost } from '@/lib/types';
import { type Post, allPosts } from 'contentlayer/generated';

export const reducePost = ({ body: _, _raw, _id, ...post }: Post): ReducedPost => post;

export const allPostTitle = allPosts.map(reducePost);

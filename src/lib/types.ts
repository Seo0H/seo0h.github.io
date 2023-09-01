import { Post, Post as TPost } from 'contentlayer/generated';

export type ReducedPost = Omit<Omit<Omit<TPost, 'body'>, '_raw'>, '_id'>;

export interface BlogProps {
  post: Post;
}
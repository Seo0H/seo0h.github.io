import { type Post as ContentlayerPost } from 'contentlayer/generated';

import getTag from '@/lib/getTag';
import { Post } from '@/types/post';

export function initializePost(post: ContentlayerPost): Post {
  const { tag } = getTag(post);
  return {
    ...post,
    tag,
    uuid: post.uuid.replace(/\n|\r|\s*/g, ''),
    views: 0,
  };
}

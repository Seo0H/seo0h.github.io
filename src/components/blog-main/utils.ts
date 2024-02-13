import type { ServerPost } from '@/api/post/get-all-post';
import type { Post } from '@/types/post';

/**
 * @description clientPost에 serverPostInfo에 있는 views를 추가하는 함수
 */
export function updateViewFromServerPost(clientPosts: Post[], serverPostInfos: ServerPost[]) {
  return clientPosts.map((clientPost) => {
    const updatedPost = serverPostInfos
      .filter((serverPost) => serverPost.id === clientPost.uuid)
      .pop();

    return { ...clientPost, view: Number(updatedPost?.views) || clientPost.view };
  });
}

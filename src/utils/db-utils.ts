import type { Post } from 'contentlayer/generated';

import supabase from '@/api/client';
import { cleanAllPost } from '@/constants/blogDataset';
import { Tables } from '@/types/database.types';

type PostsIdentifier = {
  id: string;
  title: string;
};

/**
 * @description 서버 데이터 업데이트 판별 함수
 * @param serverPostsBeforeSorted
 * @param clientPostsBeforeSorted
 * @returns
 */
export function calcUpdateNeeded(
  serverPostsBeforeSorted: PostsIdentifier[],
  clientPostsBeforeSorted: typeof cleanAllPost,
) {
  const serverPosts = [...serverPostsBeforeSorted].sort((a, b) => (a.id > b.id ? 1 : -1));

  if (serverPosts.length === 0) return true;

  const clientPosts = clientPostsBeforeSorted
    .map((post) => ({ id: post.uuid, title: post.title }))
    .sort((a, b) => (a.id > b.id ? 1 : -1));

  const isClientAndServerPostCountSame = serverPosts?.length === clientPosts.length;
  const isTitleAllMatch = clientPosts.every((clientPost, idx) => {
    return serverPosts[idx] !== undefined && clientPost.title === serverPosts[idx].title;
  });
  const isUpdateNeeded = !isClientAndServerPostCountSame || isTitleAllMatch === false;

  return isUpdateNeeded;
}

/**
 * @description 서버 포스트 식별자 데이터를 클라이언트 데이터 식별자 기준으로 업데이트 하는 함수
 * @param clientPosts
 * @param serverPostIdentifiers
 */
export async function updatePostsOnServer(
  clientPosts: Post[],
  serverPostIdentifiers: PostsIdentifier[],
) {
  const insertPosts: Tables<'post'>[] = [];
  const updatePosts: Tables<'post'>[] = [];

  const clientPostsIdentifiers = clientPosts
    .map((post) => ({ id: post.uuid, title: post.title }))
    .sort((a, b) => (a.id > b.id ? 1 : -1));

  clientPostsIdentifiers.forEach((clientIdentifier) => {
    // 동기화 작업. 클라이언트의 포스트 기준 업데이트
    const isUUIDExist = serverPostIdentifiers.some(
      (serverPost) => serverPost.id === clientIdentifier.id,
    );
    const isTitleChanged =
      isUUIDExist &&
      serverPostIdentifiers.some((serverPost) => serverPost.title === clientIdentifier.title) ===
        false;

    if (!isUUIDExist) {
      insertPosts.push(clientIdentifier);
    }

    // id는 있지만 타이틀이 다른 경우
    if (isTitleChanged) {
      updatePosts.push(clientIdentifier);
    }
  });

  try {
    if (insertPosts.length) {
      await supabase.from('post').insert(insertPosts);
    }

    if (updatePosts.length) {
      await supabase.from('post').upsert(updatePosts);
    }
  } catch (e) {
    console.error(e);
  }
}

import supabase from '@/api/database';
import { postTableName } from '@/lib/mode';

import type { Tables } from '@/types/database.types';
import type { Post } from '@/types/post';

/**
 * @description 서버 데이터 업데이트 판별 함수
 * @param serverPostsBeforeSorted
 * @param clientPostsBeforeSorted
 * @returns
 */
export function isUpdateNeeded(
  serverPostsBeforeSorted: Tables<'post'>[],
  clientPostsBeforeSorted: Post[],
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

  return !isClientAndServerPostCountSame || isTitleAllMatch === false;
}

/**
 * @description Post 서버 데이터를 클라이언트 Post 데이터 기준으로 업데이트 하는 함수
 * @param clientPosts
 * @param serverPosts
 */
export async function updatePostsOnServer(clientPosts: Post[], serverPosts: Tables<'post'>[]) {
  const insertPosts: Omit<Tables<'post'>, 'view'>[] = [];
  const updatePosts: Omit<Tables<'post'>, 'view'>[] = [];

  const clientPostsIdentifiers = clientPosts
    .map((post) => ({ id: post.uuid, title: post.title }))
    .sort((a, b) => (a.id > b.id ? 1 : -1));

  clientPostsIdentifiers.forEach((clientIdentifier) => {
    // 동기화 작업. 클라이언트의 포스트 기준 업데이트
    const isUUIDExist = serverPosts.some((serverPost) => serverPost.id === clientIdentifier.id);
    const isTitleChanged =
      isUUIDExist &&
      serverPosts.some((serverPost) => serverPost.title === clientIdentifier.title) === false;

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
      const data = await supabase.from(postTableName).insert(insertPosts);
      if (data.error) throw data;
      console.log(`[SUPABASE] insert success`);
    }

    if (updatePosts.length) {
      const data = await supabase.from(postTableName).upsert(updatePosts);
      if (data.error) throw data;
      console.log(`[SUPABASE] update success`);
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}

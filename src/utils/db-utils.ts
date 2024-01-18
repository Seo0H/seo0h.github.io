import type { Post } from 'contentlayer/generated';

import supabase from '@/api/client';
import { cleanAllPost } from '@/constants/blogDataset';

import type { Tables } from '@/types/database.types';

/**
 * @description Post의 서버 데이터 업데이트 필요 여부 핸들링 함수
 */
export async function handlePostDataServerUpdate({
  serverPosts,
  clientPosts,
}: {
  serverPosts: Tables<'post'>[];
  clientPosts: typeof cleanAllPost;
}) {
  if (isUpdateNeeded(serverPosts, clientPosts) === false) console.log("✅ Update isn't needed!");
  else {
    try {
      console.log('⚠️ Update is needed');
      await updatePostsOnServer(clientPosts, serverPosts);
    } catch (error) {
      throw new Error('포스트 데이터를 서버에 업데이트 하던 중 에러가 발생했습니다.');
    }
  }
}

/**
 * @description 서버 데이터 업데이트 판별 함수
 * @param serverPostsBeforeSorted
 * @param clientPostsBeforeSorted
 * @returns
 */
function isUpdateNeeded(
  serverPostsBeforeSorted: Tables<'post'>[],
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

  return !isClientAndServerPostCountSame || isTitleAllMatch === false;
}

/**
 * @description Post 서버 데이터를 클라이언트 Post 데이터 기준으로 업데이트 하는 함수
 * @param clientPosts
 * @param serverPosts
 */
async function updatePostsOnServer(clientPosts: Post[], serverPosts: Tables<'post'>[]) {
  const insertPosts: Tables<'post'>[] = [];
  const updatePosts: Tables<'post'>[] = [];

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

  if (insertPosts.length) {
    await supabase.from('post').insert(insertPosts);
  }

  if (updatePosts.length) {
    await supabase.from('post').upsert(updatePosts);
  }
}

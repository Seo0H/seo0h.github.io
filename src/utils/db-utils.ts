import supabase from '@/api/database';
import { postTableName } from '@/lib/mode';

import type { Tables } from '@/types/database.types';
import type { Post } from '@/types/post';

// FIXME: 해당 유틸 함수들 PostData class 메서드로 이동 필요. Post Data의 '행동'과 관련된 함수들이기 때문

/**
 * @description Post의 서버 데이터 업데이트 필요 여부 핸들링 함수
 */
export async function handlePostDataServerUpdate({
  serverPosts,
  clientPosts,
}: {
  serverPosts: Tables<'post'>[];
  clientPosts: Post[];
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
async function updatePostsOnServer(clientPosts: Post[], serverPosts: Tables<'post'>[]) {
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
      await supabase.from(postTableName).insert(insertPosts);
    }

    if (updatePosts.length) {
      await supabase.from(postTableName).upsert(updatePosts);
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}

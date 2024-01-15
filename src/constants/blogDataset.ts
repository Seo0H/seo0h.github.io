import { compareDesc } from 'date-fns';

import { type Post, allPosts } from 'contentlayer/generated';

import supabase from '@/api/client';
import getTag from '@/lib/getTag';
import { Tables } from '@/types/database.types';

export const reducePost = ({ body: _, _raw, _id, ...post }: Post) => post;

export const cleanAllPost = allPosts
  .filter((post) => !post.draft)
  .map(removeUUIDNewLine)
  .map(enrichPostWithTag)
  .sort((a, b) => compareDesc(new Date(a.date).getTime(), new Date(b.date).getTime()));

export const allReducedPosts = cleanAllPost.map(reducePost);

function enrichPostWithTag(post: Post) {
  const { tag } = getTag(post);
  return {
    tag,
    ...post,
  };
}

function removeUUIDNewLine(post: Post): Post {
  return {
    ...post,
    uuid: post.uuid.replace(/\n|\r|\s*/g, ''),
  };
}

export const AllTags = Array.from(
  cleanAllPost.reduce<Set<string>>((acc, post) => {
    acc.add(post.tag);
    return acc;
  }, new Set()),
);

type PostsIdAndTitle = {
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
  serverPostsBeforeSorted: PostsIdAndTitle[],
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

export async function updatePostsOnServer(
  clientPosts: PostsIdAndTitle[],
  serverPosts: PostsIdAndTitle[],
) {
  const insertPosts: Tables<'post'>[] = [];
  const updatePosts: Tables<'post'>[] = [];

  clientPosts.forEach((clientPost) => {
    // 동기화 작업. 클라이언트의 포스트 기준 업데이트
    const isUUIDExist = serverPosts.some((serverPost) => serverPost.id === clientPost.id);
    const isTitleChanged =
      isUUIDExist &&
      serverPosts.some((serverPost) => serverPost.title === clientPost.title) === false;

    if (!isUUIDExist) {
      insertPosts.push(clientPost);
    }

    // id는 있지만 타이틀이 다른 경우
    if (isTitleChanged) {
      updatePosts.push(clientPost);
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

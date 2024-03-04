import { compareDesc } from 'date-fns';

import { allPosts } from 'contentlayer/generated';

import { getBlogPost } from '@/api/database';
import { isUpdateNeeded, updatePostsOnServer } from '@/constants/blogDataset/utils';
import { initializePost } from '@/constants/utils';

import type { Tables } from '@/types/database.types';
import type { Post } from '@/types/post';

/**
 * @description 싱글톤 클래스. Server Data와 Client data 를 결합해 유저에게 보여 줄 Post Data 객체를 생성
 */
export class StaticPostData {
  private static instance: StaticPostData;

  public clientPosts: Post[];
  public serverPosts: Tables<'post'>[] | [];
  public allTags: string[];

  private constructor() {
    // 클라이언트 데이터로 데이터 프로퍼티 초기화 진행
    this.clientPosts = allPosts
      .filter((post) => !post.draft)
      .map(initializePost)
      .sort((a, b) => compareDesc(new Date(a.date).getTime(), new Date(b.date).getTime()));

    this.allTags = Array.from(
      this.clientPosts.reduce<Set<string>>((acc, post) => {
        acc.add(post.tag);
        return acc;
      }, new Set()),
    );

    // 추후 인스턴스를 호출할 시 서버 데이터와 동기화하기 때문에 우선 초기화함.
    this.serverPosts = [];
  }

  /**
   * @description StaticPostData의 싱글톤 인스턴스를 반환하는 인스턴스 메서드. 호출 시 서버 Data 동기화 진행.
   */
  public static async getInstance() {
    if (!StaticPostData.instance) {
      StaticPostData.instance = new StaticPostData();
    }

    StaticPostData.instance.serverPosts = await getBlogPost();
    return StaticPostData.instance;
  }

  public async synchronizeServerAndClientPosts() {
    if (isUpdateNeeded(this.serverPosts, this.clientPosts) === false)
      console.log("✅ Update isn't needed!");
    else {
      try {
        console.log('⚠️ Update is needed');
        await updatePostsOnServer(this.clientPosts, this.serverPosts);
      } catch (error) {
        throw new Error('포스트 데이터를 서버에 업데이트 하던 중 에러가 발생했습니다.');
      }
    }
  }
}

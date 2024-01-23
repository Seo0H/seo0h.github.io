import { compareDesc } from 'date-fns';

import { allPosts } from 'contentlayer/generated';

import { getBlogPost } from '@/api/database';
import { initializePost } from '@/constants/utils';

import type { Tables } from '@/types/database.types';
import type { Post } from '@/types/post';

/**
 * @description 싱글톤 클래스. Server Data와 Client data 를 결합해 유저에게 보여 줄 Post Data 객체를 생성
 */
export class PostData {
  private static instance: PostData;

  public posts: Post[];
  public serverPosts: Tables<'post'>[] | [];
  public allTags: string[];

  private constructor() {
    // 클라이언트 데이터로 데이터 프로퍼티 초기화 진행
    this.posts = allPosts
      .filter((post) => !post.draft)
      .map(initializePost)
      .sort((a, b) => compareDesc(new Date(a.date).getTime(), new Date(b.date).getTime()));

    this.allTags = Array.from(
      this.posts.reduce<Set<string>>((acc, post) => {
        acc.add(post.tag);
        return acc;
      }, new Set()),
    );

    // 추후 인스턴스를 호출할 시 서버 데이터와 동기화
    this.serverPosts = [];
  }

  /**
   * @description PostData의 싱글톤 인스턴스를 반환하는 인스턴스 메서드. 호출 시 서버 Data 동기화 진행.
   */
  public static async getInstance() {
    if (!PostData.instance) {
      PostData.instance = new PostData();

      PostData.instance.serverPosts = await getBlogPost();
      PostData.instance.updatePostViewsFromServer();
    }
    return PostData.instance;
  }

  /**
   * @description 각 포스트의 조회수 서버 데이터를 클라이언트 포스트 데이터에 추가하는 함수.
   */
  private updatePostViewsFromServer() {
    if (this.serverPosts.length === 0) throw new Error('server post data가 누락되었습니다.');

    this.posts = this.posts.map((post) => {
      const addViewPost: Post = { ...post, view: 0 };
      addViewPost.view =
        this.serverPosts.find((serverPosts) => post.uuid === serverPosts.id)?.view ?? 0;
      return addViewPost;
    });
  }
}

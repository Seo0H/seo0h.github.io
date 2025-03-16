import { type Post as ContentlayerPost } from 'contentlayer/generated';

export type Post = ContentlayerPost & {
  tag: string;
  /**
   * @description 포스트 조회수 / 2025.03.16 기준 AWS E2C 서버 비용 문제로 기능 보류
   */
  views: number;
};

import axios, { AxiosError, CancelTokenSource } from 'axios';

import client from '@/api/client';
import { initialApiStatus, type API, type APIStatusType, ErrorType } from '@/api/views/type';

import type { Post } from '@/types/post';

export type PostViews = {
  views: string;
};

export default class IncreasePostViewsApi implements API<PostViews> {
  readonly END_POINT = '/post/views' as const;
  readonly postId: string;

  private status: APIStatusType = initialApiStatus;
  private cancelTokenSource?: CancelTokenSource;

  constructor({ uuid: postId }: Pick<Post, 'uuid'>, cancelTokenSource?: CancelTokenSource) {
    if (cancelTokenSource) this.cancelTokenSource = cancelTokenSource;
    this.postId = postId;
  }

  async fetch() {
    try {
      this.status = { ...initialApiStatus, isLoading: true };

      const { data } = await client.patch<PostViews>(
        this.END_POINT,
        {
          id: this.postId,
        },
        { withCredentials: true, cancelToken: this.cancelTokenSource?.token },
      );

      if (Number.isNaN(Number(data.views))) throw new Error('API Interface Error');

      this.status = { ...initialApiStatus, isSuccess: true };

      return data;
    } catch (e) {
      if (axios.isCancel(e)) {
        this.status = { ...initialApiStatus, isAbort: true };
        return {
          message: e.message,
          error: e,
        };
      }

      if (e instanceof AxiosError || e instanceof Error) {
        this.status = { ...initialApiStatus, isError: true };
        throw {
          message: e.message,
          error: e,
        };
      }

      this.status = { ...initialApiStatus, isError: true };
      throw { message: '알 수 없는 에러가 일어났습니다.', error: e };
    }
  }

  getStatus() {
    return this.status;
  }
}

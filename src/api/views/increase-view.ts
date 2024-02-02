import axios, { AxiosError, CancelTokenSource } from 'axios';

import client from '@/api/client';

import type { API, APIResponseType, APIStatusType } from '@/api/views/type';
import type { Post } from '@/types/post';

export const initialApiStatus: APIStatusType = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  isAbort: false,
};

type PostViews = {
  views: number;
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

      const { data } = await client.patch<APIResponseType<PostViews>>(
        this.END_POINT,
        {
          id: this.postId,
        },
        { withCredentials: true, cancelToken: this.cancelTokenSource?.token },
      );

      this.status = { ...initialApiStatus, isSuccess: true };

      return { ...data };
    } catch (e) {
      if (axios.isCancel(e)) {
        this.status = { ...initialApiStatus, isAbort: true };
        return {
          data: null,
          message: e.message,
        };
      }

      if (e instanceof AxiosError || e instanceof Error) {
        this.status = { ...initialApiStatus, isError: true };
        return {
          data: null,
          message: e.message,
        };
      }

      // Unknown Error..
      this.status = { ...initialApiStatus, isError: true };
      throw e;
    }
  }

  getStatus() {
    return this.status;
  }
}

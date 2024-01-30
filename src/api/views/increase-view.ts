import { Console } from 'console';

import client from '@/api/client';

import type { API, APIResponseType, APIStatusType } from '@/api/views/type';
import type { Post } from '@/types/post';

export const initialApiStatus: APIStatusType = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  isAbort: false,
};

export default class IncreasePostViewsApi implements API {
  readonly END_POINT = '/post/views/increment' as const;
  readonly postId: string;

  private status: APIStatusType = initialApiStatus;
  private abortController?: AbortController;

  constructor({ uuid: postId }: Pick<Post, 'uuid'>, abortController?: AbortController) {
    if (abortController) this.abortController = abortController;
    this.postId = postId;
  }

  async fetch(): Promise<APIResponseType> {
    try {
      this.status = { ...initialApiStatus, isLoading: true };

      const { data } = await client.patch<{ data: string; message?: string }>(
        this.END_POINT,
        {
          data: { id: this.postId },
        },
        { withCredentials: true, signal: this.abortController?.signal },
      );

      this.status = { ...initialApiStatus, isSuccess: true };

      return { ...data };
    } catch (e) {
      if (this.abortController?.signal.aborted) {
        this.status = { ...initialApiStatus, isAbort: true };
        return {
          data: null,
          message: 'updatePost 요청이 취소되었습니다.',
        };
      }

      this.status = { ...initialApiStatus, isError: true };

      throw e;
    }
  }

  getStatus() {
    return this.status;
  }
}

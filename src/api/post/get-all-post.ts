import axios, { AxiosError, CancelTokenSource } from 'axios';

import client from '@/api/client';
import { initialApiStatus, type API, type APIStatusType } from '@/api/views/type';

export type ServerPost = {
  id: string;
  title: string;
  views: string;
};

export default class GetAllPostFromServer implements API<ServerPost[]> {
  readonly END_POINT = '/post';

  private status: APIStatusType = initialApiStatus;
  readonly cancelTokenSource?: CancelTokenSource;

  constructor(cancelTokenSource?: CancelTokenSource) {
    if (cancelTokenSource) this.cancelTokenSource = cancelTokenSource;
  }

  async fetch() {
    try {
      this.status = { ...initialApiStatus, isLoading: true };

      const { data } = await client.get<ServerPost[]>(this.END_POINT);

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
  getStatus(): APIStatusType {
    return this.status;
  }
}

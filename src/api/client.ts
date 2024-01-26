import { Post } from '@/types/post';

// TODO: NODE_ENV 추가
const isDev = true;
const BACKEND_API_URL = isDev ? 'http://localhost:8080' : process.env.NEXT_PUBLIC_BACKEND_URL;

export type APIReturnType = {
  status: boolean;
  data: number | null;
  message?: string;
};

export const updatePostViews = async (
  { uuid: id }: Pick<Post, 'uuid'>,
  abortController: AbortController,
): Promise<APIReturnType> => {
  try {
    // TODO: fetch -> axios
    const response = await fetch(`${BACKEND_API_URL}/post/views/increment`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ id }),
      credentials: 'include',
      signal: abortController.signal,
    });

    const data: APIReturnType = await response.json();

    return { ...data };
  } catch (e) {
    if (abortController.signal.aborted) {
      return { status: false, data: null, message: 'updatePost 요청이 취소되었습니다.' };
    }
    throw new Error('soothing wrong!');
  }
};

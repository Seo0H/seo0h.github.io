import { Post } from '@/types/post';

// TODO: NODE_ENV 추가
const isDev = true;
const BACKEND_API_URL = isDev ? 'http://localhost:8080' : process.env.NEXT_PUBLIC_BACKEND_URL;

type APIReturnType = {
  status: boolean;
  message: string;
};

export const updatePostViews = async (
  { uuid: id }: Pick<Post, 'uuid'>,
  abortController: AbortController,
): Promise<{ data: APIReturnType | null; error?: boolean }> => {
  try {
    const response = await fetch(`${BACKEND_API_URL}/post/views/increment`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ id }),
      credentials: 'include',
      signal: abortController.signal,
    });

    const data = await response.json();

    return { data };
  } catch (e) {
    if (!abortController.signal.aborted) {
      console.log('updatePost 요청이 취소되었습니다.');
    }
    return { error: true, data: null };
  }
};

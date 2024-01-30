import { useEffect, useState } from 'react';

import IncreasePostViewsApi, { initialApiStatus } from '@/api/views/increase-view';
import { APIStatusType } from '@/api/views/type';

import type { Post } from '@/types/post';

export default function useUpdateViews({ uuid, view: initialView }: Pick<Post, 'uuid' | 'view'>) {
  const [view, setView] = useState(initialView);
  const [apiStatus, setApiStatus] = useState<APIStatusType>({
    ...initialApiStatus,
    isLoading: true,
  });

  useEffect(() => {
    let abortController = new AbortController();
    const updateViewState = new IncreasePostViewsApi({ uuid }, abortController);

    updateViewState
      .fetch()
      .then((res) => {
        setView(Number(res.data));
      })
      .catch((e) => {
        // FIXME: 유의미한 에러 핸들링 처리 필요.
        setApiStatus(updateViewState.getStatus());
      })
      .finally(() => {
        setApiStatus(updateViewState.getStatus());
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return { view, status: apiStatus };
}

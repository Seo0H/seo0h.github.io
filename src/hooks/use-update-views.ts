import { useEffect, useState } from 'react';

import axios from 'axios';

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
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const updateViewState = new IncreasePostViewsApi({ uuid }, source);

    updateViewState
      .fetch()
      .then((res) => {
        if (updateViewState.getStatus().isAbort) return;
        setView(Number(res.data?.views));
      })
      .finally(() => {
        setApiStatus(updateViewState.getStatus());
      });

    return () => {
      source.cancel();
    };
  }, []);

  return { view, status: apiStatus };
}

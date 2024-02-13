import { useEffect, useState } from 'react';

import axios from 'axios';

import IncreasePostViewsApi from '@/api/views/increase-view';
import { isError, type APIStatusType, initialApiStatus } from '@/api/views/type';

import type { Post } from '@/types/post';

export default function useUpdateViews({ uuid, view: initialView }: Pick<Post, 'uuid' | 'view'>) {
  const [views, setView] = useState(initialView);
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
        if (!isError(res)) setView(Number(res?.views));
      })
      .finally(() => {
        setApiStatus(updateViewState.getStatus());
      });

    return () => {
      source.cancel();
    };
  }, []);

  return { views, status: apiStatus };
}

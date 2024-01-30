import React from 'react';

import useUpdateViews from '@/hooks/use-update-views';
import { Post } from '@/types/post';

const Views = ({ uuid, view: initialView }: Pick<Post, 'uuid' | 'view'>) => {
  const { view, status: viewsApiStatus } = useUpdateViews({ uuid, view: initialView });
  const { isLoading, isSuccess, isError } = viewsApiStatus;

  if (isLoading) {
    return <>Loading</>;
  }

  if (isError) {
    return <>ERROR!</>;
  }

  if (isSuccess) {
    return <>{`${view} views`}</>;
  }

  return <>{isLoading ? 'Loading...' : isError ? 'ERROR!' : isSuccess && `${view} views`}</>;
};

export default Views;

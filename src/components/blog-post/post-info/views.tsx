import { memo } from 'react';

import { usePostViewContext } from '@/components/blog-post/post-info/context';

const Views = () => {
  const { view, status: viewsApiStatus } = usePostViewContext();
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

export default memo(Views);

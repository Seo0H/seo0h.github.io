import { createContext, useContext } from 'react';

import { APIStatusType } from '@/api/views/type';

type PostViewContextValue = {
  view: number;
  status: APIStatusType;
};

const PostViewContext = createContext<PostViewContextValue | undefined>(undefined);

export const usePostViewContext = () => {
  const value = useContext(PostViewContext);
  if (value === undefined) {
    throw new Error('PostViewContext 내부에서만 사용 가능합니다.');
  }
  return value;
};

export default PostViewContext;

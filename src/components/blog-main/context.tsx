import { type Dispatch, type SetStateAction, createContext, useContext } from 'react';

import { APIStatusType } from '@/api/views/type';
import { Post } from '@/types/post';

type PostsContextType = {
  allPosts: Post[];
  displayPosts: Post[];
  setDisplayPosts: Dispatch<SetStateAction<Post[]>>;
  apiStatus: APIStatusType;
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export default PostsContext;

export const usePostsContext = () => {
  const value = useContext(PostsContext);

  if (!value) throw new Error('usePostsContext 는 PostsContext 내부에서 사용되어야 합니다.');

  return value;
};

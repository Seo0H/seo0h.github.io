import { useEffect, useId, useState } from 'react';

import axios from 'axios';

import GetAllPost from '@/api/post/get-all-post';
import { type APIStatusType, isError, initialApiStatus } from '@/api/views/type';
import { updateViewFromServerPost } from '@/components/blog-main/utils';

import type { Post } from '@/types/post';

/**
 *  서버 데이터와 클라이언트 데이터를 합치는 커스텀 훅
 * @returns {object} { posts : 서버 데이터 추가가 완료된 post 객체 , status : 서버 데이터 패칭 상태를 나타내는 변수, key: 재 랜더링 트리거 알림 변수 }
 */
const useCombinedPost = (initialPost: Post[]) => {
  const [posts, setPosts] = useState(initialPost);
  const [viewStatus, setViewApiStatus] = useState<APIStatusType>({
    ...initialApiStatus,
    isLoading: true,
  });

  const key = crypto.randomUUID();

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const postViewFromServer = new GetAllPost(source);

    postViewFromServer
      .fetch()
      .then((serverPosts) => {
        if (isError(serverPosts) || serverPosts.length === 0) return;
        setPosts((clientPosts) => updateViewFromServerPost(clientPosts, serverPosts));
      })
      .finally(() => {
        setViewApiStatus(postViewFromServer.getStatus());
      });

    return () => {
      source.cancel();
    };
  }, []);

  return { posts, status: viewStatus, key };
};

export default useCombinedPost;

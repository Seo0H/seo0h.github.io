import React, { createContext, useContext } from 'react';

import dynamic from 'next/dynamic';
import styled from 'styled-components';

import PostViewContext from '@/components/blog-post/post-info/context';
import useUpdateViews from '@/hooks/use-update-views';
import useWindowSize from '@/lib/useWindowSize';
import { Post } from '@/types/post';
import isMobile from '@/utils/isMobile';

import type { APIStatusType } from '@/api/views/type';

const MobileViewPostInfo = dynamic(() => import('@/components/blog-post/post-info/mobile'));
const PCViewPostInfo = dynamic(() => import('@/components/blog-post/post-info/pc'));

const PostInfo = ({ post, tag }: { post: Post; tag: string }) => {
  const { windowSize } = useWindowSize();
  const { view, status: viewsApiStatus } = useUpdateViews({ uuid: post.uuid, view: post.view });

  if (windowSize === undefined) {
    return <FilledBox>loading..</FilledBox>;
  }

  return (
    <PostViewContext.Provider value={{ view, status: viewsApiStatus }}>
      {isMobile(windowSize.width) ? (
        <MobileViewPostInfo post={post} tag={tag} />
      ) : (
        <PCViewPostInfo post={post} tag={tag} />
      )}
    </PostViewContext.Provider>
  );
};

export default PostInfo;

const FilledBox = styled.div`
  width: 100%;
  height: 100%;
`;

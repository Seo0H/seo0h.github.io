import dynamic from 'next/dynamic';

import PostViewContext from '@/components/blog-post/post-info/context';
import useUpdateViews from '@/lib/hooks/use-update-views';
import useWindowSize from '@/lib/useWindowSize';
import { Post } from '@/types/post';
import isMobile from '@/utils/isMobile';

const MobileViewPostInfo = dynamic(() => import('@/components/blog-post/post-info/mobile'));
const PCViewPostInfo = dynamic(() => import('@/components/blog-post/post-info/pc'));

const PostInfo = ({ post, tag }: { post: Post; tag: string }) => {
  const { windowSize } = useWindowSize();
  const { views, status: viewsApiStatus } = useUpdateViews({ uuid: post.uuid, views: post.views });

  return (
    <>
      {windowSize !== undefined && (
        <PostViewContext.Provider value={{ views, status: viewsApiStatus }}>
          {isMobile(windowSize?.width) ? (
            <MobileViewPostInfo post={post} tag={tag} />
          ) : (
            <PCViewPostInfo post={post} tag={tag} />
          )}
        </PostViewContext.Provider>
      )}
    </>
  );
};

export default PostInfo;

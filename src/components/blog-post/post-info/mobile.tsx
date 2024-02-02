import { memo } from 'react';

import Views from '@/components/blog-post/post-info/views';
import { CrosshatchTag } from '@/components/common/Tag';
import * as Layout from '@/components/layout';
import { Post } from '@/types/post';
import cvar from '@/utils/cvarAutoComp';

const MobileViewPostInfo = ({ post, tag }: { post: Post; tag: string }) => {
  return (
    <Layout.VStack width='100%' gap='5px' margin='20px 0 10px 0'>
      <Layout.VStack>
        <CrosshatchTag>{tag}</CrosshatchTag>
        <h1>{post.title}</h1>
      </Layout.VStack>

      <h5 style={{ color: cvar({ key: 'gray', idx: '500' }), fontWeight: '300' }}>
        {post.description}
      </h5>

      <Layout.HStack
        gap='10px'
        margin='10px 0 0 0'
        alignItems='center'
        style={{ fontWeight: '300' }}
      >
        <p style={{ color: 'inherit', fontWeight: 'inherit' }}>{post.formattedDate}</p>
        <p style={{ color: 'inherit', fontWeight: 'inherit' }}>{post.readingTime}분</p>
        <p style={{ color: 'inherit', fontWeight: 'inherit' }}>
          <Views />
        </p>
      </Layout.HStack>
    </Layout.VStack>
  );
};

export default memo(MobileViewPostInfo);

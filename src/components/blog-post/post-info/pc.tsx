import { memo } from 'react';

import Views from '@/components/blog-post/post-info/views';
import { CrosshatchTag } from '@/components/common/Tag';
import * as Layout from '@/components/layout';
import cvar from '@/utils/cvarAutoComp';

import type { Post } from '@/types/post';

const PCViewPostInfo = ({ post, tag }: { post: Post; tag: string }) => {
  return (
    <Layout.VStack width='100%' gap='10px' margin='20px 0'>
      <Layout.VStack>
        <CrosshatchTag>{tag}</CrosshatchTag>
        <Layout.HStack width='100%' justifyContent='space-between' alignItems='center'>
          <h1>{post.title}</h1>

          <Layout.VStack alignItems='flex-end'>
            <p>{post.formattedDate}</p>
            <p>{post.readingTime} min read</p>
            <p>
              <Views />
            </p>
          </Layout.VStack>
        </Layout.HStack>
      </Layout.VStack>

      <h5
        style={{
          color: cvar({ key: 'gray', idx: '500' }),
          fontWeight: '300',
        }}
      >
        {post.description}
      </h5>
    </Layout.VStack>
  );
};

export default memo(PCViewPostInfo);

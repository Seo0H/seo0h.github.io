import { memo } from 'react';

import Views from '@/components/blog-post/post-info/views';
import { CrosshatchTag } from '@/components/common/Tag';
import * as Layout from '@/components/layout';

import * as S from './style';
import type { Post } from '@/types/post';

const PCViewPostInfo = ({ post, tag }: { post: Post; tag: string }) => {
  return (
    <Layout.VStack width='100%' gap='10px' margin='20px 0'>
      <Layout.VStack>
        <CrosshatchTag>{tag}</CrosshatchTag>
        <Layout.HStack alignItems='center'>
          <S.H1>{post.title}</S.H1>

          <S.Grid
            justifyItems='end'
            gridTemplateRow='repeat(3,minmax(auto,1rem))'
            width='100%'
            gap='.5rem'
          >
            <S.InfoWrapper>{post.formattedDate}</S.InfoWrapper>
            <S.InfoWrapper>{post.readingTime} min read</S.InfoWrapper>
            <S.InfoWrapper>
              <Views />
            </S.InfoWrapper>
          </S.Grid>
        </Layout.HStack>
      </Layout.VStack>

      <S.H5>{post.description}</S.H5>
    </Layout.VStack>
  );
};

export default memo(PCViewPostInfo);

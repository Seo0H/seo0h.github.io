import { memo } from 'react';

import Views from '@/components/blog-post/post-info/views';
import { CrosshatchTag } from '@/components/common/Tag';
import * as Layout from '@/components/layout';
import { Post } from '@/types/post';

import * as S from './style';

const MobileViewPostInfo = ({ post, tag }: { post: Post; tag: string }) => {
  return (
    <Layout.VStack width='100%' gap='5px' margin='20px 0 10px 0'>
      <Layout.VStack>
        <CrosshatchTag>{tag}</CrosshatchTag>
        <S.H1>{post.title}</S.H1>
      </Layout.VStack>

      <S.H5>{post.description}</S.H5>

      <S.HStack gap='10px' margin='10px 0 0 0' alignItems='center'>
        <S.P>{post.formattedDate}</S.P>
        <S.P>{post.readingTime}분</S.P>
        <S.P>
          <Views />
        </S.P>
      </S.HStack>
    </Layout.VStack>
  );
};

export default memo(MobileViewPostInfo);

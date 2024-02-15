import styled, { keyframes } from 'styled-components';

import * as Layout from '@/components/layout';
import cvar from '@/utils/cvarAutoComp';

const PostPreviewSkeleton = () => {
  return (
    <PostPreviewWrapper padding='2rem 2rem'>
      <GrayBox minWidth='10rem' minHeight='10rem' />
      <Layout.VStack width='100%' gap='.8rem'>
        <GrayBox width='20%' minHeight='1rem' />
        <GrayBox width='60%' minHeight='3rem' />
        <GrayBox width='100%' minHeight='1rem' />
        <GrayBox width='100%' minHeight='1rem' />
      </Layout.VStack>
    </PostPreviewWrapper>
  );
};

export default PostPreviewSkeleton;

const fadeInOut = keyframes`
    0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const PostPreviewWrapper = styled(Layout.VStack)`
  max-width: 100%;
  max-height: 10rem;
  background-color: ${cvar({ key: 'gray', idx: '50' })};
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;

  border-radius: 10px;

  animation: ${fadeInOut} 1s 1s infinite linear alternate;
`;

const GrayBox = styled(Layout.Box)`
  background-color: ${cvar({ key: 'gray', idx: '200' })};
`;

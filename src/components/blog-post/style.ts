import { motion } from 'framer-motion';
import styled from 'styled-components';

import { postGlobalStyle } from '@/components/blog-post/post-global-style';
import cvar from '@/utils/cvarAutoComp';

export const PostGlobalStyleContainer = styled(motion.article)`
  ${postGlobalStyle}

  gap: 10px;
  width: 100%;
  align-items: center;
  max-width: 700px;
`;

export const ImageWrapper = styled(motion.div)`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 340px;
`;

export const PostInfoWrapper = styled.section`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid ${cvar({ key: 'gray', idx: '200' })};
`;

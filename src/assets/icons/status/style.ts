import { motion } from 'framer-motion';
import styled from 'styled-components';

import cvar from '@/utils/cvarAutoComp';

export const LoadingDotContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 0.2rem;
`;

export const Dot = styled(motion.div)`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${cvar({ key: 'gray', idx: '300' })};
  border-radius: 50%;
`;

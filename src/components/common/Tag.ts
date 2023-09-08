import { motion } from 'framer-motion';
import { css, styled } from 'styled-components';

import { display } from '@/constants/styles';
import cvar from '@/utils/cvarAutoComp';

const TagStyle = css`
  /* layout */
  display: flex;
  width: fit-content;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;

  /* style */
  border-radius: 20px;
  border: 1px solid ${cvar({ key: 'gray', idx: '200' })};

  font-size: 18px;
  color: ${cvar({ key: 'gray', idx: '200' })};

  @media (width < ${display.tablet}) {
    padding: 4px 12px;
    font-size: 14px;
  }
`;

export const TagBtn = styled(motion.button)<{ $isSelected: boolean }>`
  /* override style */
  ${TagStyle}

  --select-color: ${({ $isSelected }) =>
    $isSelected ? cvar({ key: 'mainColor' }) : cvar({ key: 'gray', idx: '200' })};

  font-weight: ${({ $isSelected }) => ($isSelected ? 600 : 500)};
  border: 1px solid var(--select-color);
  color: var(--select-color);
`;

export const CrosshatchTag = styled.span`
  &::before {
    content: '# ';
  }

  color: ${cvar({ key: 'gray', idx: '200' })};
  font-size: 16px;
  font-weight: 600;
`;

import type { ReactNode } from 'react';
import React from 'react';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import { hover, tab } from '@/lib/animations';
import cvar from '@/utils/cvarAutoComp';

const FilterTag = ({
  children,
  $isSelected,
  onClick,
}: {
  children: ReactNode;
  $isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <StyledFilleterBtn
      $isSelected={$isSelected}
      whileHover={hover}
      whileTap={tab}
      onClick={onClick}
    >
      {children}
    </StyledFilleterBtn>
  );
};

export default FilterTag;

const StyledFilleterBtn = styled(motion.button)<{ $isSelected: boolean }>`
  /* layout */
  display: inline-flex;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;

  /* style */
  --select-color: ${({ $isSelected }) =>
    $isSelected ? cvar({ key: 'mainColor' }) : cvar({ key: 'gray', idx: '200' })};

  border-radius: 20px;
  border: 1px solid var(--select-color);

  &:hover {
    box-shadow: 0 0 0 1px var(--select-color) inset;
  }

  font-size: 18px;
  font-weight: ${({ $isSelected }) => ($isSelected ? 600 : 500)};
  color: var(--select-color);
`;

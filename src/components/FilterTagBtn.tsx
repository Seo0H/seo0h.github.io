import type { ReactNode } from 'react';

import { TagBtn } from '@/components/common/Tag';
import { hover, tab } from '@/lib/animations';

const FilterTagBtn = ({
  children,
  $isSelected = false,
  onClick,
}: {
  children: ReactNode;
  $isSelected?: boolean;
  onClick?: () => void;
}) => {
  return (
    <TagBtn $isSelected={$isSelected} whileHover={hover} whileTap={tab} onClick={onClick}>
      {children}
    </TagBtn>
  );
};

export default FilterTagBtn;

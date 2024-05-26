import { ComponentProps, ComponentPropsWithRef } from 'react';

import styled from 'styled-components';

import { DefaultP } from '@/components/style';

export const P = (props: Omit<ComponentProps<'p'>, 'ref'>) => {
  return <StyledP {...props} />;
};

const StyledP = styled(DefaultP)`
  line-height: 1.5;
`;

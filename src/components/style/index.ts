import styled from 'styled-components';

import { display } from '@/constants/styles';

export const GettingP = styled.p`
  white-space: pre-line;

  @media (width < ${display.tablet}) {
    white-space: normal;
  }
`;

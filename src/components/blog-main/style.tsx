import styled from 'styled-components';

import { DefaultP } from '../style';
import { display } from '@/constants/styles';
import cvar from '@/utils/cvarAutoComp';

export const H1 = styled.h1`
  font-size: 40px;
  line-height: 1.6;
  font-weight: 700;
  color: ${cvar({ key: 'gray', idx: '800' })};
`;

export const GettingP = styled(DefaultP)`
  white-space: pre-line;
  line-height: 1.6;
  font-weight: 400;

  @media (width < ${display.tablet}) {
    white-space: normal;
  }
`;

import styled from 'styled-components';

import * as Layout from '@/components/layout';
import cvar from '@/utils/cvarAutoComp';

export const H1 = styled.h1`
  font-size: 33px;
  font-weight: 700;
  line-height: 1.6;
  color: ${cvar({ key: 'gray', idx: '800' })};
`;

export const H5 = styled.h5`
  color: ${cvar({ key: 'gray', idx: '500' })};
  font-weight: 300;
`;

export const P = styled.p`
  color: inherit;
  font-weight: inherit;
`;

export const HStack = styled(Layout.HStack)`
  font-weight: 300;
`;

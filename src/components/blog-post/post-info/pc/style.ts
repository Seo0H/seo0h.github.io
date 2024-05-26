import styled from 'styled-components';

import * as Layout from '@/components/layout';
import { display } from '@/constants/styles';
import cvar from '@/utils/cvarAutoComp';

export const H1 = styled.h1`
  flex: 4;
  color: ${cvar({ key: 'gray', idx: '800' })};
  font-size: 40px;
  font-weight: 700;
  line-height: 1.6;
`;

export const Grid = styled(Layout.Grid)`
  flex: 1;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const H5 = styled.h5`
  color: ${cvar({ key: 'gray', idx: '500' })};
  font-weight: 300;
`;

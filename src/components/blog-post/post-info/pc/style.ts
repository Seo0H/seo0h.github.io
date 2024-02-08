import styled from 'styled-components';

import * as Layout from '@/components/layout';
import cvar from '@/utils/cvarAutoComp';

export const H1 = styled.h1`
  flex: 4;
  line-height: 100%;
`;

export const Grid = styled(Layout.Grid)`
  flex: 1;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H5 = styled.h5`
  color: ${cvar({ key: 'gray', idx: '500' })};
  font-weight: 300;
`;

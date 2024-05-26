import styled from 'styled-components';

import cvar from '@/utils/cvarAutoComp';

export const DefaultP = styled.p`
  color: ${cvar({ key: 'gray', idx: '500' })};
  font-size: 17px;
  font-weight: 400;
`;

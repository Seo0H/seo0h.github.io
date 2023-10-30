import styled from 'styled-components';

import * as Layout from '@/components/layout';
import { display } from '@/constants/styles';

export const ListBoxWrapper = styled(Layout.HStack)`
  cursor: pointer;
  border-radius: 10px;
  border: 10px solid transparent;

  &:hover {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  }

  @media (width < ${display.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding-bottom: 10px;
  }
`;

export const ResH2 = styled.h2`
  line-height: 1.3;
  @media (width < ${display.tablet}) {
    margin: 5px 0;
  }
`;

export const MiniP = styled.p`
  @media (width < ${display.tablet}) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const ImgContainer = styled(Layout.Box)`
  display: block;

  @media (width < ${display.tablet}) {
    width: 100%;
    height: 12vh;
  }
`;

export const ResVStack = styled(Layout.VStack)`
  @media (width <${display.tablet}) {
    gap: 0px;
  }
`;

export const P = styled.p`
  font-weight: 300;
  line-height: 1.4;
`;

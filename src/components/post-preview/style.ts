import styled from 'styled-components';

import { display } from '@/constants/styles';
import cvar from '@/utils/cvarAutoComp';

export const ListBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;

  cursor: pointer;
  border-radius: 10px;
  border: 10px solid transparent;

  &:hover {
    img {
      box-shadow: 2px 6px 6px 0px ${cvar({ key: 'gray', idx: '300' })};
      outline: 1px solid ${cvar({ key: 'gray', idx: '50' })};
    }

    h2 {
      color: ${cvar({ key: 'mainColor' })};
    }
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

export const InfoP = styled.p`
  font-weight: 300;
  font-size: 16px;

  @media (width < ${display.tablet}) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const ImgContainer = styled.div`
  display: block;
  position: relative;

  @media (width > ${display.tablet}) {
    min-width: 180px;
    min-height: 180px;
  }

  @media (width < ${display.tablet}) {
    width: 100%;
    height: 12vh;
  }
`;

export const ResVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  word-break: keep-all;
  flex: 1;

  @media (width <${display.tablet}) {
    gap: 0px;
  }
`;

export const P = styled.p`
  font-weight: 400;
  line-height: 1.4;
`;

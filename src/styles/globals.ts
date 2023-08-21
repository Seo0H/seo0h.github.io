import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

import CssVar from '@/styles/cssVar';

const GlobalStyles = createGlobalStyle`${css`
  ${reset}
  ${CssVar}

  html,
  body,
  #__next {
    font-family: 'Pretendard';
    font-style: normal;
    min-width: 100%;
    min-height: 100%;
  }

  h1 {
    color: var(--pHeader);
    font-size: 48px;
    font-weight: 800;
  }

  h2 {
    color: var(--pHeader);
    font-size: 36px;
    font-weight: 600;
  }

  p {
    color: var(--pContents);
    font-size: 17px;
    font-weight: 400;
    line-height: 140%;
  }
`}`;

export default GlobalStyles;

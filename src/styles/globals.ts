import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

import { globalColor } from '@/constants/styles';
import cvar from '@/utils/cvarAutoComp';
import generateCssVar from '@/utils/generateCssVar';

const GlobalStyles = createGlobalStyle`${css`
  ${reset}

  html,
  body,
  #__next {
    min-width: 100%;
    min-height: 100%;
    scroll-behavior: smooth;
  }

  * {
    /* MW touch highlight 제거 */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  :root {
    ${generateCssVar(globalColor)}
  }

  ::selection {
    background-color: ${cvar({ key: 'gray', idx: '100' })};
  }

  :is(h1, h2, h3, h4, h5, h6) {
    word-break: keep-all;
  }

  h1 {
    color: ${cvar({ key: 'gray', idx: '500' })};
    font-size: 48px;
    font-weight: 700;
  }

  h2 {
    color: ${cvar({ key: 'gray', idx: '500' })};
    font-size: 36px;
    font-weight: 700;
  }

  h3 {
    color: ${cvar({ key: 'gray', idx: '500' })};
    font-size: 32px;
    font-weight: 700;
  }

  p,
  time,
  span {
    color: ${cvar({ key: 'gray', idx: '300' })};
    font-size: 17px;
    font-weight: 400;
    line-height: 150%;
  }

  a {
    text-decoration: none;
  }
`}`;

export default GlobalStyles;

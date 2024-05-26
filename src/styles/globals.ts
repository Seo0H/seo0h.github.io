import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

import { display, globalColor } from '@/constants/styles';
import cvar from '@/utils/cvarAutoComp';
import generateCssVar from '@/utils/generateCssVar';

const GlobalStyles = createGlobalStyle`${css`
  ${reset}

  html,
  body,
  #__next {
    min-width: 100%;
    min-height: 100vh;
    min-height: 100svh;

    width: 100%;
    height: fit-content;

    scroll-behavior: smooth;
  }

  * {
    /* MW touch highlight 제거 */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  :root {
    ${generateCssVar(globalColor)}
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  ::selection {
    background-color: ${cvar({ key: 'gray', idx: '100' })};
  }

  :is(h1, h2, h3, h4, h5, h6) {
    word-break: keep-all;
  }
`}`;

export default GlobalStyles;

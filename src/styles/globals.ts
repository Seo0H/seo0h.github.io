import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

import { display, globalColor } from '@/constants/styles';
import cvar from '@/utils/cvarAutoComp';
import generateCssVar from '@/utils/generateCssVar';

const GlobalStyles = createGlobalStyle`${css`
  ${reset}

  @font-face {
    font-family: 'Pretendard Variable';
    src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css');
    font-display: block;
  }

  @font-face {
    font-family: 'Consolas';
    src: url('https://fonts.cdnfonts.com/css/consola-mono');
    font-display: block;
  }

  html,
  body,
  #__next {
    min-width: 100%;
    min-height: 100%;
    scroll-behavior: smooth;

    font-family: 'Pretendard Variable';
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

  h1 {
    color: ${cvar({ key: 'gray', idx: '500' })};
    font-size: 48px;
    font-weight: 700;
    line-height: 1.3;

    @media (width < ${display.tablet}) {
      font-size: 33px;
      font-weight: 800;
    }
  }

  h2 {
    color: ${cvar({ key: 'gray', idx: '500' })};
    font-size: 36px;
    font-weight: 700;
    line-height: 1.4;

    @media (width < ${display.tablet}) {
      font-size: 28px;
    }
  }

  h3 {
    color: ${cvar({ key: 'gray', idx: '500' })};
    font-size: 32px;
    font-weight: 700;
    line-height: 1.4;

    @media (width < ${display.tablet}) {
      font-size: 24px;
    }
  }

  h4 {
    color: ${cvar({ key: 'gray', idx: '500' })};
    font-size: 26px;
    font-weight: 600;
    line-height: 1.4;

    @media (width < ${display.tablet}) {
      font-size: 20px;
    }
  }

  h5 {
    color: ${cvar({ key: 'gray', idx: '500' })};
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
  }

  p,
  time,
  span {
    color: ${cvar({ key: 'gray', idx: '400' })};
    font-size: 17px;
    font-weight: 400;
    line-height: 170%;
  }
`}`;

export default GlobalStyles;

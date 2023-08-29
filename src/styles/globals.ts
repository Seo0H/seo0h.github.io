import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

import anchor from '@/styles/anchor';
import { code } from '@/styles/code';
import CssVar from '@/styles/cssVar';

import { cvar } from './cssVar';

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

  ${CssVar}
  ${code}
  ${anchor}

  ::selection {
    background-color: ${cvar({ key: 'gray', idx: '100' })};
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
  time {
    color: ${cvar({ key: 'gray', idx: '300' })};
    font-size: 17px;
    font-weight: 400;
    line-height: 140%;
  }

  hr {
    width: 100%;
    border: 0;
    background-color: ${cvar({ key: 'gray', idx: '200' })};
    height: 1px;
  }

  a {
    text-decoration: none;
  }

  .mdx > :is(h1, h2, h3, h4, h5, h6) {
    margin: 20px 0;
  }
`}`;

export default GlobalStyles;

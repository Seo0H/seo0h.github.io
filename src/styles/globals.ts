import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

import CssVar from '@/styles/cssVar';

import { cvar } from './cssVar';

const GlobalStyles = createGlobalStyle`${css`
  ${reset}
  ${CssVar}

  html,
  body,
  #__next {
    min-width: 100%;
    min-height: 100%;
  }

  h1 {
    color: ${cvar({ key: 'gray', idx: '500' })};
    font-size: 48px;
    font-weight: 800;
  }

  h2 {
    color: ${cvar({ key: 'gray', idx: '500' })};
    font-size: 36px;
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
`}`;

export default GlobalStyles;

import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`${css`
  ${reset}

  * {
    font-family: 'Pretendard';
  }

  html,
  body,
  #__next {
    font-family: 'Pretendard';
    font-style: normal;
    min-width: 100%;
    min-height: 100%;
  }
`}`;

export default GlobalStyles;

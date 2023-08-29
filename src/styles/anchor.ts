import { css } from 'styled-components';

const anchor = css`
  .anchor {
    visibility: hidden;
    position: absolute;
    margin-left: -1em;
    padding-right: 0.5em;
    cursor: pointer;
  }

  .anchor::before {
    content: '#';
  }

  &:hover > .anchor {
    visibility: visible;
  }

  h1,
  h2,
  h3,
  h4 {
    scroll-margin-top: 10px;
  }
`;

export default anchor;

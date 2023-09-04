import { css, styled } from 'styled-components';

import * as Layout from '@/components/layout';
import cvar from '@/utils/cvarAutoComp';

const code = css`
  /* inline code style */
  p > code {
    display: inline-block;
    border-radius: 1rem;
    padding: 0 0.5rem;

    font-family: Consolas;
    font-weight: bold;

    background-color: ${cvar({ key: 'gray', idx: '100' })};
  }

  /* code block style */
  pre {
    border-radius: 5px;
    padding: 10px -1px;

    font-family: Consolas;
    overflow-x: auto;

    background-color: ${cvar({ key: 'gray', idx: '100' })};

    ::selection {
      background-color: ${cvar({ key: 'gray', idx: '500' })};
    }
  }

  pre > code {
    counter-reset: line;
    display: grid;
    line-height: 2;

    [data-line]::before {
      counter-increment: line;
      content: counter(line);

      display: inline-block;
      width: 2rem;
      margin-right: 2rem;
      text-align: right;
      color: gray;
    }

    [data-line-numbers-max-digits='2'] > [data-line]::before {
      width: 2rem;
    }

    [data-line-numbers-max-digits='3'] > [data-line]::before {
      width: 3rem;
    }
  }

  [data-line] {
    line-height: 1.5rem;
    border-left: solid 3px;
    border-left-color: #0000;
  }

  [data-highlighted-line] {
    background: #c8c8ff1a;
    border-left-color: ${cvar({ key: 'mainColor' })};
  }
`;

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
    scroll-margin-top: 80px;
  }
`;

const BlogStyle = styled(Layout.VStack)`
  width: 100%;
  height: 100%;

  ${code}
  ${anchor}

  .mdx > :is(h1, h2, h3, h4, h5) {
    margin: 20px 0 10px 0;
  }

  a {
    color: ${cvar({ key: 'gray', idx: '500' })};
    font-weight: 600;
    text-decoration-line: underline;
    line-height: 1.5;

    &::before {
      content: '- ';
    }
  }

  hr {
    width: 100%;
    border: 0;
    height: 1px;
    background: ${cvar({ key: 'gray', idx: '100' })};
  }

  strong {
    font-weight: 800;
  }

  img {
    display: block;
    margin: 5px auto;

    border-radius: 10px;
    border: 1px solid ${cvar({ key: 'gray', idx: '100' })};
  }

  .alt {
    display: block;
    text-align: center;
    font-size: small;
  }
`;

export default BlogStyle;

import { css, styled } from 'styled-components';

import * as Layout from '@/components/layout';
import { display } from '@/constants/styles';
import cvar from '@/utils/cvarAutoComp';

const code = css`
  /* inline code style */
  p code {
    display: inline;
    border-radius: 1rem;
    padding: 0.1rem 0.6rem;

    font-family: Consolas;
    font-weight: bold;
    word-break: break-all;

    background-color: ${cvar({ key: 'gray', idx: '100' })};
  }

  /* callout */
  pre {
    border-radius: 5px;
    padding: 20px;
    background-color: #f0f0f0;
    white-space: break-spaces;
  }

  /* code block style */
  [data-rehype-pretty-code-fragment] pre {
    border-radius: 5px;
    padding: 10px 1px;

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
    position: inherit;
    margin-left: -1em;
    margin-bottom: 1em;
    padding-right: 0.5em;

    cursor: pointer;
    line-height: inherit;
    text-decoration: none;
  }

  .anchor::before {
    content: '#';
    color: ${cvar({ key: 'gray', idx: '200' })};

    @media (width < ${display.tablet}) {
      visibility: hidden;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    scroll-margin-top: 80px;
  }
`;

const toc = css`
  .toc {
    :is(a)::before {
      content: '- ';
    }

    li li {
      text-indent: 1rem;
    }

    li li li {
      text-indent: 2rem;
    }
  }
`;

const img = css`
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

const BlogStyle = styled(Layout.VStack)`
  width: 100%;
  height: 100%;
  color: ${cvar({ key: 'gray', idx: '300' })};

  a {
    color: inherit;
    font-weight: 600;
    text-decoration-line: underline;
    line-height: 1.8;
  }

  li:not(.toc *) {
    &::before {
      content: '- ';
    }

    font-weight: bold;
  }

  .mdx > :is(h1, h2) {
    margin-top: 20px;
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

  ${code}
  ${anchor}
  ${toc}
  ${img}
`;

export default BlogStyle;

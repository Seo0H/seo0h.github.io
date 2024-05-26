import { css, styled } from 'styled-components';

import * as Layout from '@/components/layout';
import { display } from '@/constants/styles';
import cvar from '@/utils/cvarAutoComp';

// DESCRIPTION: MDX포스트의 전체적인 스타일을 정의하는 스타일시트

const code = css`
  /* inline code style */
  code {
    display: inline;
    border-radius: 0.4rem;
    padding: 0.1rem 0.6rem;

    font-family: var(--font-menlo);
    word-break: break-all;

    color: ${cvar({ key: 'gray', idx: '500' })};
    background-color: ${cvar({ key: 'gray', idx: '100' })};
  }

  /* code block style */
  [data-rehype-pretty-code-fragment] pre {
    border-radius: 5px;
    padding: 16px 1px;

    margin: 5px 0;

    font-family: var(--font-menlo);

    background-color: ${cvar({ key: 'gray', idx: '100' })};

    ::selection {
      background-color: ${cvar({ key: 'gray', idx: '500' })};
    }
  }

  pre > code {
    counter-reset: line;
    display: grid;
    line-height: 2;
    background-color: transparent;

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

  [data-rehype-pretty-code-caption] {
    display: block;
    text-align: center;
    font-size: small;
  }
`;

const callout = css`
  /* callout */
  pre {
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${cvar({ key: 'gray', idx: '500' })};
      border-radius: 10px;
    }
  }

  /* callout */
  details,
  blockquote {
    border-radius: 5px;
    padding: 20px;
    background-color: ${cvar({ key: 'gray', idx: '100' })};
    transition: all;
  }

  summary {
    cursor: pointer;
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
    color: ${cvar({ key: 'gray', idx: '300' })};

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
    ol ol {
      text-indent: 1rem;
      list-style-type: lower-latin;
    }

    ol ol ol {
      display: none;
    }
  }
`;

const marker = css`
  /* number */
  ol {
    list-style-position: inside;
    list-style-type: decimal;

    color: ${cvar({ key: 'gray', idx: '500' })};
    font-size: 17px;
    font-weight: 400;
    line-height: 170%;
  }

  /* 기본 ul */
  ul {
    list-style-position: inside;
    list-style-type: '✦ ';

    color: ${cvar({ key: 'gray', idx: '500' })};
    font-size: 17px;
    font-weight: 400;
    line-height: 170%;

    p {
      display: inline-block;
    }

    li > ul {
      margin: 0 0 0.5rem 1rem;
    }
  }

  /* 번호 + 들여쓰기 */
  li {
    ul {
      list-style-type: none;
    }
  }
`;

const toggle = css``;

const heading = css`
  h2,
  h3,
  h4 {
    font-size: 24px;
    line-height: 1.6;
    font-weight: 700;
    margin: 24px 0 4px;
    color: ${cvar({ key: 'gray', idx: '700' })};
  }
`;

export const postGlobalStyle = css`
  color: ${cvar({ key: 'gray', idx: '500' })};

  a {
    color: inherit;
    font-weight: 600;
    text-decoration-line: underline;
    line-height: 1.8;
  }

  hr {
    width: 100%;
    border: 0;
    height: 1px;
    background: ${cvar({ key: 'gray', idx: '100' })};
  }

  strong {
    font-weight: 700;
  }

  ${code}
  ${callout}
  ${marker}
  ${anchor}
  ${toc}
  ${heading}
`;

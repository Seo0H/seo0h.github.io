import { css } from 'styled-components';

import { cvar } from '@/styles/cssVar';

export const code = css`
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

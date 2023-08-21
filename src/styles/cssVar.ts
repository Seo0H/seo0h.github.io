import { css } from 'styled-components';

const cssVar = {
  mainColor: '#006fff',
  pHeader: '#334051',
  pContents: '#333d4b',
} as const;

const cssVarConverted = Object.entries(cssVar).reduce((acc, [key, val]) => {
  return `${acc}--${key}:${val};`;
}, '');

const CssVar = css`
  :root {
    ${cssVarConverted}
  }
`;

// !css 변수를 자동 완성 해주는 유틸함수
export const cvar = (key: keyof typeof cssVar) => {
  return `--${key}`;
};

export default CssVar;

import { css } from 'styled-components';

const cssVar = {
  mainColor: '#006fff',
  subColor: '#20399E',
  gray: ['#E5E5E5', '#C2C2C2', '#727B87', '#4E5968', '#333D4B'],
} as const;

export const display = {
  tablet: '768px',
};

export const generatedCssVar = Object.entries(cssVar).reduce((prevCssVar, [key, val]) => {
  if (isGray(val)) {
    return `${prevCssVar}${val.reduce(getGrayCssVar, '')}`;
  }

  return `${prevCssVar}--${key}:${val};`;
}, '');

const CssVar = css`
  :root {
    ${generatedCssVar}
  }
`;

export default CssVar;

// -- css 변수를 자동 완성 해주는 유틸함수 --

interface Cssvar {
  key: keyof typeof cssVar;
  idx?: '100' | '200' | '300' | '400' | '500';
}

/**
 * @param key : keyof typeof `cssVar`
 * @param idx : key가 `gray`일 경우 요구됨.
 * @returns string : `var(--key)` | `var(--gray-idx)`
 */
export const cvar = ({ key, idx }: Cssvar) => {
  switch (key) {
    case 'gray':
      if (idx === undefined) {
        throw new Error('idx is required for gray key');
      }
      return `var(--gray-${idx})`;

    default:
      return `var(--${key})`;
  }
};

// -- css var 생성 관련 유틸함수 --

function getGrayCssVar(prev: string, color: string, idx: number) {
  return `${prev}--gray-${idx + 1}00:${color};`;
}

function isGray(val: unknown): val is string[] {
  return Array.isArray(val);
}

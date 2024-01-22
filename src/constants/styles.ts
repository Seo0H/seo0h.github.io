/**
 * 전역 색상 변수 (css var)
 */

export const globalColor = {
  mainColor: '#006fff',
  subColor: '#20399E',
  gray: {
    '100': '#E5E5E5',
    '200': '#C2C2C2',
    '300': '#727B87',
    '400': '#4E5968',
    '500': '#333D4B',
  },
} as const;

export type GlobalColor = typeof globalColor;

export const display = {
  tablet: '768px',
} as const;

export const zIndex = {
  nav: 10,
} as const;

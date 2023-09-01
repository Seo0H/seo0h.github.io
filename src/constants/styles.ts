/**
 * 색상 명도가 존재하는 경우, String[] 으로 표현
 * 명도가 연할수록 `(Array idx + 1) * 100` 으로 표현됨
 * ex) --gray--100 = '#E5E5E5'
 */

export const globalColor = {
  mainColor: '#006fff',
  subColor: '#20399E',
  gray: ['#E5E5E5', '#C2C2C2', '#727B87', '#4E5968', '#333D4B'],
} as const;

export type GlobalColor = typeof globalColor;

export const display = {
  tablet: '768px',
} as const;

export const zIndex = {
  nav: 10,
} as const;

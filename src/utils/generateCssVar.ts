import { type GlobalColor } from '@/constants/styles';

/**
 * @param globalColor 전역 스타일 CSS Variable이 선언되어있는 객체
 * @description 전역 스타일 객체를 CSS Variable 형식의 String으로 변환하는 함수.
 * 전역 스타일에 주입하기 위해 사용.
 */
export default function generateCssVar(globalColor: GlobalColor) {
  return Object.entries(globalColor).reduce((mergeCssVars, [key, val]) => {
    // 명도로 표현되는 색상 판별
    if (typeof val === 'object') {
      return `${mergeCssVars}${Object.entries(val).reduce(getGrayCssVar, '')}`;
    }

    return `${mergeCssVars}--${key}:${val};`;
  }, '');
}

// TODO: prefix값이 gray로 하드코딩 되어있는 부분 매개변수에서 받도록 수정
function getGrayCssVar(prev: string, [brightness, color]: [string, string]) {
  return `${prev}--gray-${brightness}:${color};`;
}

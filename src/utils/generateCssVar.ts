import { type GlobalColor } from '@/constants/styles';

export default function generateCssVar(globalColor: GlobalColor) {
  return Object.entries(globalColor).reduce((prevCssVar, [key, val]) => {
    if (isBrightness(val)) {
      return `${prevCssVar}${val.reduce(getGrayCssVar, '')}`;
    }

    return `${prevCssVar}--${key}:${val};`;
  }, '');
}

function getGrayCssVar(prev: string, color: string, idx: number) {
  return `${prev}--gray-${idx + 1}00:${color};`;
}

function isBrightness(val: unknown): val is string[] {
  return Array.isArray(val);
}

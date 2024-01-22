import type { globalColor } from '@/constants/styles';

/**
 * @param key : keyof typeof `cssVar`
 * @param idx : key가 `gray`일 경우 요구됨.
 * @returns string : `var(--key)` | `var(--gray-idx)`
 */
export default function cvar(cvarProps: CvarAutoCompProps) {
  const { key } = cvarProps;

  switch (key) {
    case 'gray':
      return `var(--gray-${cvarProps.idx})`;

    default:
      return `var(--${key})`;
  }
}

type GrayIdx = keyof typeof globalColor.gray;

type CvarAutoCompProps =
  | {
      key: 'gray';
      idx: GrayIdx;
    }
  | { key: Exclude<keyof typeof globalColor, 'gray'> };

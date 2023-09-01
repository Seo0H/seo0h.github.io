import type { globalColor } from '@/constants/styles';

/**
 * @param key : keyof typeof `cssVar`
 * @param idx : key가 `gray`일 경우 요구됨.
 * @returns string : `var(--key)` | `var(--gray-idx)`
 */
export default function cvar({ key, idx }: CvarAutoCompProps) {
  switch (key) {
    case 'gray':
      if (idx === undefined) {
        throw new Error('idx is required for gray key');
      }
      return `var(--gray-${idx})`;

    default:
      return `var(--${key})`;
  }
}

interface CvarAutoCompProps {
  key: keyof typeof globalColor;
  idx?: '100' | '200' | '300' | '400' | '500';
}

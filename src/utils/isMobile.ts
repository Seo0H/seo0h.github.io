import { display } from '@/constants/styles';

export default function isMobile(width: number) {
  return width > Number(display.tablet);
}

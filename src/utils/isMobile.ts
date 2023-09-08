import { display } from '@/constants/styles';

export default function isMobile(width: number) {
  return width < parseInt(display.tablet);
}

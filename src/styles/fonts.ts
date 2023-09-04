import localFont from 'next/font/local';

export const fontPretendard = localFont({
  variable: '--font-pretendard',
  src: '../assets/fonts/PretendardVariable.woff2',
  style: 'normal',
  display: 'block',
});

export const consolas = localFont({
  variable: '--font-consolas',
  src: [
    {
      path: '../assets/fonts/CONSOLA.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../assets/fonts/CONSOLAB.ttf',
      style: 'bold',
      weight: '700',
    },
    {
      path: '../assets/fonts/CONSOLAI.ttf',
      style: 'italic',
      weight: '400',
    },
    {
      path: '../assets/fonts/CONSOLAZ.ttf',
      style: 'bold-italic',
      weight: '700',
    },
  ],
  display: 'block',
});

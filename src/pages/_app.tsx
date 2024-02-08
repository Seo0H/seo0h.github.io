import localFont from 'next/font/local';
import Script from 'next/script';

import Header from '@/components/common/header';
import AppLayout from '@/components/layout/AppLayout';
import GlobalStyles from '@/styles/globals';

import type { AppProps } from 'next/app';

const Pretendard = localFont({ src: '../assets/fonts/PretendardVariable.woff2' });
const Menlo = localFont({
  src: [
    {
      path: '../assets/fonts/Menlo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Menlo-Bold.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-menlo',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <GlobalStyles />
      <Header />
      <main className={`${Pretendard.className} ${Menlo.variable}`}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </main>
    </>
  );
}

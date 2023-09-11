import Script from 'next/script';

import Header from '@/components/common/header';
import AppLayout from '@/components/layout/AppLayout';
import GlobalStyles from '@/styles/globals';

import type { AppProps } from 'next/app';

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
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

import Head from 'next/head';

import Header from '@/components/common/header';
import AppLayout from '@/components/layout/AppLayout';
import { fontPretendard } from '@/lib/fonts';
import GlobalStyles from '@/styles/globals';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <GlobalStyles />
      <AppLayout>
        <Header />
        <main className={fontPretendard.className}>
          <Component {...pageProps} />
        </main>
      </AppLayout>
    </>
  );
}
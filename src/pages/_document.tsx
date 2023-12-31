/* eslint-disable no-undef */
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='ko'>
        <Head>
          <link
            rel='preload'
            as='font'
            type='font'
            crossOrigin=''
            href='https://fonts.cdnfonts.com/css/consola-mono'
          />
          <link
            rel='preload'
            as='font'
            type='font'
            crossOrigin=''
            href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css'
          />
          <meta name='naver-site-verification' content='7ef5e520261e981fd6678836e9a97ea0b6ab1bd2' />
          <meta
            name='google-site-verification'
            content='hrZSTzuX86qT1XQK9Q3oYEv6DQNixlYGwZkiod1mvEs'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

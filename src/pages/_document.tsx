import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '../components/theme'

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="ja">
              <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <script
            dangerouslySetInnerHTML={{
              __html:
                '</script><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:400,700&display=swap" media="print" onload="this.media=\'all\'" /><script>',
            }}
          />
              </Head>
            <body>
                    <Main />
                    <NextScript />
            </body>
            </html>
        )
    }
}

MyDocument.getInitialProps = async ctx => {
 
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

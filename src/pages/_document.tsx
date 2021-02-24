import React from 'react'
import Document, { Html,Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '../components/theme'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
              <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
                <meta name="theme-color" content={theme.palette.primary.main} />
              </Head>
            <body>
                    <Main />
                    <NextScript />
            </body>
          </Html>
          
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

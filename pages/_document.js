import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:700' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Chakra+Petch:500' rel='stylesheet' />
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <link rel='icon' href='/static/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

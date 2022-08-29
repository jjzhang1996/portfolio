import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/shared/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
          <Head>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="mobile-web-app-status-bar-style" content="black" />
          <link rel="logo" href='/favicon.ico' type="image/x-icon" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Jia Jun Zhang | Fullstack Developer </title>
          </Head>
          <Layout>
            <Component {...pageProps} /> 
          </Layout>
    </>
  )
}

export default MyApp

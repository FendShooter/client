import '../styles/globals.css'
import Layout from '../components/Layout'
import ContextProvider from '../context'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Head>
          <title>EDEK MOVING, STORAGE & SERVICES LLC</title>
          <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0"
          />
          <meta
            property="og:image:secure_url"
            content="https://edekmoving.com/images/hero_box.jpg"
          />

          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            name="description"
            content="EDEKMOVING is a crew of young,strong and professional movers and helpers you need today.our crew is ready to lift you all the heavy stuff that you need"
          />
          <meta property="og:url" content="https://edekmoving.com/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="EDEK MOVING,STORAGE & SERVICES LLC"
          />
          <meta
            property="og:description"
            content="EDEKMOVING is a crew of young,strong and professional movers and helpers you need today.our crew is ready to lift you all the heavy stuff that you need"
          />
          <meta
            property="og:image"
            content="https://edekmoving.com/images/hero_box.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="https://edekmoving.com/" />
          <meta property="twitter:url" content="https://edekmoving.com/" />
          <meta
            name="twitter:title"
            content="EDEK MOVING,STORAGE & SERVICES LLC"
          />
          <meta
            name="twitter:description"
            content="EDEKMOVING is a crew of young,strong and professional movers and helpers you need today.our crew is ready to lift you all the heavy stuff that you need"
          />
          <meta
            name="twitter:image"
            content="https://edekmoving.com/images/hero_box.jpg"
          />
          <meta
            name="keywords"
            content="moving companies near me, nyc movers,NYC moving, moving from new york, moving to upstate, moving company in new york, professional moving company, moving, DELIVERY, delivery companies near me Best moving ,quality moving, cheap moving, affordable moving, local long distance moving, cheap moving, local moving , fast movers, last minute movers moving companies Brooklyn moving companies bronx, moving companies queens, moving companies Manhattan,moving companies Harlem,moving companies Long Island city,moving companies New York City,moving companies New York,moving companies states island,moving companies hunt point,moving companies Rochelle,moving companies westchester county,moving companies mamaroneck"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="1 days" />
          <meta name="author" content="Kodjo Dokouvi" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}

export default MyApp

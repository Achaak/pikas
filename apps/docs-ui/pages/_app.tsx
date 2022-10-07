import { darkTheme, theme, PikasUIProvider } from '@pikas-ui/styles'
import type { AppProps } from 'next/app'
import { customGlobalCss } from './../src/styles/globalCss'
import { menu } from './../src/configs/menu'
import { Layout } from '@pikas/docs-ui'
import { DefaultSeo } from 'next-seo'
import SEO from './../next-seo.config'
import './../src/css/prism-vsc-dark-plus.css'
import React from 'react'
import { docsUIRoutes } from '@pikas/docs-routes'
const { getLink } = docsUIRoutes

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  customGlobalCss()

  return (
    <>
      <DefaultSeo {...SEO} />

      <PikasUIProvider darkTheme={darkTheme} lightTheme={theme}>
        <Layout
          menu={menu}
          documentationLink={getLink('introduction')}
          githubLink="https://github.com/Achaak/pikas"
        >
          <Component {...pageProps} />
        </Layout>
      </PikasUIProvider>
    </>
  )
}

export default MyApp

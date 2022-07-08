import { darkTheme, theme, PikasUIProvider } from '@pikas-ui/styles'
import type { AppProps } from 'next/app'
import { customGlobalCss } from './../src/styles/globalCss'
import { Layout } from './../src/layout'
import './../src/css/prism-vsc-dark-plus.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  customGlobalCss()

  return (
    <PikasUIProvider darkTheme={darkTheme} lightTheme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PikasUIProvider>
  )
}

export default MyApp
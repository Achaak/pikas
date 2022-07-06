import { PikasUIProvider } from '@pikas-ui/styles'
import type { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <PikasUIProvider>
      <Component {...pageProps} />
    </PikasUIProvider>
  )
}

export default MyApp

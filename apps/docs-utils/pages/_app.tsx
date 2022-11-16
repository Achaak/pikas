import { darkTheme, theme, PikasUIProvider } from '@pikas-ui/styles';
import type { AppProps } from 'next/app';
import { menu } from './../src/configs/menu';
import { Layout, customGlobalCss } from '@pikas/docs-ui';
import { DefaultSeo } from 'next-seo';
import SEO from './../next-seo.config';
import './../src/css/prism-vsc-dark-plus.css';
import { docsUtilsRoutes } from '@pikas/docs-routes';
const { getLink } = docsUtilsRoutes;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  customGlobalCss();

  return (
    <>
      <DefaultSeo {...SEO} />

      <PikasUIProvider darkTheme={darkTheme} lightTheme={theme}>
        <Layout
          menu={menu}
          documentationLink={getLink('introduction')}
          githubLink="https://github.com/Achaak/pikas"
          title="Pikas Utils"
          logoUrl="/pikas-logo.png"
        >
          <Component {...pageProps} />
        </Layout>
      </PikasUIProvider>
    </>
  );
};

export default MyApp;

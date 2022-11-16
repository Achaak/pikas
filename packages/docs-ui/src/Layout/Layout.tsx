import { styled } from '@pikas-ui/styles';
import { FC, ReactNode } from 'react';
import { Header } from './header/index.js';
import { Menu } from './menu/index.js';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  backgroundColor: '$WHITE2',
});

const Center = styled('div', {
  position: 'relative',
  overflow: 'auto',
  flex: 1,
  marginTop: 'calc($10 + $9)',

  '@md': {
    paddingLeft: 250,
    marginTop: '$10',
  },
});

const Content = styled('div', {
  padding: 16,
  display: 'flex',
  justifyContent: 'center',
});

const ContentChild = styled('div', {
  width: 800,
  maxWidth: '100%',

  '& > *': {
    marginBottom: 40,
  },
  '& > a': {
    color: '$PRIMARY',
  },
  '& > p': {
    marginTop: 12,
    marginBottom: 12,
    color: '$BLACK',

    '& > code': {
      all: 'unset',
      color: '$WARNING',
      backgroundColor: '$WARNING_LIGHTEST_2',
      padding: '4px 8px',
      margin: '1px 0',
      display: 'inline-block',
      br: 'sm',
    },
  },
  '& > hr': {
    marginTop: 40,
    marginBottom: 40,
    display: 'block',
    border: 'none',
    borderTop: '1px solid $GRAY_LIGHT',
  },
  '& > h1': {
    marginTop: 32,
    marginBottom: 32,
    color: '$BLACK',
  },
  '& > h2': {
    marginTop: 32,
    marginBottom: 24,
    color: '$BLACK',
  },
  '& > h3': {
    marginTop: 24,
    marginBottom: 24,
    color: '$BLACK',
  },
  '& > h4': {
    marginTop: 24,
    marginBottom: 16,
    color: '$BLACK',
  },
  '& > ul li': {
    color: '$BLACK',
  },
  '& > ul li a, & > p a': {
    color: '$PRIMARY',
  },
  '& > div pre': {
    br: 'sm',
    overflow: 'auto',
  },
  '& > table': {
    color: '$BLACK',
    borderCollapse: 'collapse',
    backgroundColor: '$GRAY_LIGHTEST_2',
    width: '100%',
    br: 'sm',
    overflowX: 'auto',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    fontSize: '$EM-SMALL',

    '& th': {
      color: '$PRIMARY',
      padding: '8px 16px',
      borderBottom: '1px solid',
      borderColor: '$GRAY_LIGHT',

      '&:nth-child(2)': {
        width: '100%',
      },
    },
    '& td': {
      padding: '8px 16px',
    },
    '& code': {
      all: 'unset',
      color: '$WARNING',
      backgroundColor: '$WARNING_LIGHTEST_2',
      padding: '4px 8px',
      margin: '1px 0',
      display: 'inline-block',
      br: 'sm',
    },
  },
});

type LayoutMenuItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

type LayoutMenuGroupeItem = {
  label: string;
  items: LayoutMenuItem[];
};

export type LayoutMenu = LayoutMenuGroupeItem[];

type LayoutProps = {
  children?: ReactNode;
  menu: LayoutMenu;
  documentationLink: string;
  githubLink: string;
  title: string;
  logoUrl: string;
};

export const Layout: FC<LayoutProps> = ({
  children,
  menu,
  githubLink,
  documentationLink,
  title,
  logoUrl,
}) => (
  <Container>
    <Header
      documentationLink={documentationLink}
      githubLink={githubLink}
      title={title}
      logoUrl={logoUrl}
    />
    <Center>
      <Menu menu={menu} />
      <Content>
        <ContentChild>{children}</ContentChild>
      </Content>
    </Center>
  </Container>
);

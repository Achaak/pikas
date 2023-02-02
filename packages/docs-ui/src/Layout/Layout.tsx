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
  backgroundColor: '$white2',
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
    color: '$primary',
  },
  '& > p': {
    marginTop: 12,
    marginBottom: 12,
    color: '$black',

    '& > code': {
      all: 'unset',
      color: '$warning',
      backgroundColor: '$warning-lightest-2',
      padding: '4px 8px',
      margin: '1px 0',
      display: 'inline-block',
      borderRadius: '$sm',
    },
  },
  '& > hr': {
    marginTop: 40,
    marginBottom: 40,
    display: 'block',
    border: 'none',
    borderTop: '1px solid $gray-light',
  },
  '& > h1': {
    marginTop: 32,
    marginBottom: 32,
    color: '$black',
  },
  '& > h2': {
    marginTop: 32,
    marginBottom: 24,
    color: '$black',
  },
  '& > h3': {
    marginTop: 24,
    marginBottom: 24,
    color: '$black',
  },
  '& > h4': {
    marginTop: 24,
    marginBottom: 16,
    color: '$black',
  },
  '& > ul': {
    paddingLeft: 20,
  },
  '& > ul li': {
    color: '$black',
    listStyle: 'disc',
  },
  '& > ul li a, & > p a': {
    color: '$primary',
  },
  '& > div pre': {
    borderRadius: '$sm',
    overflow: 'auto',
  },
  '& > table': {
    color: '$black',
    borderCollapse: 'collapse',
    backgroundColor: '$gray-lightest-2',
    width: '100%',
    borderRadius: '$sm',
    overflowX: 'auto',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    fontSize: '$em-small',

    '& th': {
      color: '$primary',
      padding: '8px 16px',
      borderBottom: '1px solid',
      borderColor: '$gray-light',

      '&:nth-child(2)': {
        width: '100%',
      },
    },
    '& td': {
      padding: '8px 16px',
    },
    '& code': {
      all: 'unset',
      color: '$warning',
      backgroundColor: '$warning-lightest-2',
      padding: '4px 8px',
      margin: '1px 0',
      display: 'inline-block',
      borderRadius: '$sm',
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

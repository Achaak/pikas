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
  backgroundColor: '$white-2',
});

const Center = styled('div', {
  position: 'relative',
  overflow: 'auto',
  flex: 1,
  marginTop: 'calc($10 + $9)',

  '@md': {
    paddingLeft: 250,
    marginTop: '$12',
  },
});

const Content = styled('div', {
  padding: '$4',
  display: 'flex',
  justifyContent: 'center',
});

const ContentChild = styled('div', {
  width: 800,
  maxWidth: '100%',

  '& > *': {
    marginBottom: '$11',
  },
  '& > a': {
    color: '$primary',
  },
  '& > p': {
    marginBottom: '$2',
    marginTop: '$2',
    fontSize: '$rem-base',
    lineHeight: '$rem-large',
    color: '$black',

    '& > code': {
      all: 'unset',
      color: '$warning',
      backgroundColor: '$warning-lightest-2',
      padding: '$1 $2',
      margin: '$1 $0',
      display: 'inline-block',
      borderRadius: '$sm',
    },
  },
  '& > hr': {
    marginTop: '$11',
    marginBottom: '$11',
    display: 'block',
    border: 'none',
    borderTopColor: '$gray-light',
    borderTopWidth: '$1',
    borderTopStyle: 'solid',
  },
  '& > h1': {
    marginTop: '$10',
    marginBottom: '$7',
    color: '$black',
  },
  '& > h2': {
    marginTop: '$9',
    marginBottom: '$6',
    color: '$black',
  },
  '& > h3': {
    marginTop: '$8',
    marginBottom: '$5',
    color: '$black',
  },
  '& > h4': {
    marginTop: '$7',
    marginBottom: '$4',
    color: '$black',
  },
  '& > ul': {
    paddingLeft: '$5',
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
      padding: '$2 $4',
      borderBottomColor: '$gray-light',
      borderBottomWidth: '$1',
      borderBottomStyle: 'solid',

      '&:nth-child(2)': {
        width: '100%',
      },
    },
    '& td': {
      padding: '$2 $4',
    },
    '& code': {
      all: 'unset',
      color: '$warning',
      backgroundColor: '$warning-lightest-2',
      padding: '$1 $2',
      margin: '$0.25 $0',
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

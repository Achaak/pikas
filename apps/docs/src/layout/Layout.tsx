import { styled } from '@pikas-ui/styles'
import { Header } from './header'
import { Menu } from './menu'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  backgroundColor: '$WHITE2',
})

const Center = styled('div', {
  position: 'relative',
  paddingTop: '$10',
  overflow: 'auto',
  flex: 1,

  '@sm': {
    paddingLeft: 250,
  },
})

const Content = styled('div', {
  padding: 16,
  paddingTop: 40,
  display: 'flex',
  justifyContent: 'center',

  '@md': {
    paddingTop: 16,
  },
})

const ContentChild = styled('div', {
  width: 800,
  maxWidth: '100%',

  '& > *': {
    marginTop: 12,
    marginBottom: 12,
  },
  '& > p': {
    marginTop: 24,
    color: '$BLACK',
  },
  '& > hr': {
    marginTop: 40,
    marginBottom: 40,
    color: '$BLACK',
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
})

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Center>
        <Menu />
        <Content>
          <ContentChild>{children}</ContentChild>
        </Content>
      </Center>
    </Container>
  )
}

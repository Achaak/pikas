import { styled } from '@pikas-ui/styles'
import { Header } from './header'
import { Menu } from './menu'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
})

const Center = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  paddingTop: '$10',
  overflow: 'auto',

  '@sm': {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 250,
  },
})

const Content = styled('div', {
  flex: 1,
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
  },
  '& > hr': {
    marginTop: 40,
    marginBottom: 40,
  },
  '& > h1': {
    marginTop: 32,
    marginBottom: 32,
  },
  '& > h2': {
    marginTop: 32,
    marginBottom: 24,
  },
  '& > h3': {
    marginTop: 24,
    marginBottom: 24,
  },
  '& > h4': {
    marginTop: 24,
    marginBottom: 16,
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

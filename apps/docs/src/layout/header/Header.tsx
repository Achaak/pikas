import { styled } from '@pikas-ui/styles'
import Link from 'next/link'

const Container = styled('header', {
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '0 16px',
  borderBottom: '1px solid',
  borderColor: '$GRAY_LIGHT',
  backgroundColor: '$WHITE',
  zIndex: '$X-HIGH',
  height: '$10',
})

const Left = styled('div', {
  display: 'flex',
})

const Right = styled('div', {
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end',
})

const H1 = styled('h1', {
  fontSize: '$EM-XX-LARGE',
})

const Nav = styled('nav', {
  display: 'none',
  customColumnGap: 16,
  alignItems: 'center',

  '@sm': {
    display: 'flex',
  },
})

const NavItem = styled('a', {
  display: 'flex',
  color: '$BLACK',
})

export const Header: React.FC = () => {
  return (
    <Container>
      <Left>
        <Link href="/">
          <H1>Pikas UI</H1>
        </Link>
      </Left>
      <Right>
        <Nav>
          <Link href="/docs" passHref>
            <NavItem>Documentation</NavItem>
          </Link>
          <Link href="#" passHref>
            <NavItem>Github</NavItem>
          </Link>
        </Nav>
      </Right>
    </Container>
  )
}

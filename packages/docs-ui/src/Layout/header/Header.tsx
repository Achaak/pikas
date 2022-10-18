import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import { styled, useTernaryDarkMode } from '@pikas-ui/styles'
import { Switch } from '@pikas-ui/switch'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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
  alignItems: 'center',
  customColumnGap: 16,
  flex: 1,
  justifyContent: 'flex-end',
})

const H1 = styled('h1', {
  fontSize: '$EM-XX-LARGE',
  color: '$BLACK',
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

const BxsSun: React.FC<IconProps> = (props) => (
  <IconByName name="bxs:sun" {...props} />
)

const BxsMoon: React.FC<IconProps> = (props) => (
  <IconByName name="bxs:moon" {...props} />
)

interface CustomProps {
  documentationLink: string
  githubLink: string
}

export const Header: React.FC<CustomProps> = ({
  documentationLink,
  githubLink,
}) => {
  const { setTernaryDarkMode, isDarkMode } = useTernaryDarkMode()
  const [switchComponent, setSwitchComponent] =
    useState<React.ReactNode>(undefined)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSwitchComponent(
        <Switch
          onCheckedChange={(bool): void =>
            setTernaryDarkMode(bool ? 'dark' : 'light')
          }
          checked={isDarkMode}
          Icons={{
            checked: BxsMoon,
            unchecked: BxsSun,
          }}
          aria-label={isDarkMode ? 'dark mode' : 'light mode'}
          id="dark-mode-switch"
        />
      )
    }
  }, [isDarkMode])

  return (
    <Container>
      <Left>
        <Link href="/">
          <H1>Pikas UI</H1>
        </Link>
      </Left>
      <Right>
        <Nav>
          <Link href={documentationLink} passHref>
            <NavItem>Documentation</NavItem>
          </Link>
          <Link href={githubLink} passHref>
            <NavItem>
              <IconByName
                name="ant-design:github-filled"
                size={32}
                colorName="BLACK"
              />
            </NavItem>
          </Link>
        </Nav>
        {switchComponent}
      </Right>
    </Container>
  )
}

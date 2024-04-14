import type { IconProps } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import { styled, useTernaryDarkMode } from '@pikas-ui/styles';
import { Switch } from '@pikas-ui/switch';
// import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactNode, useEffect, useState } from 'react';

const Container = styled('header', {
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '$0 $16',
  borderBottomStyle: '$solid',
  borderBottomWidth: '$4',
  borderBottomColor: '$gray-light',
  backgroundColor: '$white',
  zIndex: '$x-high',
  height: '$48',
});

const Left = styled('div', {
  display: 'flex',
});

const Right = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '$16',
  flex: 1,
  justifyContent: 'flex-end',
});

const H1 = styled('h1', {
  fontSize: '$em-2x-large',
  color: '$black',
});

const Nav = styled('nav', {
  display: 'none',
  columnGap: '$16',
  alignItems: 'center',

  '@sm': {
    display: 'flex',
  },
});

const NavItem = styled('span', {
  display: 'flex',
  color: '$black',
});

const TitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '$8',
});

const BxsSun: FC<IconProps> = (props) => (
  <IconByName name="bxs:sun" {...props} />
);

const BxsMoon: FC<IconProps> = (props) => (
  <IconByName name="bxs:moon" {...props} />
);

type CustomProps = {
  documentationLink: string;
  githubLink: string;
  title: string;
  logoUrl: string;
};

export const Header: FC<CustomProps> = ({
  documentationLink,
  githubLink,
  title,
  logoUrl,
}) => {
  const { setTernaryDarkMode, isDarkMode } = useTernaryDarkMode();
  const [switchComponent, setSwitchComponent] = useState<ReactNode>(undefined);

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
      );
    }
  }, [isDarkMode]);

  return (
    <Container>
      <Left>
        <Link href="/">
          <TitleContainer>
            <img src={logoUrl} alt={title} height={40} width={40} />
            <H1>{title}</H1>
          </TitleContainer>
        </Link>
      </Left>
      <Right>
        <Nav>
          <Link href={documentationLink}>
            <NavItem>Documentation</NavItem>
          </Link>
          <Link href={githubLink} aria-label="github">
            <NavItem>
              <IconByName
                name="ant-design:github-filled"
                size={32}
                colorName="black"
              />
            </NavItem>
          </Link>
        </Nav>
        {switchComponent}
      </Right>
    </Container>
  );
};

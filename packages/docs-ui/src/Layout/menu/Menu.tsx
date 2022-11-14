import { styled } from '@pikas-ui/styles';
import { FC, useState } from 'react';
import { Button } from '@pikas-ui/button';
import type { IconProps } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { LayoutMenu } from '../Layout.js';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  position: 'fixed',
  backgroundColor: '$WHITE',
  top: '$10',
  left: 0,
  right: 0,
  zIndex: '$X-HIGH',
  borderStyle: 'solid',
  borderWidth: 0,
  borderBottomWidth: 1,
  borderColor: '$GRAY_LIGHT',
  height: '$9',

  '@md': {
    width: 250,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    padding: '16px 0',
    bottom: 0,
    height: 'auto',
    overflow: 'auto',
  },

  variants: {
    isOpen: {
      true: {
        bottom: 0,
        height: 'auto',
        overflow: 'auto',
      },
    },
  },
});

const List = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  customRowGap: 16,
  width: '100%',

  variants: {
    isOpen: {
      false: {
        display: 'none',

        '@md': {
          display: 'flex',
        },
      },
    },
  },
});

const Group = styled('ul', {});

const Item = styled('li', {
  display: 'flex',
  alignItems: 'center',

  a: {
    width: '100%',
    color: '$BLACK',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
    fontSize: '$EM-SMALL',
  },

  variants: {
    selected: {
      true: {
        backgroundColor: '$PRIMARY_LIGHTEST_2',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',

        a: {
          pointerEvents: 'none',
        },
      },
      false: {
        '&:hover': {
          backgroundColor: '$PRIMARY_LIGHTEST_2',
        },
      },
    },
  },
});

const H3 = styled('h3', {
  fontSize: '$EM-LARGE',
  padding: '8px 16px',
  color: '$BLACK',
  fontWeight: '$BOLD',
});

const MenuIcon: FC<IconProps> = (props) => (
  <IconByName name="bx:menu" {...props} />
);

type CustomProps = {
  menu: LayoutMenu;
};

export const Menu: FC<CustomProps> = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <Container isOpen={isOpen}>
      <Button
        padding="sm"
        outlined
        fontSize="EM-SMALL"
        width="auto"
        onClick={(): void => setIsOpen((state) => !state)}
        css={{
          button: {
            margin: '7px 16px',
            paddingLeft: '12px',
            paddingRight: '12px',

            '@md': {
              display: 'none',
            },
          },
        }}
        LeftIcon={MenuIcon}
      >
        Menu
      </Button>

      <List isOpen={isOpen}>
        {menu.map((group) => (
          <Group key={group.label}>
            <H3>{group.label}</H3>
            {group.items.map((item, itemKey) => (
              <Item
                key={itemKey}
                selected={pathname === item.href}
                onClick={(): void => setIsOpen(false)}
                disabled={item.disabled ?? false}
              >
                <Link href={item.href}>{item.label}</Link>
              </Item>
            ))}
          </Group>
        ))}
      </List>
    </Container>
  );
};

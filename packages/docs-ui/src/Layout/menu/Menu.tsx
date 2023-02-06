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
  backgroundColor: '$white',
  top: '$48',
  left: '$0',
  right: '$0',
  zIndex: '$x-high',
  borderStyle: '$solid',
  borderWidth: '$0',
  borderBottomWidth: '$4',
  borderColor: '$gray-light',
  height: '$48',

  '@md': {
    width: 250,
    borderRightWidth: '$4',
    borderBottomWidth: '$0',
    padding: '$16 $0',
    bottom: 0,
    height: 'auto',
    overflow: 'auto',
  },

  variants: {
    isOpen: {
      true: {
        bottom: '$0',
        height: 'auto',
        overflow: 'auto',
      },
    },
  },
});

const List = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: 16,
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
    color: '$black',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    userSelect: 'none',
    fontSize: '$em-small',
  },

  variants: {
    selected: {
      true: {
        backgroundColor: '$primary-lightest-2',
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
          backgroundColor: '$primary-lightest-2',
        },
      },
    },
  },
});

const H3 = styled('li', {
  fontSize: '$em-large',
  padding: '8px 16px',
  color: '$black',
  fontWeight: '$bold',
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
        fontSize="em-small"
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
                {item.href.startsWith('http') ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </Item>
            ))}
          </Group>
        ))}
      </List>
    </Container>
  );
};

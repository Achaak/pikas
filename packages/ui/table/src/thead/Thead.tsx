import type { PikasCSS } from '@pikas-ui/styles';
import { useTheme, styled } from '@pikas-ui/styles';
import fontColorContrast from 'font-color-contrast';
import { FC, HTMLAttributes } from 'react';

type CustomProps = HTMLAttributes<HTMLTableSectionElement> & {
  variant?: 'default' | 'light';
  css?: PikasCSS;
};

export const Thead: FC<CustomProps> = (props) => {
  const theme = useTheme();

  const TheadStyled = styled('thead', {
    variants: {
      variant: {
        default: {
          backgroundColor: '$PRIMARY',
          color: theme && fontColorContrast(theme.colors.PRIMARY.value, 0.7),

          svg: {
            fill: theme && fontColorContrast(theme.colors.PRIMARY.value, 0.7),
          },

          tr: {
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: '$PRIMARY_LIGHT',

            '&:first-child': {
              borderTop: 'none',
            },
            '&:last-child': {
              borderBottom: 'none',
            },

            th: {
              borderLeft: '1px solid',
              borderRight: '1px solid',
              borderColor: '$PRIMARY_LIGHT',
              textTransform: 'capitalize',

              '&:first-child': {
                borderLeft: 'none',
              },
              '&:last-child': {
                borderRight: 'none',
              },
            },
          },
        },
        light: {
          borderBottom: '1px solid',
          borderColor: '$GRAY_LIGHT',
        },
      },
    },
  });

  return <TheadStyled {...props} />;
};

import type { PikasCSS } from '@pikas-ui/styles';
import { useTheme, styled } from '@pikas-ui/styles';
import { Color } from '@pikas-utils/color';
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
          color: theme && new Color(theme.colors.PRIMARY.value).getContrast(),

          svg: {
            fill: theme && new Color(theme.colors.PRIMARY.value).getContrast(),
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

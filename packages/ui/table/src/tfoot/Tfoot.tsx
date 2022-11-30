import type { PikasCSS } from '@pikas-ui/styles';
import { styled, useTheme } from '@pikas-ui/styles';
import { Color } from '@pikas-utils/color';
import { FC, HTMLAttributes } from 'react';

type CustomProps = HTMLAttributes<HTMLTableSectionElement> & {
  variant?: 'default' | 'light';
  css?: PikasCSS;
};

export const Tfoot: FC<CustomProps> = (props) => {
  const theme = useTheme();

  const TfootStyled = styled('tfoot', {
    variants: {
      variant: {
        default: {
          backgroundColor: '$PRIMARY',
          color: theme && new Color(theme.colors.PRIMARY.value).getContrast(),

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
          borderTop: '1px solid',
          borderColor: '$GRAY',
        },
      },
    },
  });

  return <TfootStyled {...props} />;
};

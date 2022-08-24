import React from 'react'

import type { CSS } from '@pikas-ui/styles'
import { useTheme, styled } from '@pikas-ui/styles'
import fontColorContrast from 'font-color-contrast'

interface CustomProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  variant?: 'default' | 'light'
  css?: CSS
}

export const Thead: React.FC<CustomProps> = (props) => {
  const theme = useTheme()

  const Thead = styled('thead', {
    variants: {
      variant: {
        default: {
          backgroundColor: '$PRIMARY',
          color:
            (theme &&
              // @ts-ignore
              fontColorContrast.default(theme.colors['PRIMARY'].value, 0.7)) ||
            undefined,

          svg: {
            fill:
              theme &&
              // @ts-ignore
              fontColorContrast.default(theme.colors['PRIMARY'].value, 0.7),
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
  })

  return <Thead {...props} />
}

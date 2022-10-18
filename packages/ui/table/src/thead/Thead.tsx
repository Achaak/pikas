import React from 'react'

import type { PikasConfig } from '@pikas-ui/styles'
import { useTheme, styled } from '@pikas-ui/styles'
import fontColorContrast from 'font-color-contrast'

interface CustomProps<Config extends PikasConfig = PikasConfig>
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  variant?: 'default' | 'light'
  css?: Config['css']
}

export const Thead = <Config extends PikasConfig = PikasConfig>(
  props: CustomProps<Config>
): JSX.Element => {
  const theme = useTheme()

  const Thead = styled('thead', {
    variants: {
      variant: {
        default: {
          backgroundColor: '$PRIMARY',
          color:
            (theme && fontColorContrast(theme.colors['PRIMARY'].value, 0.7)) ||
            undefined,

          svg: {
            fill:
              theme && fontColorContrast(theme.colors['PRIMARY'].value, 0.7),
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
  })

  return <Thead {...props} />
}

import type { IconProps } from '@pikas-ui/icons'
import type { PikasColor } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'
import type { BaseAlertProps } from '../types.js'

const Container = styled('div', {
  display: 'flex',
  width: '100%',

  variants: {
    visible: {
      true: {
        maxHeight: 300,
        overflow: 'auto',
        opacity: 1,
        transition: 'all 1000ms ease-in',
      },
      false: {
        maxHeight: 0,
        overflow: 'hidden',
        opacity: 0,
        transition: 'all 500ms ease-in-out',
      },
    },
  },
})

const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flex: 1,

  variants: {
    padding: {
      xs: {
        padding: '4px 8px',
      },
      sm: {
        padding: '8px 16px',
      },
      md: {
        padding: '16px 24px',
      },
      lg: {
        padding: '24px 32px',
      },
      xl: {
        padding: '32px 40px',
      },
    },
    gap: {
      xs: {
        customColumnGap: 8,
      },
      sm: {
        customColumnGap: 16,
      },
      md: {
        customColumnGap: 24,
      },
      lg: {
        customColumnGap: 32,
      },
      xl: {
        customColumnGap: 40,
      },
    },
  },
})

const Child = styled('p', {
  margin: 0,
})

export interface CustomAlertProps extends BaseAlertProps {
  Icon?: React.FC<IconProps>
  backgroundColorName?: PikasColor
  colorName?: PikasColor
  colorHex?: string
}

export const CustomAlert: React.FC<CustomAlertProps> = ({
  children,
  Icon,
  backgroundColorName,
  colorName,
  colorHex,
  fontSize = 'EM-SMALL',
  borderRadius = 'md',
  iconSize = 24,
  fontWeight = 'NORMAL',
  gap = 'sm',
  padding = 'md',
  visible = true,
  css,
}) => {
  return (
    <Container visible={visible} css={css?.container}>
      <Content
        gap={gap}
        padding={padding}
        css={{
          backgroundColor: `$${backgroundColorName}`,
          color: colorHex || `$${colorName}`,
          fontSize: `$${fontSize}`,
          fontWeight: `$${fontWeight}`,
          br: borderRadius,
          ...css?.content,
        }}
      >
        {Icon ? <Icon size={iconSize} css={css?.icon} /> : null}
        <Child
          css={{
            ...css?.child,
          }}
        >
          {children}
        </Child>
      </Content>
    </Container>
  )
}

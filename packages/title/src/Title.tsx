import type { CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { HTMLAttributes } from 'react'

const TitleStyle = styled('h1', {
  whiteSpace: 'pre-line',
  color: '$BLACK',

  '&:first-letter': {
    textTransform: 'uppercase',
  },

  variants: {
    variant: {
      h1: {
        fontSize: '$EM-XXX-LARGE',
        fontWeight: '$BLACK',
      },
      h2: {
        fontSize: '$EM-XX-LARGE',
        fontWeight: '$MEDIUM',
      },
      h3: {
        fontSize: '$EM-X-LARGE',
        fontWeight: '$BOLD',
      },
      h4: {
        fontSize: '$EM-LARGE',
        fontWeight: '$BOLD',
      },
      h5: {},
    },
  },
})

export const TitleComponent = {
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
}
export type TitleComponentType = keyof typeof TitleComponent

export const TextTransformComponent = {
  uppercase: true,
  lowercase: true,
  capitalize: true,
  none: true,
}
export type TextTransformComponentType = keyof typeof TextTransformComponent

export const TitleVariant = TitleComponent
export type TitleVariantType = keyof typeof TitleVariant

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  component: TitleComponentType
  variant?: TitleVariantType
  textTransform?: TextTransformComponentType
  css?: CSS
  children?: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({
  children,
  component,
  variant,
  textTransform,
  css,
}) => {
  return (
    <TitleStyle
      as={component}
      variant={variant || component}
      css={{
        textTransform,
        ...css,
      }}
    >
      {children}
    </TitleStyle>
  )
}

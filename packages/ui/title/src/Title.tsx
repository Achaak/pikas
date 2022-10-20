import type { PikasConfigRecord } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import type { HTMLAttributes } from 'react'

const TitleStyle = styled('h1', {
  all: 'unset',
  whiteSpace: 'pre-line',
  color: '$BLACK',

  '&:first-letter': {
    textTransform: 'uppercase',
  },

  variants: {
    variant: {
      h1: {
        fontSize: '$EM-XXX-LARGE',
        fontWeight: '$MEDIUM',
        letterSpacing: '$MEDIUM',
      },
      h2: {
        fontSize: '$EM-XX-LARGE',
        fontWeight: '$BOLD',
        letterSpacing: '$MEDIUM',
      },
      h3: {
        fontSize: '$EM-X-LARGE',
        fontWeight: '$BOLD',
        letterSpacing: '$SMALL',
      },
      h4: {
        fontSize: '$EM-LARGE',
        fontWeight: '$BOLD',
        letterSpacing: '$SMALL',
      },
      h5: {
        fontSize: '$EM-MEDIUM',
        fontWeight: '$BOLD',
        letterSpacing: '$SMALL',
      },
      h6: {
        fontSize: '$EM-SMALL',
        fontWeight: '$BOLD',
        letterSpacing: '$SMALL',
      },
    },
  },
})

export const titleComponent = {
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
} as const
export type TitleAs = keyof typeof titleComponent

export const textTransformComponent = {
  uppercase: true,
  lowercase: true,
  capitalize: true,
  none: true,
} as const
export type TitleTextTransform = keyof typeof textTransformComponent

export const titleVariant = titleComponent
export type TitleVariant = keyof typeof titleVariant

export interface TitleCSS<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  global?: Config['CSS']
  h1?: Config['CSS']
  h2?: Config['CSS']
  h3?: Config['CSS']
  h4?: Config['CSS']
  h5?: Config['CSS']
  h6?: Config['CSS']
}

export interface TitleProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> extends HTMLAttributes<HTMLHeadingElement> {
  as: TitleAs
  variant?: TitleVariant
  textTransform?: TitleTextTransform
  css?: TitleCSS<Config>
  children?: React.ReactNode
}

export const Title = <Config extends PikasConfigRecord>({
  children,
  as,
  variant,
  textTransform,
  css,
}: TitleProps<Config>): JSX.Element => {
  return (
    <TitleStyle
      as={as}
      variant={variant || as}
      css={{
        textTransform,
        ...css?.global,
        ...css?.[as],
      }}
    >
      {children}
    </TitleStyle>
  )
}

import type { PikasCSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import * as LabelPrimitive from '@radix-ui/react-label'
import React from 'react'

const LabelStyled = styled(LabelPrimitive.Label, {
  fontSize: '$EM-SMALL',
  fontWeight: '$BOLD',
  display: 'block',
  color: '$BLACK',
})

export interface LabelProps<CSS extends PikasCSS> {
  children?: React.ReactNode
  css?: CSS
  htmlFor?: string
}

export const Label = <CSS extends PikasCSS = PikasCSS>({
  children,
  css,
  htmlFor,
}: LabelProps<CSS>): JSX.Element => {
  return (
    <LabelStyled
      css={{
        ...(htmlFor && {
          cursor: 'pointer',
        }),
        ...css,
      }}
      htmlFor={htmlFor}
    >
      {children}
    </LabelStyled>
  )
}

import type { CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import * as LabelPrimitive from '@radix-ui/react-label'
import React from 'react'

const LabelStyled = styled(LabelPrimitive.Label, {
  fontSize: '$EM-SMALL',
  fontWeight: '$BOLD',
  display: 'block',
  color: '$BLACK',
})

export interface LabelProps {
  children?: React.ReactNode
  css?: CSS
  htmlFor?: string
}

export const Label: React.FC<LabelProps> = ({ children, css, htmlFor }) => {
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

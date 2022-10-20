import type { PikasCSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const DescriptionStyled = styled('p', {
  fontSize: '$EM-SMALL',
  fontWeight: '$NORMAL',
  display: 'block',
  margin: 0,
  color: '$BLACK',
})

export interface DescriptionProps {
  children?: React.ReactNode
  css?: PikasCSS
}

export const Description: React.FC<DescriptionProps> = ({ children, css }) => {
  return <DescriptionStyled css={css}>{children}</DescriptionStyled>
}

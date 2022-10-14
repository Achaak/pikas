import type { PikasCSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const TextErrorStyled = styled('p', {
  color: '$DANGER',
  fontSize: '$EM-X-SMALL',
})

export interface TextErrorProps {
  children?: React.ReactNode
  css?: PikasCSS
}

export const TextError: React.FC<TextErrorProps> = ({ children, css }) => {
  return <TextErrorStyled css={css}>{children}</TextErrorStyled>
}

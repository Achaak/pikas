import type { CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const TextErrorStyled = styled('p', {
  color: '$ERROR',
  fontSize: '$EM-X-SMALL',
})

export interface TextErrorProps {
  children?: React.ReactNode
  css?: CSS
}

export const TextError: React.FC<TextErrorProps> = ({ children, css }) => {
  return <TextErrorStyled css={css}>{children}</TextErrorStyled>
}
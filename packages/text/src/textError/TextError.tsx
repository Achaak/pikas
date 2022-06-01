import type { CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const TextErrorStyled = styled('p', {
  color: '$ERROR',
  fontSize: '$EM-X-SMALL',
})

export interface TextErrorProps {
  children?: React.ReactNode
  style?: CSS
}

export const TextError: React.FC<TextErrorProps> = ({ children, style }) => {
  return <TextErrorStyled css={style}>{children}</TextErrorStyled>
}

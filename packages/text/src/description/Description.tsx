import type { CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const DescriptionStyled = styled('p', {
  fontSize: '$EM-SMALL',
  fontWeight: '$NORMAL',
  display: 'block',
  margin: 0,
})

export interface DescriptionProps {
  children?: React.ReactNode
  style?: CSS
}

export const Description: React.FC<DescriptionProps> = ({
  children,
  style,
}) => {
  return <DescriptionStyled css={style}>{children}</DescriptionStyled>
}

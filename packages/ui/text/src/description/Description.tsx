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

export interface DescriptionProps<CSS extends PikasCSS> {
  children?: React.ReactNode
  css?: CSS
}

export const Description = <CSS extends PikasCSS = PikasCSS>({
  children,
  css,
}: DescriptionProps<CSS>): JSX.Element => {
  return <DescriptionStyled css={css}>{children}</DescriptionStyled>
}

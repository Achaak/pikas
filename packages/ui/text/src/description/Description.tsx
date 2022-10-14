import type { CSSRecord, PikasCSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const DescriptionStyled = styled('p', {
  fontSize: '$EM-SMALL',
  fontWeight: '$NORMAL',
  display: 'block',
  margin: 0,
  color: '$BLACK',
})

export interface DescriptionProps<CSS extends CSSRecord> {
  children?: React.ReactNode
  css?: CSS
}

export const Description = <CSS extends CSSRecord = PikasCSS>({
  children,
  css,
}: DescriptionProps<CSS>): JSX.Element => {
  return <DescriptionStyled css={css}>{children}</DescriptionStyled>
}

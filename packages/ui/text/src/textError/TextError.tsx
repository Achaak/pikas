import type { CSSRecord, PikasCSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const TextErrorStyled = styled('p', {
  color: '$DANGER',
  fontSize: '$EM-X-SMALL',
})

export interface TextErrorProps<CSS extends CSSRecord> {
  children?: React.ReactNode
  css?: CSS
}

export const TextError = <CSS extends CSSRecord = PikasCSS>({
  children,
  css,
}: TextErrorProps<CSS>): JSX.Element => {
  return <TextErrorStyled css={css}>{children}</TextErrorStyled>
}

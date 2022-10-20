import type { PikasConfigRecord } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const TextErrorStyled = styled('p', {
  color: '$DANGER',
  fontSize: '$EM-X-SMALL',
})

export interface TextErrorProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  children?: React.ReactNode
  css?: Config['CSS']
}

export const TextError = <Config extends PikasConfigRecord>({
  children,
  css,
}: TextErrorProps<Config>): JSX.Element => {
  return <TextErrorStyled css={css}>{children}</TextErrorStyled>
}

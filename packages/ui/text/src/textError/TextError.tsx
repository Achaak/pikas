import type { PikasConfig } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const TextErrorStyled = styled('p', {
  color: '$DANGER',
  fontSize: '$EM-X-SMALL',
})

export interface TextErrorProps<Config extends PikasConfig = PikasConfig> {
  children?: React.ReactNode
  css?: Config['css']
}

export const TextError = <Config extends PikasConfig = PikasConfig>({
  children,
  css,
}: TextErrorProps<Config>): JSX.Element => {
  return <TextErrorStyled css={css}>{children}</TextErrorStyled>
}

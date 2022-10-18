import type { PikasConfig } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const DescriptionStyled = styled('p', {
  fontSize: '$EM-SMALL',
  fontWeight: '$NORMAL',
  display: 'block',
  margin: 0,
  color: '$BLACK',
})

export interface DescriptionProps<Config extends PikasConfig = PikasConfig> {
  children?: React.ReactNode
  css?: Config['css']
}

export const Description = <Config extends PikasConfig = PikasConfig>({
  children,
  css,
}: DescriptionProps<Config>): JSX.Element => {
  return <DescriptionStyled css={css}>{children}</DescriptionStyled>
}

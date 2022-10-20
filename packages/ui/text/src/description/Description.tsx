import type { PikasConfigRecord } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const DescriptionStyled = styled('p', {
  fontSize: '$EM-SMALL',
  fontWeight: '$NORMAL',
  display: 'block',
  margin: 0,
  color: '$BLACK',
})

export interface DescriptionProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  children?: React.ReactNode
  css?: Config['CSS']
}

export const Description = <Config extends PikasConfigRecord>({
  children,
  css,
}: DescriptionProps<Config>): JSX.Element => {
  return <DescriptionStyled css={css}>{children}</DescriptionStyled>
}

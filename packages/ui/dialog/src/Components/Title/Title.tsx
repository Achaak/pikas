import type { PikasConfig } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const Container = styled(DialogPrimitive.Title, {
  all: 'unset',
  color: '$BLACK',
  fontSize: '$EM-XX-LARGE',
  textAlign: 'center',
  width: '100%',
})

interface InfoDialogProps<Config extends PikasConfig> {
  children?: React.ReactNode
  css?: Config['css']
}

export const Title = <Config extends PikasConfig>({
  children,
  css,
}: InfoDialogProps<Config>): JSX.Element => {
  return <Container css={css}>{children}</Container>
}

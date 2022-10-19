import type { PikasConfigRecord } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const Container = styled(DialogPrimitive.Title, {
  all: 'unset',
  color: '$BLACK',
  fontSize: '$EM-XX-LARGE',
  textAlign: 'center',
  width: '100%',
})

interface InfoDialogProps<Config extends PikasConfigRecord = any> {
  children?: React.ReactNode
  css?: Config['CSS']
}

export const Title = <Config extends PikasConfigRecord>({
  children,
  css,
}: InfoDialogProps<Config>): JSX.Element => {
  return <Container css={css}>{children}</Container>
}

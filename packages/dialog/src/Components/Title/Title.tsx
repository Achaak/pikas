import type { CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const Container = styled(DialogPrimitive.Title, {
  all: 'unset',
  color: '$BLACK',
  fontSize: '$EM-XX-LARGE',
  textAlign: 'center',
  width: '100%',
})

interface InfoDialogProps {
  children?: React.ReactNode
  css?: CSS
}

export const Title: React.FC<InfoDialogProps> = ({ children, css }) => {
  return <Container css={css}>{children}</Container>
}

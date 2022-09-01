import { styled } from '@pikas-ui/styles'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

const Title = styled(DialogPrimitive.Title, {})

export interface ErrorDialogHeaderType {
  title?: string
}

export const ErrorDialogHeader: React.FC<ErrorDialogHeaderType> = ({
  title,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

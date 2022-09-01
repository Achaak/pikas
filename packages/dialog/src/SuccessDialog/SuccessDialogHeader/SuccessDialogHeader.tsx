import { styled } from '@pikas-ui/styles'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

const Title = styled(DialogPrimitive.Title, {})

export interface SuccessDialogHeaderType {
  title?: string
}

export const SuccessDialogHeader: React.FC<SuccessDialogHeaderType> = ({
  title,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

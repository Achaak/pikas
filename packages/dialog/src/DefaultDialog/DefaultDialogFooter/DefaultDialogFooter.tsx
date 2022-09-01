import { Button } from '@pikas-ui/button'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
})

export interface DefaultDialogFooterType {
  onClose?: () => void
}

export const DefaultDialogFooter: React.FC<DefaultDialogFooterType> = ({
  onClose,
}) => {
  return (
    <Container>
      <Button width="auto" onClick={onClose}>
        Ok
      </Button>
    </Container>
  )
}

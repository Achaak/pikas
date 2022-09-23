import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: '$BLACK',
})

export interface ValidateDialogContentProps {
  content: React.ReactNode
}

export const ValidateDialogContent: React.FC<ValidateDialogContentProps> = ({
  content,
}) => {
  return <Container>{content}</Container>
}

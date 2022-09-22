import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: '$BLACK',
})

export interface ValidateDialogContentType {
  content: React.ReactNode
}

export const ValidateDialogContent: React.FC<ValidateDialogContentType> = ({
  content,
}) => {
  return <Container>{content}</Container>
}

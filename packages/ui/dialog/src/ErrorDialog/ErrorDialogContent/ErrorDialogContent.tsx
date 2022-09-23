import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: '$BLACK',
})

export interface ErrorDialogContentProps {
  content: React.ReactNode
}

export const ErrorDialogContent: React.FC<ErrorDialogContentProps> = ({
  content,
}) => {
  return <Container>{content}</Container>
}

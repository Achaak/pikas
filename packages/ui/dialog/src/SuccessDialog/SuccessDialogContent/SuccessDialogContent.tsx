import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: '$BLACK',
})

export interface SuccessDialogContentProps {
  content: React.ReactNode
}

export const SuccessDialogContent: React.FC<SuccessDialogContentProps> = ({
  content,
}) => {
  return <Container>{content}</Container>
}

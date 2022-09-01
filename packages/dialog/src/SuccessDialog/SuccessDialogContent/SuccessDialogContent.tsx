import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: '$BLACK',
})

export interface SuccessDialogContentType {
  content: React.ReactNode
}

export const SuccessDialogContent: React.FC<SuccessDialogContentType> = ({
  content,
}) => {
  return <Container>{content}</Container>
}

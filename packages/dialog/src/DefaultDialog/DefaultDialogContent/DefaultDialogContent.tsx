import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface DefaultDialogContentType {
  content: React.ReactNode
}

export const DefaultDialogContent: React.FC<DefaultDialogContentType> = ({
  content,
}) => {
  return <Container>{content}</Container>
}

import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  color: '$BLACK',
})

export interface DefaultDialogContentProps {
  content: React.ReactNode
}

export const DefaultDialogContent: React.FC<DefaultDialogContentProps> = ({
  content,
}) => {
  return <Container>{content}</Container>
}

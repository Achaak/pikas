import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: '$BLACK',
})

export interface InfoDialogContentProps {
  content: React.ReactNode
}

export const InfoDialogContent: React.FC<InfoDialogContentProps> = ({
  content,
}) => {
  return <Container>{content}</Container>
}

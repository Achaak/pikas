import { styled } from '@pikas-ui/styles'
import { IconContainer } from '../../Components/IconContainer/index.js'
import { Title } from '../../Components/Title/Title.js'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  marginBottom: 8,
})

export interface SuccessDialogHeaderProps {
  title?: string
}

export const SuccessDialogHeader: React.FC<SuccessDialogHeaderProps> = ({
  title,
}) => {
  return (
    <Container>
      <IconContainer iconName="bx:check-circle" backgroundColor="SUCCESS" />
      <Title>{title}</Title>
    </Container>
  )
}

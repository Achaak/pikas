import { styled } from '@pikas-ui/styles'
import { IconContainer } from '../../Components/IconContainer/index.js'
import { Title } from '../../Components/Title/index.js'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  marginBottom: 8,
})

export interface ErrorDialogHeaderProps {
  title?: string
}

export const ErrorDialogHeader: React.FC<ErrorDialogHeaderProps> = ({
  title,
}) => {
  return (
    <Container>
      <IconContainer iconName="bx:x-circle" backgroundColor="DANGER" />
      <Title>{title}</Title>
    </Container>
  )
}

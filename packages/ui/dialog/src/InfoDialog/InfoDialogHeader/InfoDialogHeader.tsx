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

export interface InfoDialogHeaderProps {
  title?: string
}

export const InfoDialogHeader: React.FC<InfoDialogHeaderProps> = ({
  title,
}) => {
  return (
    <Container>
      <IconContainer iconName="bx:info-circle" backgroundColor="PRIMARY" />
      <Title>{title}</Title>
    </Container>
  )
}

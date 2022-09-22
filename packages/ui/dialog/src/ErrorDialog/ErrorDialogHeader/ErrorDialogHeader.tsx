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

export interface ErrorDialogHeaderType {
  title?: string
}

export const ErrorDialogHeader: React.FC<ErrorDialogHeaderType> = ({
  title,
}) => {
  return (
    <Container>
      <IconContainer iconName="bx:x-circle" backgroundColor="ERROR" />
      <Title>{title}</Title>
    </Container>
  )
}

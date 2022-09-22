import { styled } from '@pikas-ui/styles'
import { Title } from '../../Components/Title/Title.js'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface DefaultDialogHeaderType {
  title: string
}

export const DefaultDialogHeader: React.FC<DefaultDialogHeaderType> = ({
  title,
}) => {
  return (
    <Container>
      <Title css={{ textAlign: 'left' }}>{title}</Title>
    </Container>
  )
}

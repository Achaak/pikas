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

export interface ValidateDialogHeaderProps {
  title?: string
}

export const ValidateDialogHeader: React.FC<ValidateDialogHeaderProps> = ({
  title,
}) => {
  return (
    <Container>
      <IconContainer
        iconName="ant-design:question-circle-outlined"
        backgroundColor="WARNING"
      />
      <Title>{title}</Title>
    </Container>
  )
}

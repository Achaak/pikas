import { IconByName } from '@pikas-ui/icons'
import type { Colors } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  width: '100%',
  padding: 32,
  marginBottom: 24,

  '@sm': {
    brTL: 'md',
    brTR: 'md',
  },
})

interface InfoDialogProps {
  backgroundColor: Colors
  iconName: string
}

export const IconContainer: React.FC<InfoDialogProps> = ({
  backgroundColor,
  iconName,
}) => {
  return (
    <Container
      css={{
        backgroundColor: `$${backgroundColor}`,
      }}
    >
      <IconByName name={iconName} size={100} color="WHITE" />
    </Container>
  )
}

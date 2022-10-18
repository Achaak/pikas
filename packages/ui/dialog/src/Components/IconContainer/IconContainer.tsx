import { IconByName } from '@pikas-ui/icons'
import type { PikasColor } from '@pikas-ui/styles'
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
  backgroundColorName: PikasColor
  iconName: string
}

export const IconContainer: React.FC<InfoDialogProps> = ({
  backgroundColorName,
  iconName,
}) => {
  return (
    <Container
      css={{
        backgroundColor: `$${backgroundColorName}`,
      }}
    >
      <IconByName name={iconName} size={100} colorName="WHITE" />
    </Container>
  )
}

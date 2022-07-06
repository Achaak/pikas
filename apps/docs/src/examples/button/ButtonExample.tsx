import { styled } from '@pikas-ui/styles'
import { Button } from '@pikas-ui/button'

const Container = styled('div', {
  display: 'flex',
  margin: '16px 0',
  customColumnGap: 8,
  customRowGap: 8,
})

export const ButtonExample: React.FC = () => {
  return (
    <Container>
      <Button color="PRIMARY" width="auto">
        Primary
      </Button>
      <Button color="PRIMARY" width="auto" outlined>
        Button
      </Button>
      <Button color="SECONDARY" width="auto">
        Secondary
      </Button>
      <Button color="SECONDARY" width="auto" outlined>
        Secondary
      </Button>
      <Button color="TERTIARY" width="auto">
        Tertiary
      </Button>
      <Button color="TERTIARY" width="auto" outlined>
        Tertiary
      </Button>
    </Container>
  )
}

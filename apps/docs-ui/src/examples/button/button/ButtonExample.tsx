import { Button } from '@pikas-ui/button'
import { ExampleContainer } from '@/components/ExampleContainer'

export const ButtonExample: React.FC = () => {
  return (
    <ExampleContainer>
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
    </ExampleContainer>
  )
}

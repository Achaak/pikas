import { ExampleContainer } from '@/components/ExampleContainer'
import { IconByName } from '@pikas-ui/icons'

export const IconByNameExample: React.FC = () => {
  return (
    <ExampleContainer>
      <IconByName size={40} name="bx:baguette" color="PRIMARY" />
    </ExampleContainer>
  )
}

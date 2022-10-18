import { ExampleContainer } from '@pikas/docs-ui'
import { Slider } from '@pikas-ui/slider'

export const SliderExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Slider
        defaultValue={[25]}
        label="Slider label"
        description="Eu est labore ea laborum laborum mollit non minim eu commodo."
      />
    </ExampleContainer>
  )
}

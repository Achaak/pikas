import { ExampleContainer } from '@pikas/docs-ui'
import { Slider } from '@pikas-ui/slider'
import type { PikasCSS } from '@pikas-ui/styles'
import { loadColors } from '@pikas-ui/styles'

const colors = loadColors({
  myColor: 'red',
})
export const SliderExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Slider<PikasCSS, typeof colors>
        defaultValue={[25]}
        label="Slider label"
        description="Eu est labore ea laborum laborum mollit non minim eu commodo."
        thumbColor="myColor"
        css={{
          container: {
            br: 'md',
          },
        }}
      />
    </ExampleContainer>
  )
}

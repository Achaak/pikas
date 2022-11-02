import { ExampleContainer } from '@pikas/docs-ui'
import { Textfield } from '@pikas-ui/textfield'

export const TextfieldExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Textfield
        label="Textfield label"
        description="Eu est labore ea laborum laborum mollit non minim eu commodo."
        required
        id="textfield"
        placeholder="Placeholder"
      />
    </ExampleContainer>
  )
}

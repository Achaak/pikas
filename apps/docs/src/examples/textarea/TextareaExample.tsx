import { ExampleContainer } from '@/components/ExampleContainer'
import { Textarea } from '@pikas-ui/textarea'

export const TextareaExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Textarea
        label="Textarea label"
        description="Eu est labore ea laborum laborum mollit non minim eu commodo."
        required
        height={200}
      />
    </ExampleContainer>
  )
}

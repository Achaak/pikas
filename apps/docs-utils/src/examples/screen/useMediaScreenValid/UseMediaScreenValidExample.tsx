import { ExampleContainer } from '@pikas/docs-ui'
import { useMediaScreenValid } from '@pikas-utils/screen'

export const UseMediaScreenValidExample: React.FC = () => {
  const mediaValid = useMediaScreenValid({ media: 'md', operator: '>' })

  return <ExampleContainer>{mediaValid ? 'true' : 'false'}</ExampleContainer>
}

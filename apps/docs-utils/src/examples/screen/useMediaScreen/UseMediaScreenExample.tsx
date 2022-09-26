import { ExampleContainer } from '@pikas/docs-ui'
import { useMediaScreen } from '@pikas-utils/screen'

export const UseMediaScreenExample: React.FC = () => {
  const media = useMediaScreen()

  return <ExampleContainer>{media}</ExampleContainer>
}

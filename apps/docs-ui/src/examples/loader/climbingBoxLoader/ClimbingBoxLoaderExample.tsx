import { ExampleContainer } from '@pikas/docs-ui'
import { ClimbingBoxLoader } from '@pikas-ui/loader'

export const ClimbingBoxLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <ClimbingBoxLoader />
    </ExampleContainer>
  )
}

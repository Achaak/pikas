import { ExampleContainer } from '@/components/ExampleContainer'
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

import { ExampleContainer } from '@/components/ExampleContainer'
import { BounceLoader } from '@pikas-ui/loader'

export const BounceLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <BounceLoader />
    </ExampleContainer>
  )
}

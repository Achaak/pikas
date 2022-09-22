import { ExampleContainer } from '@/components/ExampleContainer'
import { RingLoader } from '@pikas-ui/loader'

export const RingLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <RingLoader />
    </ExampleContainer>
  )
}

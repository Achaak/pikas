import { ExampleContainer } from '@/components/ExampleContainer'
import { ClockLoader } from '@pikas-ui/loader'

export const ClockLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <ClockLoader />
    </ExampleContainer>
  )
}

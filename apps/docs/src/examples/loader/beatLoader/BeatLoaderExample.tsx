import { ExampleContainer } from '@/components/ExampleContainer'
import { BeatLoader } from '@pikas-ui/loader'

export const BeatLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <BeatLoader />
    </ExampleContainer>
  )
}

import { ExampleContainer } from '@pikas/docs-ui'
import { BeatLoader } from '@pikas-ui/loader'

export const BeatLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
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

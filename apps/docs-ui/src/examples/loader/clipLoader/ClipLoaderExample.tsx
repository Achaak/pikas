import { ExampleContainer } from '@pikas/docs-ui'
import { ClipLoader } from '@pikas-ui/loader'

export const ClipLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <ClipLoader />
    </ExampleContainer>
  )
}

import { ExampleContainer } from '@pikas/docs-ui'
import { PuffLoader } from '@pikas-ui/loader'

export const PuffLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <PuffLoader />
    </ExampleContainer>
  )
}

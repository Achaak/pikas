import { ExampleContainer } from '@pikas/docs-ui'
import { HashLoader } from '@pikas-ui/loader'

export const HashLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <HashLoader />
    </ExampleContainer>
  )
}

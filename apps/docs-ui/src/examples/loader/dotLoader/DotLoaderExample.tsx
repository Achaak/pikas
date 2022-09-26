import { ExampleContainer } from '@pikas/docs-ui'
import { DotLoader } from '@pikas-ui/loader'

export const DotLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <DotLoader />
    </ExampleContainer>
  )
}

import { ExampleContainer } from '@pikas/docs-ui'
import { FadeLoader } from '@pikas-ui/loader'

export const FadeLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <FadeLoader />
    </ExampleContainer>
  )
}

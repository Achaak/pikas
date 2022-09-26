import { ExampleContainer } from '@pikas/docs-ui'
import { RotateLoader } from '@pikas-ui/loader'

export const RotateLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <RotateLoader />
    </ExampleContainer>
  )
}

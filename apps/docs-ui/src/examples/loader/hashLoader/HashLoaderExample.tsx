import { ExampleContainer } from '@/components/ExampleContainer'
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

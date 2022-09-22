import { ExampleContainer } from '@/components/ExampleContainer'
import { CircleLoader } from '@pikas-ui/loader'

export const CircleLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <CircleLoader />
    </ExampleContainer>
  )
}

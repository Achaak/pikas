import { ExampleContainer } from '@/components/ExampleContainer'
import { GridLoader } from '@pikas-ui/loader'

export const GridLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <GridLoader />
    </ExampleContainer>
  )
}

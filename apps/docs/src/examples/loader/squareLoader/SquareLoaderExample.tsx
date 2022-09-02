import { ExampleContainer } from '@/components/ExampleContainer'
import { SquareLoader } from '@pikas-ui/loader'

export const SquareLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <SquareLoader />
    </ExampleContainer>
  )
}

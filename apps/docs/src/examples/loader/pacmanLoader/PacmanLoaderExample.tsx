import { ExampleContainer } from '@/components/ExampleContainer'
import { PacmanLoader } from '@pikas-ui/loader'

export const PacmanLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <PacmanLoader />
    </ExampleContainer>
  )
}

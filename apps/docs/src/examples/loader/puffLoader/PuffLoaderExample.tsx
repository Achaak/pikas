import { ExampleContainer } from '@/components/ExampleContainer'
import { PuffLoader } from '@pikas-ui/loader'

export const PuffLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      style={{
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

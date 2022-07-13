import { ExampleContainer } from '@/components/ExampleContainer'
import { SyncLoader } from '@pikas-ui/loader'

export const SyncLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <SyncLoader />
    </ExampleContainer>
  )
}

import { ExampleContainer } from '@/components/ExampleContainer'
import { DotLoader } from '@pikas-ui/loader'

export const DotLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      style={{
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

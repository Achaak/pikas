import { ExampleContainer } from '@/components/ExampleContainer'
import { PropagateLoader } from '@pikas-ui/loader'

export const PropagateLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <PropagateLoader />
    </ExampleContainer>
  )
}

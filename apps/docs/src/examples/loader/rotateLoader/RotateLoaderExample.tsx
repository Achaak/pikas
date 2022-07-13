import { ExampleContainer } from '@/components/ExampleContainer'
import { RotateLoader } from '@pikas-ui/loader'

export const RotateLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      style={{
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

import { ExampleContainer } from '@/components/ExampleContainer'
import { MoonLoader } from '@pikas-ui/loader'

export const MoonLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <MoonLoader />
    </ExampleContainer>
  )
}

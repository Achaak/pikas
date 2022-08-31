import { ExampleContainer } from '@/components/ExampleContainer'
import { SkewLoader } from '@pikas-ui/loader'

export const SkewLoaderExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <SkewLoader />
    </ExampleContainer>
  )
}

import { Skeleton } from '@pikas-ui/skeleton'
import { ExampleContainer } from '@pikas/docs-ui'

export const SkeletonExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Skeleton animation="pulse" width="100%" height={24} />
      <Skeleton animation="wave" width="100%" height={24} />
      <Skeleton animation={false} width="100%" height={24} />
    </ExampleContainer>
  )
}

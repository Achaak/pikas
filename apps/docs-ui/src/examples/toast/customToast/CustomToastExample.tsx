import type { CustomToastPositionType } from '@pikas-ui/toast'
import { CustomToastPosition } from '@pikas-ui/toast'
import { ExampleContainer } from '@/components/ExampleContainer'
import { CustomToastItem } from './customToastItem'

export const CustomToastExample: React.FC = () => {
  return (
    <ExampleContainer>
      {Object.keys(CustomToastPosition).map(
        (position: CustomToastPositionType) => (
          <CustomToastItem position={position} />
        )
      )}
      {Object.keys(CustomToastPosition).map(
        (position: CustomToastPositionType) => (
          <CustomToastItem position={position} />
        )
      )}
    </ExampleContainer>
  )
}

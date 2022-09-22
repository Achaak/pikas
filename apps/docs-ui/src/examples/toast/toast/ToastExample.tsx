import { Toast } from '@pikas-ui/toast'
import { ExampleContainer } from '@/components/ExampleContainer'
import { Button } from '@pikas-ui/button'

export const ToastExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Toast />

      <Button width="auto">Click here</Button>
    </ExampleContainer>
  )
}

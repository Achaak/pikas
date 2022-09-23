import type { ToastPosition } from '@pikas-ui/toast'
import { CustomToast as CustomToastPikasUI } from '@pikas-ui/toast'
import { useToast } from '@pikas-ui/toast'
import { Button } from '@pikas-ui/button'
import { styled } from '@pikas-ui/styles'

const Span = styled('span', {
  color: '$BLACK',
})

interface CustomToastExampleProps {
  position: ToastPosition
}

export const CustomToastItem: React.FC<CustomToastExampleProps> = ({
  position,
}) => {
  const { publish } = useToast()

  const handlePublish = (): void => {
    publish(
      <CustomToastPikasUI>
        <Span>Custom Toast</Span>
      </CustomToastPikasUI>
    )
  }

  return (
    <Button
      onClick={handlePublish}
      css={{
        button: {
          width: '100%',

          '@md': {
            width: '40%',
          },

          '@lg': {
            width: '30%',
          },
        },
      }}
    >
      {position}
    </Button>
  )
}

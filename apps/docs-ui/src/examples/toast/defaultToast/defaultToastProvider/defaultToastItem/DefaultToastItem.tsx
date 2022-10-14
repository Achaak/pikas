import type { ToastPosition } from '@pikas-ui/toast'
import { DefaultToast as DefaultToastPikasUI } from '@pikas-ui/toast'
import { useToast } from '@pikas-ui/toast'
import { Button } from '@pikas-ui/button'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'

const IconExample: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

interface DefaultToastExampleProps {
  position: ToastPosition
}

export const DefaultToastItem: React.FC<DefaultToastExampleProps> = ({
  position,
}) => {
  

  const { publish } = useToast()

  const handlePublish = (): void => {
    publish(
      <DefaultToastPikasUI
        title="This is a title"
        description="Cillum id cupidatat nisi aliquip nostrud consequat nostrud incididunt."
        Icon={IconExample}
      />
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

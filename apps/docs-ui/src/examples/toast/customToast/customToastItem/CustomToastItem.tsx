import type { CustomToastRef, CustomToastPositionType } from '@pikas-ui/toast'
import { CustomToast } from '@pikas-ui/toast'
import { Button } from '@pikas-ui/button'
import { useRef } from 'react'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'

const IconExample: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

interface CustomToastExampleProps {
  position: CustomToastPositionType
}

export const CustomToastItem: React.FC<CustomToastExampleProps> = ({
  position,
}) => {
  const toastRef = useRef<CustomToastRef>(null)

  return (
    <>
      <CustomToast
        ref={toastRef}
        title="This is a title"
        description="Cillum id cupidatat nisi aliquip nostrud consequat nostrud incididunt."
        Icon={IconExample}
        position={position}
      />

      <Button width="auto" onClick={(): void => toastRef.current?.open()}>
        Click here ({position})
      </Button>
    </>
  )
}

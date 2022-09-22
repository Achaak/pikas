import type { CustomToastRef } from '@pikas-ui/toast'
import { CustomToast } from '@pikas-ui/toast'
import { ExampleContainer } from '@/components/ExampleContainer'
import { Button } from '@pikas-ui/button'
import { useRef } from 'react'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'

const IconExample: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

export const CustomToastExample: React.FC = () => {
  const toastRef = useRef<CustomToastRef>(null)

  return (
    <ExampleContainer>
      <CustomToast
        ref={toastRef}
        title="This is a title"
        description="Cillum id cupidatat nisi aliquip nostrud consequat nostrud incididunt."
        Icon={IconExample}
      />

      <Button width="auto" onClick={(): void => toastRef.current?.open()}>
        Click here
      </Button>
    </ExampleContainer>
  )
}

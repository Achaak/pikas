import { CustomAlert } from '@pikas-ui/alert'
import { ExampleContainer } from '@pikas/docs-ui'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import { useState } from 'react'
import { Button } from '@pikas-ui/button'

const IconExample: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

export const CustomAlertExample: React.FC = () => {
  const [visible, setVisible] = useState(true)

  return (
    <ExampleContainer
      css={{
        customRowGap: !visible ? 0 : 8,
        transition: `all ${visible ? '500ms' : '1000ms'} ease-in-out`,
      }}
    >
      <CustomAlert
        Icon={IconExample}
        color="WHITE"
        backgroundColor="SECONDARY"
        visible={visible}
      >
        This is an error alert.
      </CustomAlert>

      <Button
        onClick={(): void => setVisible((lastState) => !lastState)}
        width="auto"
        padding="sm"
        css={{
          button: {
            marginTop: !visible ? 0 : 16,
            transition: `margin-top ${
              visible ? '500ms' : '1000ms'
            } ease-in-out`,
          },
        }}
      >
        {visible ? 'Hide' : 'Show'}
      </Button>
    </ExampleContainer>
  )
}

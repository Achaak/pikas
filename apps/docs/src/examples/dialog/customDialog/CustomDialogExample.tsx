import { ExampleContainer } from '@/components/ExampleContainer'
import { useState } from 'react'
import { Button } from '@pikas-ui/button'
import { CustomDialog } from '@pikas-ui/dialog'

export const CustomDialogExample: React.FC = () => {
  const [visible, setVisible] = useState(true)

  return (
    <ExampleContainer
      css={{
        customRowGap: !visible ? 0 : 8,
        transition: `all ${visible ? '500ms' : '1000ms'} ease-in-out`,
      }}
    >
      <CustomDialog visible={visible} onClose={(): void => setVisible(false)} />

      <Button
        onClick={(): void => setVisible((lastState) => !lastState)}
        width="auto"
        padding="sm"
      >
        {visible ? 'Hide' : 'Show'}
      </Button>
    </ExampleContainer>
  )
}

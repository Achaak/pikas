import { ExampleContainer } from '@pikas/docs-ui'
import { useState } from 'react'
import { Button } from '@pikas-ui/button'
import { SelectImageDialog } from '@pikas-ui/dialog'

export const SelectImageDialogExample: React.FC = () => {
  const [visible, setVisible] = useState(false)

  return (
    <ExampleContainer
      css={{
        customRowGap: !visible ? 0 : 8,
        transition: `all ${visible ? '500ms' : '1000ms'} ease-in-out`,
      }}
    >
      <SelectImageDialog
        visible={visible}
        onClose={(): void => setVisible(false)}
        title="Select Image"
      />

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

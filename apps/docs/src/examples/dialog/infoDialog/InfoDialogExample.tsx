import { ExampleContainer } from '@/components/ExampleContainer'
import { useState } from 'react'
import { Button } from '@pikas-ui/button'
import { InfoDialog } from '@pikas-ui/dialog'

export const InfoDialogExample: React.FC = () => {
  const [visible, setVisible] = useState(false)

  return (
    <ExampleContainer
      style={{
        customRowGap: !visible ? 0 : 8,
        transition: `all ${visible ? '500ms' : '1000ms'} ease-in-out`,
      }}
    >
      <InfoDialog visible={visible} onClose={(): void => setVisible(false)} />

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

import { Alert } from '@pikas-ui/alert'
import { Button } from '@pikas-ui/button'
import { ExampleContainer } from '@/components/ExampleContainer'
import { useState } from 'react'

export const AlertExample: React.FC = () => {
  const [visible, setVisible] = useState(true)

  return (
    <ExampleContainer
      style={{
        customRowGap: !visible ? 0 : 8,
        transition: `all ${visible ? '500ms' : '1000ms'} ease-in-out`,
      }}
    >
      <Alert variant="error" visible={visible}>
        This is an error alert.
      </Alert>
      <Alert variant="success" visible={visible}>
        This is a success alert.
      </Alert>
      <Alert variant="warning" visible={visible}>
        This is a warning alert.
      </Alert>
      <Alert variant="info" visible={visible}>
        This is an info alert.
      </Alert>

      <Button
        onClick={(): void => setVisible((lastState) => !lastState)}
        width="auto"
        padding="sm"
        style={{
          marginTop: !visible ? 0 : 16,
          transition: `margin-top ${visible ? '500ms' : '1000ms'} ease-in-out`,
        }}
      >
        {visible ? 'Hide' : 'Show'}
      </Button>
    </ExampleContainer>
  )
}

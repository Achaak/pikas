import { Checkbox } from '@pikas-ui/checkbox'
import { ExampleContainer } from '@/components/ExampleContainer'
import { useState } from 'react'

export const CheckboxExample: React.FC = () => {
  const [checked, setChecked] = useState(true)

  return (
    <ExampleContainer>
      <Checkbox
        defaultChecked={checked}
        indeterminate={false}
        label={checked ? 'Checked' : 'Unchecked'}
        onChange={setChecked}
      />
      <Checkbox
        defaultChecked={checked}
        indeterminate={false}
        label={checked ? 'Checked' : 'Unchecked'}
        onChange={setChecked}
        bgColorChecked="SECONDARY"
        disabled
      />
    </ExampleContainer>
  )
}

import { ExampleContainer } from '@pikas/docs-ui'
import { IconByName } from '@pikas-ui/icons'
import { Tooltip } from '@pikas-ui/tooltip'

export const TooltipExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Tooltip content="Hello world">
        <IconByName size={40} name="bx:baguette" colorName="BLACK" />
      </Tooltip>
    </ExampleContainer>
  )
}

import { ExampleContainer } from '@/components/ExampleContainer'
import { IconByName } from '@pikas-ui/icons'
import { Tooltip } from '@pikas-ui/tooltip'

export const TooltipExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Tooltip content="Hello world">
        <IconByName size={40} name="bx:baguette" />
      </Tooltip>
    </ExampleContainer>
  )
}

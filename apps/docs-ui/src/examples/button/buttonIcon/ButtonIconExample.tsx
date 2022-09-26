import { ButtonIcon } from '@pikas-ui/button'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import { ExampleContainer } from '@pikas/docs-ui'

const IconExample: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

export const ButtonIconExample: React.FC = () => {
  return (
    <ExampleContainer>
      <ButtonIcon Icon={IconExample} color="PRIMARY" />
      <ButtonIcon Icon={IconExample} color="PRIMARY" outlined />
      <ButtonIcon Icon={IconExample} color="SECONDARY" />
      <ButtonIcon Icon={IconExample} color="SECONDARY" outlined />
      <ButtonIcon Icon={IconExample} color="TERTIARY" />
      <ButtonIcon Icon={IconExample} color="TERTIARY" outlined />
    </ExampleContainer>
  )
}

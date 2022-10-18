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
      <ButtonIcon Icon={IconExample} colorName="PRIMARY" />
      <ButtonIcon Icon={IconExample} colorName="PRIMARY" outlined />
      <ButtonIcon Icon={IconExample} colorName="SECONDARY" />
      <ButtonIcon Icon={IconExample} colorName="SECONDARY" outlined />
      <ButtonIcon Icon={IconExample} colorName="TERTIARY" />
      <ButtonIcon Icon={IconExample} colorName="TERTIARY" outlined />
    </ExampleContainer>
  )
}

import { ExampleContainer } from '@/components/ExampleContainer'
import { ButtonIconLink } from '@pikas-ui/button'
import type { IconProps } from '@pikas-ui/Icons'
import { IconByName } from '@pikas-ui/Icons'

const IconExample: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

export const ButtonIconLinkExample: React.FC = () => {
  return (
    <ExampleContainer>
      <ButtonIconLink Icon={IconExample} color="PRIMARY" href="#" />
      <ButtonIconLink Icon={IconExample} color="PRIMARY" href="#" outlined />
      <ButtonIconLink Icon={IconExample} color="SECONDARY" href="#" />
      <ButtonIconLink Icon={IconExample} color="SECONDARY" href="#" outlined />
      <ButtonIconLink Icon={IconExample} color="TERTIARY" href="#" />
      <ButtonIconLink Icon={IconExample} color="TERTIARY" href="#" outlined />
    </ExampleContainer>
  )
}

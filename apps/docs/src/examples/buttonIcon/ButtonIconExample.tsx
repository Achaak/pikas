import { styled } from '@pikas-ui/styles'
import { ButtonIcon } from '@pikas-ui/button'
import type { IconProps } from '@pikas-ui/Icons'
import { IconByName } from '@pikas-ui/Icons'

const Container = styled('div', {
  display: 'flex',
  margin: '16px 0',
  customColumnGap: 8,
  customRowGap: 8,
})

const IconExample: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

export const ButtonIconExample: React.FC = () => {
  return (
    <Container>
      <ButtonIcon Icon={IconExample} color="PRIMARY" />
      <ButtonIcon Icon={IconExample} color="PRIMARY" outlined />
      <ButtonIcon Icon={IconExample} color="SECONDARY" />
      <ButtonIcon Icon={IconExample} color="SECONDARY" outlined />
      <ButtonIcon Icon={IconExample} color="TERTIARY" />
      <ButtonIcon Icon={IconExample} color="TERTIARY" outlined />
    </Container>
  )
}

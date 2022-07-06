import type { CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '16px 0',
  customColumnGap: 8,
  customRowGap: 8,
})

interface ExampleContainerProps {
  children?: React.ReactNode
  style?: CSS
}

export const ExampleContainer: React.FC<ExampleContainerProps> = ({
  children,
  style,
}) => {
  return <Container css={style}>{children}</Container>
}

import { styled } from '@pikas-ui/styles'

const Container = styled('h1', {
  all: 'unset',
  color: '$BLACK',
  fontSize: '$EM-XX-LARGE',
  fontWeight: '$BOLD',
  letterSpacing: '$SMALL',
})

export const Logo: React.FC = () => {
  return <Container>Pikas ui</Container>
}

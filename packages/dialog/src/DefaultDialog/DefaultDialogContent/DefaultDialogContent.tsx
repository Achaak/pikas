import { styled } from '@pikas-ui/styles'

const Container = styled('div', {})

export interface DefaultDialogContentType {}

export const DefaultDialogContent: React.FC<
  DefaultDialogContentType
> = ({}) => {
  return <Container></Container>
}

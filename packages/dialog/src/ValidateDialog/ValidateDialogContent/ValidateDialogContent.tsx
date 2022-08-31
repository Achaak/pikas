import { styled } from '@pikas-ui/styles'

const Container = styled('div', {})

export interface ValidateDialogContentType {}

export const ValidateDialogContent: React.FC<
  ValidateDialogContentType
> = ({}) => {
  return <Container></Container>
}

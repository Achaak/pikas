import { styled } from '@pikas-ui/styles'

const Container = styled('div', {})

export interface SuccessDialogContentType {}

export const SuccessDialogContent: React.FC<
  SuccessDialogContentType
> = ({}) => {
  return <Container></Container>
}

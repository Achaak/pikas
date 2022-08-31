import { styled } from '@pikas-ui/styles'

const Container = styled('div', {})

export interface ErrorDialogContentType {}

export const ErrorDialogContent: React.FC<ErrorDialogContentType> = ({}) => {
  return <Container></Container>
}

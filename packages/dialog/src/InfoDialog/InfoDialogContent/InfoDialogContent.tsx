import { styled } from '@pikas-ui/styles'

const Container = styled('div', {})

export interface InfoDialogContentType {}

export const InfoDialogContent: React.FC<InfoDialogContentType> = ({}) => {
  return <Container></Container>
}

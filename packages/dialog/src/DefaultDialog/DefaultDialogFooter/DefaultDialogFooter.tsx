import { styled } from '@pikas-ui/styles'

const Container = styled('div', {})

export interface DefaultDialogFooterType {}

export const DefaultDialogFooter: React.FC<DefaultDialogFooterType> = ({}) => {
  return <Container></Container>
}

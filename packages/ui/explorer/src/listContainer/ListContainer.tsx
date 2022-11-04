import { styled } from '@pikas-ui/styles'
import { useContext } from 'react'
import { ExplorerContext } from '../Explorer.js'

const Container = styled('div', {})

export interface ListContainerProps {}

export const ListContainer: React.FC<ListContainerProps> = () => {
  const {} = useContext(ExplorerContext)

  return <Container></Container>
}

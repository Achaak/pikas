import { styled } from '@pikas-ui/styles'
import { useContext } from 'react'
import { ExplorerContext, ExplorerItemType } from '../Explorer.js'
import { WrapperDraggable } from '../wrapperDraggable/index.js'
import { WrapperDroppable } from '../wrapperDroppable/index.js'

const Container = styled('div', {})

export interface WrapperProps {
  id: string
  type: ExplorerItemType
  children?: React.ReactNode
}

export const Wrapper: React.FC<WrapperProps> = ({ type, children, id }) => {
  const { onClickItem } = useContext(ExplorerContext)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onClickItem({ id })
  }

  if (type === 'file') {
    return (
      <WrapperDraggable id={id}>
        <Container onClick={handleClick}>{children}</Container>
      </WrapperDraggable>
    )
  }

  return (
    <WrapperDroppable id={id}>
      <WrapperDraggable id={id}>
        <Container onClick={handleClick}>{children}</Container>
      </WrapperDraggable>
    </WrapperDroppable>
  )
}

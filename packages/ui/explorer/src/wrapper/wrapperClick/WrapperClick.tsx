import { styled } from '@pikas-ui/styles'
import { HTMLAttributes, useContext } from 'react'
import { ExplorerContext, ExplorerItem } from '../../Explorer.js'

const Container = styled('div', {
  display: 'flex',
  flex: 1,
})

export interface WrapperClickProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  item: ExplorerItem
}

export const WrapperClick: React.FC<WrapperClickProps> = ({
  children,
  item,
  ...props
}) => {
  const { onClickItem, onOpenItem } = useContext(ExplorerContext)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    onClickItem({ id: item.id })
  }

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onOpenItem?.({
      id: item.id,
      type: item.type,
    })
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onOpenItem?.({
      id: item.id,
      type: item.type,
    })
  }

  return (
    <Container
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      {children}
    </Container>
  )
}

import { useDroppable } from '@dnd-kit/core'
import { styled } from '@pikas-ui/styles'
import { useContext } from 'react'
import {
  BreadcrumbItem as BreadcrumbItemType,
  ExplorerContext,
} from '../../../Explorer.js'

const Container = styled('span', {
  padding: '4px 8px',
  borderColor: '$GRAY',
  borderWidth: 1,
  borderStyle: 'solid',
  br: 'md',
  fontSize: '$EM-SMALL',
  maxWidth: 100,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '$BLACK',
})

export interface BreadcrumbItemProps {
  breadcrumb: BreadcrumbItemType
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  breadcrumb,
}) => {
  const { onOpenItem } = useContext(ExplorerContext)
  const { isOver, setNodeRef } = useDroppable({
    id: breadcrumb.id,
  })

  const handleClick = () => {
    onOpenItem?.({
      id: breadcrumb.id,
      type: 'folder',
    })
  }

  return (
    <Container
      ref={setNodeRef}
      css={{
        opacity: isOver ? 0.5 : 1,
      }}
      onClick={handleClick}
    >
      {breadcrumb.name}
    </Container>
  )
}

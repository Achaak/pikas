import { useDraggable } from '@dnd-kit/core'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {})

export interface WrapperDraggableProps {
  children?: React.ReactNode
  id: string
}

export const WrapperDraggable: React.FC<WrapperDraggableProps> = ({
  children,
  id,
}) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
  })

  return (
    <Container ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </Container>
  )
}

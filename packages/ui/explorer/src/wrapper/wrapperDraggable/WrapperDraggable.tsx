import { useDraggable } from '@dnd-kit/core';
import { styled } from '@pikas-ui/styles';
import { ReactNode, FC } from 'react';

const Container = styled('div', {});

export interface WrapperDraggableProps {
  children?: ReactNode;
  id: string;
}

export const WrapperDraggable: FC<WrapperDraggableProps> = ({
  children,
  id,
}) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
  });

  return (
    <Container ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </Container>
  );
};

import { useDroppable } from '@dnd-kit/core';
import { styled } from '@pikas-ui/styles';
import { useContext, ReactNode, FC } from 'react';
import { ExplorerContext } from '../../Explorer.js';

const Container = styled('div', {});

export type WrapperDroppableProps = {
  children?: ReactNode;
  id: string;
};

export const WrapperDroppable: FC<WrapperDroppableProps> = ({
  children,
  id,
}) => {
  const { itemsSelected } = useContext(ExplorerContext);

  const { isOver, setNodeRef } = useDroppable({
    id,
    disabled: itemsSelected.some((item) => item.id === id),
  });

  return (
    <Container
      ref={setNodeRef}
      css={{
        opacity: isOver ? 0.5 : 1,
      }}
    >
      {children}
    </Container>
  );
};

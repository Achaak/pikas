import { useDroppable } from '@dnd-kit/core';
import { styled } from '@pikas-ui/styles';
import { useContext } from 'react';
import type { BreadcrumbItem as BreadcrumbItemType } from '../../../Explorer.js';
import { ExplorerContext } from '../../../Explorer.js';
import { FC } from 'react';

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
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$PRIMARY_LIGHTER',
  },
});

export interface BreadcrumbItemProps {
  breadcrumb: BreadcrumbItemType;
}

export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  breadcrumb,
}) => {
  const { onOpenItem } = useContext(ExplorerContext);
  const { isOver, setNodeRef } = useDroppable({
    id: breadcrumb.id,
  });

  const handleClick = (): void => {
    onOpenItem?.({
      id: breadcrumb.id,
      type: 'folder',
    });
  };

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
  );
};

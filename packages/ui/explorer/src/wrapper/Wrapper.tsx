import type { ExplorerItem } from '../Explorer.js';
import { WrapperDraggable } from './wrapperDraggable/index.js';
import { WrapperDroppable } from './wrapperDroppable/index.js';
import { WrapperContextMenu } from './wrapperContextMenu/WrapperContextMenu.js';
import { ReactNode, FC } from 'react';

export type WrapperProps = {
  item: ExplorerItem;
  children?: ReactNode;
};

export const Wrapper: FC<WrapperProps> = ({ item, children }) => {
  if (item.type === 'file') {
    return (
      <WrapperDraggable id={item.id}>
        <WrapperContextMenu item={item}>{children}</WrapperContextMenu>
      </WrapperDraggable>
    );
  }

  return (
    <WrapperDroppable id={item.id}>
      <WrapperDraggable id={item.id}>
        <WrapperContextMenu item={item}>{children}</WrapperContextMenu>
      </WrapperDraggable>
    </WrapperDroppable>
  );
};

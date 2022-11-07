import { ContextMenu } from '@pikas-ui/context-menu';
import { useContext, ReactNode, FC } from 'react';
import type { ExplorerItem } from '../../Explorer.js';
import { ExplorerContext } from '../../Explorer.js';

export type WrapperContextMenuProps = {
  children?: ReactNode;
  item: ExplorerItem;
};

export const WrapperContextMenu: FC<WrapperContextMenuProps> = ({
  children,
  item,
}) => {
  const { showContextMenu } = useContext(ExplorerContext);

  if (!showContextMenu || !item.menu) {
    return <>{children}</>;
  }

  return <ContextMenu data={item.menu}>{children}</ContextMenu>;
};

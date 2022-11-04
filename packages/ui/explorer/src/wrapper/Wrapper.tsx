import { ExplorerItem } from '../Explorer.js'
import { WrapperDraggable } from './wrapperDraggable/index.js'
import { WrapperDroppable } from './wrapperDroppable/index.js'
import { WrapperContextMenu } from './wrapperContextMenu/WrapperContextMenu.js'

export interface WrapperProps {
  item: ExplorerItem
  children?: React.ReactNode
}

export const Wrapper: React.FC<WrapperProps> = ({ item, children }) => {
  if (item.type === 'file') {
    return (
      <WrapperDraggable id={item.id}>
        <WrapperContextMenu>{children}</WrapperContextMenu>
      </WrapperDraggable>
    )
  }

  return (
    <WrapperDroppable id={item.id}>
      <WrapperDraggable id={item.id}>
        <WrapperContextMenu>{children}</WrapperContextMenu>
      </WrapperDraggable>
    </WrapperDroppable>
  )
}

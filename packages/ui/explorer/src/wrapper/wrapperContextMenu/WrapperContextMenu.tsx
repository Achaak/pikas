import { ContextMenu } from '@pikas-ui/context-menu'
import { useContext } from 'react'
import { ExplorerContext } from '../../Explorer.js'

export interface WrapperContextMenuProps {
  children?: React.ReactNode
}

export const WrapperContextMenu: React.FC<WrapperContextMenuProps> = ({
  children,
}) => {
  const { itemMenuData } = useContext(ExplorerContext)

  if (!itemMenuData) {
    return <>{children}</>
  }

  return <ContextMenu data={itemMenuData}>{children}</ContextMenu>
}

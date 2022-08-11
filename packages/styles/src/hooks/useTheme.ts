import { useContext } from 'react'
import type { PikasUIContextType } from '../PikasUIProvider'
import { PikasUIContext } from '../PikasUIProvider'

export const useTheme = (): PikasUIContextType => {
  const theme = useContext(PikasUIContext)

  return theme
}

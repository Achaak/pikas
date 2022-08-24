import { useContext } from 'react'
import type { PikasUIContextType } from '../PikasUIProvider/index.js'
import { PikasUIContext } from '../PikasUIProvider/index.js'

export const useTheme = (): PikasUIContextType => {
  const theme = useContext(PikasUIContext)

  return theme
}

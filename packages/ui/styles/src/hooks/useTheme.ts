import { useContext } from 'react'
import { PikasUIContext } from '../PikasUIProvider/index.js'

export const useTheme = (): PikasUIContext => {
  const theme = useContext(PikasUIContext)

  return theme
}

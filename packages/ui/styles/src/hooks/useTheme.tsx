import { useContext } from 'react'
import type { PikasConfigRecord } from '../type.js'
import { PikasUIContext } from '../PikasUIProvider/index.js'

export const useTheme = <
  Config extends PikasConfigRecord
>(): Config['theme'] => {
  const theme = useContext(PikasUIContext)

  return theme as unknown as Config['theme']
}

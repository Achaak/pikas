import React, { createContext, useState } from 'react'
import { createTheme, styled, theme as themeDefault } from '../css.js'
import merge from 'lodash.merge'

const Container = styled('div', {
  width: '100%',
  height: '100%',
})

export interface PikasUIProviderProps {
  children?: React.ReactNode
  theme?: ReturnType<typeof createTheme>
}

export type PikasUIContextType = typeof themeDefault | null

export const PikasUIContext = createContext<PikasUIContextType>(null)

export const PikasUIProvider: React.FC<PikasUIProviderProps> = ({
  theme,
  children,
}) => {
  const [themeMerged] = useState(merge(themeDefault, theme))
  return (
    <PikasUIContext.Provider value={themeMerged}>
      <Container className={themeMerged}>{children}</Container>
    </PikasUIContext.Provider>
  )
}

import React, { createContext, useState } from 'react'
import { createTheme, styled, theme as themeDefault } from '../css.js'
import merge from 'lodash.merge'
import { useDarkMode } from 'usehooks-ts'

const Container = styled('div', {
  width: '100%',
  height: '100%',
})

export { useDarkMode }

export interface PikasUIProviderProps {
  children?: React.ReactNode
  lightTheme?: ReturnType<typeof createTheme>
  darkTheme?: ReturnType<typeof createTheme>
}

export type PikasUIContextType = typeof themeDefault | null

export const PikasUIContext = createContext<PikasUIContextType>(null)

export const PikasUIProvider: React.FC<PikasUIProviderProps> = ({
  lightTheme,
  darkTheme,
  children,
}) => {
  const { isDarkMode } = useDarkMode()
  const [lightThemeMerged] = useState(merge(themeDefault, lightTheme))
  const [darkThemeMerged] = useState(merge(themeDefault, darkTheme))

  return (
    <PikasUIContext.Provider
      value={isDarkMode ? darkThemeMerged : lightThemeMerged}
    >
      <Container className={isDarkMode ? darkThemeMerged : lightThemeMerged}>
        {children}
      </Container>
    </PikasUIContext.Provider>
  )
}

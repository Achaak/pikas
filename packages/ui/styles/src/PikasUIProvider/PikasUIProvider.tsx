import React, { createContext, useEffect, useState } from 'react'
import { styled, theme as themeDefault } from '../css.js'
import type { PikasConfigRecord } from '../type.js'
import merge from 'lodash.merge'
import cloneDeep from 'lodash.clonedeep'
import * as usehooks from 'usehooks-ts'

const { useTernaryDarkMode } = usehooks

export { useTernaryDarkMode }

const ContainerStyled = styled('div', {
  width: 'auto',
  height: 'fit-content',
})

export interface PikasUIProviderProps<Config extends PikasConfigRecord = any> {
  children?: React.ReactNode
  lightTheme?: Config['theme']
  darkTheme?: Config['theme']
}

export type PikasUIContextProps = PikasConfigRecord['theme']
export type PikasUIContextProps2 = typeof themeDefault.colors

export const PikasUIContext = createContext<PikasUIContextProps>(themeDefault)

export const PikasUIProvider = <Config extends PikasConfigRecord>({
  lightTheme,
  darkTheme,
  children,
}: PikasUIProviderProps<Config>): JSX.Element => {
  const [theme, setTheme] = useState<PikasUIContextProps>(
    merge(cloneDeep(themeDefault), lightTheme)
  )
  const { isDarkMode } = useTernaryDarkMode()

  useEffect(() => {
    const newDarkTheme = darkTheme || lightTheme

    setTheme(
      merge(cloneDeep(themeDefault), isDarkMode ? newDarkTheme : lightTheme)
    )
  }, [isDarkMode, lightTheme, darkTheme])

  return (
    <PikasUIContext.Provider value={theme}>
      <ContainerStyled className={theme}>{children}</ContainerStyled>
    </PikasUIContext.Provider>
  )
}

const Test: React.FC = () => {
  return (
    <PikasUIProvider lightTheme={themeDefault}>
      <button>Toggle dark mode</button>
    </PikasUIProvider>
  )
}

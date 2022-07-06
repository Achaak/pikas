import React, { createContext, useContext, useEffect, useState } from 'react'
import type { createTheme } from '../css.js'
import { styled, theme as themeDefault } from '../css.js'
import merge from 'lodash.merge'
import cloneDeep from 'lodash.clonedeep'
import { useSsr, useTernaryDarkMode } from 'usehooks-ts'

export { useTernaryDarkMode }

export interface PikasUIProviderProps {
  children?: React.ReactNode
  lightTheme?: ReturnType<typeof createTheme>
  darkTheme?: ReturnType<typeof createTheme>
}

export type PikasUIContextType = typeof themeDefault | undefined

export const PikasUIContext = createContext<PikasUIContextType>(undefined)

export const PikasUIProvider: React.FC<PikasUIProviderProps> = ({
  lightTheme,
  darkTheme,
  children,
}) => {
  const [theme, setTheme] = useState<PikasUIContextType>(undefined)
  const { isDarkMode } = useTernaryDarkMode()

  useEffect(() => {
    setTheme(
      merge(cloneDeep(themeDefault), isDarkMode ? darkTheme : lightTheme)
    )
  }, [isDarkMode, lightTheme, darkTheme])

  return (
    <PikasUIContext.Provider value={theme}>
      <Container>{children}</Container>
    </PikasUIContext.Provider>
  )
}

const ContainerStyled = styled('div', {
  width: 'auto',
  height: 'fit-content',
})

interface ContainerProps {
  children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const pikasUIContext = useContext(PikasUIContext)
  const { isBrowser } = useSsr()

  return (
    <ContainerStyled className={isBrowser ? pikasUIContext : undefined}>
      {children}
    </ContainerStyled>
  )
}

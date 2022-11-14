import { createContext, useEffect, useState, ReactNode, FC } from 'react';
import type { createTheme } from '../css.js';
import { styled, theme as themeDefault } from '../css.js';
import merge from 'lodash.merge';
import cloneDeep from 'lodash.clonedeep';
// eslint-disable-next-line import/no-namespace
import * as usehooks from 'usehooks-ts';

const { useTernaryDarkMode } = usehooks;

export { useTernaryDarkMode };

const ContainerStyled = styled('div', {
  width: 'auto',
  height: 'fit-content',
});

export type PikasUIProviderProps = {
  children?: ReactNode;
  lightTheme?: ReturnType<typeof createTheme>;
  darkTheme?: ReturnType<typeof createTheme>;
};

export type PikasUIContextProps = typeof themeDefault | undefined;

export const PikasUIContext = createContext<PikasUIContextProps>(undefined);

export const PikasUIProvider: FC<PikasUIProviderProps> = ({
  lightTheme,
  darkTheme,
  children,
}) => {
  const [theme, setTheme] = useState<PikasUIContextProps>(
    merge(cloneDeep(themeDefault), lightTheme)
  );
  const { isDarkMode } = useTernaryDarkMode();

  useEffect(() => {
    const newDarkTheme = darkTheme ?? lightTheme;

    setTheme(
      merge(cloneDeep(themeDefault), isDarkMode ? newDarkTheme : lightTheme)
    );
  }, [isDarkMode, lightTheme, darkTheme]);

  return (
    <PikasUIContext.Provider value={theme}>
      <ContainerStyled className={theme}>{children}</ContainerStyled>
    </PikasUIContext.Provider>
  );
};

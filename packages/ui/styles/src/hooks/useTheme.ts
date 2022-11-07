import { useContext } from 'react';
import type { PikasUIContextProps } from '../PikasUIProvider/index.js';
import { PikasUIContext } from '../PikasUIProvider/index.js';

export const useTheme = (): PikasUIContextProps => {
  const theme = useContext(PikasUIContext);

  return theme;
};

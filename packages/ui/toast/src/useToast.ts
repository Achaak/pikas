import type { PikasCSS } from '@pikas-ui/styles'
import { useContext } from 'react'
import type { ToastContextProps } from './provider/index.js'
import { createToastContext } from './provider/index.js'

export const useToast = <
  CSS extends PikasCSS = PikasCSS
>(): ToastContextProps<CSS> => {
  const context = useContext(createToastContext<CSS>())

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

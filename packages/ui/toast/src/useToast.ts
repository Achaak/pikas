import type { PikasConfig } from '@pikas-ui/styles'
import { useContext } from 'react'
import type { ToastContextProps } from './provider/index.js'
import { createToastContext } from './provider/index.js'

export const useToast = <
  Config extends PikasConfig = PikasConfig
>(): ToastContextProps<Config> => {
  const context = useContext(createToastContext<Config>())

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useContext } from 'react'
import type { ToastContextProps } from './provider/index.js'
import { ToastContext } from './provider/index.js'

export const useToast = <
  Config extends PikasConfigRecord = any
>(): ToastContextProps<Config> => {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return {
    publish: context.publish as ToastContextProps<Config>['publish'],
    toasts: context.toasts as ToastContextProps<Config>['toasts'],
  }
}

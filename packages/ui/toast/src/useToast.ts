import { useContext } from 'react'
import type { ToastContextProps } from './provider/index.js'
import { ToastContext } from './provider/index.js'

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}

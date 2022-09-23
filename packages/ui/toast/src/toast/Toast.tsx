import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import type { Colors } from '@pikas-ui/styles'
import React, { useCallback } from 'react'
import type { DefaultToastCSS } from '../defaultToast'
import { DefaultToast } from '../defaultToast'
import type { ToastProps } from '../types'

export const ToastVariant = {
  warning: true,
  error: true,
  success: true,
  info: true,
} as const
export type ToastVariant = keyof typeof ToastVariant

interface CustomToastProps extends ToastProps {
  variant?: ToastVariant
  title?: string
  description?: string
  css?: DefaultToastCSS
}

export const Toast: React.FC<CustomToastProps> = ({
  variant,
  css,
  ...props
}) => {
  const Icon: React.FC<IconProps> = (props) => {
    switch (variant) {
      case 'success':
        return <IconByName {...props} name="bx:check-circle" />
      case 'warning':
        return <IconByName {...props} name="bx:error" />
      case 'error':
        return <IconByName {...props} name="bx:x-circle" />
      case 'info':
        return <IconByName {...props} name="bx:info-circle" />
      default:
        return <IconByName {...props} name="bx:info-circle" />
    }
  }

  const getColor = useCallback((): Colors => {
    {
      switch (variant) {
        case 'success':
          return 'SUCCESS'
        case 'warning':
          return 'WARNING'
        case 'error':
          return 'ERROR'
        case 'info':
          return 'PRIMARY'
        default:
          return 'PRIMARY'
      }
    }
  }, [variant])

  return (
    <DefaultToast
      Icon={Icon}
      css={{
        ...css,
        icon: {
          ...css?.icon,
          svg: {
            color: `$${getColor()}`,
            ...css?.icon?.container,
          },
        },
        timer: {
          backgroundColor: `$${getColor()}`,
        },
      }}
      {...props}
    />
  )
}

Toast.defaultProps = {
  variant: 'info',
}

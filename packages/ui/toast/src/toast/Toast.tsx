import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import type { PikasColor, PikasConfigRecord } from '@pikas-ui/styles'
import React, { useCallback } from 'react'
import type { DefaultToastCSS } from '../defaultToast'
import { DefaultToast } from '../defaultToast'
import type { BaseToastProps } from '../types'

export const toastVariant = {
  warning: true,
  danger: true,
  success: true,
  info: true,
} as const
export type ToastVariant = keyof typeof toastVariant

export interface ToastProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> extends BaseToastProps<Config> {
  variant?: ToastVariant
  title?: string
  description?: string
  css?: DefaultToastCSS<Config>
}

export const Toast = <Config extends PikasConfigRecord>({
  variant = 'info',
  css,
  ...props
}: ToastProps<Config>): JSX.Element => {
  const Icon: React.FC<IconProps<Config>> = (props) => {
    switch (variant) {
      case 'success':
        return <IconByName {...props} name="bx:check-circle" />
      case 'warning':
        return <IconByName {...props} name="bx:error" />
      case 'danger':
        return <IconByName {...props} name="bx:x-circle" />
      case 'info':
        return <IconByName {...props} name="bx:info-circle" />
      default:
        return <IconByName {...props} name="bx:info-circle" />
    }
  }

  const getColor = useCallback((): PikasColor => {
    {
      switch (variant) {
        case 'success':
          return 'SUCCESS'
        case 'warning':
          return 'WARNING'
        case 'danger':
          return 'DANGER'
        case 'info':
          return 'PRIMARY'
        default:
          return 'PRIMARY'
      }
    }
  }, [variant])

  return (
    <DefaultToast<Config>
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
          ...css?.timer,
        },
      }}
      {...props}
    />
  )
}

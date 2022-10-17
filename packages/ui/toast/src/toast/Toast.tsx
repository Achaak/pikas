import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import type { PikasCSS, PikasColor } from '@pikas-ui/styles'
import React, { useCallback } from 'react'
import type { DefaultToastCSS } from '../defaultToast'
import { DefaultToast } from '../defaultToast'
import type { BaseToastProps } from '../types'

export const ToastVariant = {
  warning: true,
  danger: true,
  success: true,
  info: true,
} as const
export type ToastVariant = keyof typeof ToastVariant

export interface ToastProps<Config extends PikasConfig>
  extends BaseToastProps<CSS> {
  variant?: ToastVariant
  title?: string
  description?: string
  css?: DefaultToastCSS<CSS>
}

export const Toast = <Config extends PikasConfig = PikasConfig>({
  variant = 'info',
  css,
  ...props
}: ToastProps<CSS>): JSX.Element => {
  const Icon: React.FC<IconProps> = (props) => {
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
    <DefaultToast<CSS>
      Icon={Icon}
      css={{
        ...css,
        icon: {
          ...css?.icon,
          // TODO: fix types
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          svg: {
            color: `$${getColor()}`,
            ...css?.icon?.container,
          },
        },
        // TODO: fix types
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        timer: {
          backgroundColor: `$${getColor()}`,
          ...css?.timer,
        },
      }}
      {...props}
    />
  )
}

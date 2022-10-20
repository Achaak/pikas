import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import React, { useCallback } from 'react'
import { CustomAlert } from '../customAlert/index.js'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import type { BaseAlertProps } from '../types.js'
import fontColorContrast from 'font-color-contrast'

export const alertVariant = {
  info: true,
  success: true,
  warning: true,
  danger: true,
} as const
export type AlertVariant = keyof typeof alertVariant

export interface AlertProps extends BaseAlertProps {
  variant?: AlertVariant
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  children,
  ...props
}) => {
  const theme = useTheme()

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

  const getBackgroundColor = useCallback((): PikasColor => {
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
    <CustomAlert
      Icon={Icon}
      backgroundColorName={getBackgroundColor()}
      colorHex={
        theme &&
        fontColorContrast(theme.colors[getBackgroundColor()].value, 0.7)
      }
      {...props}
    >
      {children}
    </CustomAlert>
  )
}

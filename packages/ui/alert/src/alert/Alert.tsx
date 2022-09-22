import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import React, { useCallback } from 'react'
import { CustomAlert } from '../customAlert/index.js'
import type { ColorsType } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import type { DefaultAlertProps } from '../types.js'
import fontColorContrast from 'font-color-contrast'

export const AlertVariant = {
  info: true,
  success: true,
  warning: true,
  error: true,
}
export type AlertVariantType = keyof typeof AlertVariant

export interface AlertProps extends DefaultAlertProps {
  variant?: AlertVariantType
}

export const Alert: React.FC<AlertProps> = ({
  variant,
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
      case 'error':
        return <IconByName {...props} name="bx:x-circle" />
      case 'info':
        return <IconByName {...props} name="bx:info-circle" />
      default:
        return <IconByName {...props} name="bx:info-circle" />
    }
  }

  const getBackgroundColor = useCallback((): ColorsType => {
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
    <CustomAlert
      Icon={Icon}
      backgroundColor={getBackgroundColor()}
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

Alert.defaultProps = {
  ...CustomAlert.defaultProps,
  variant: 'info',
}

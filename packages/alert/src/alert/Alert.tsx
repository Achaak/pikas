import { IconByName, IconProps } from '@pikas-ui/icons'
import React, { useCallback } from 'react'
import { CustomAlert } from '../customAlert/index.js'
import { ColorsType } from '@pikas-ui/styles'
import { DefaultAlertProps } from '../types.js'

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

  const getColor = useCallback((): ColorsType => {
    {
      switch (variant) {
        case 'success':
          return 'WHITE'
        case 'warning':
          return 'WHITE'
        case 'error':
          return 'WHITE'
        case 'info':
          return 'WHITE'
        default:
          return 'WHITE'
      }
    }
  }, [variant])

  return (
    <CustomAlert
      Icon={Icon}
      backgroundColor={getBackgroundColor()}
      color={getColor()}
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

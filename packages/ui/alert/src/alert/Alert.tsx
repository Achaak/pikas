import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import React, { useCallback } from 'react'
import { CustomAlert } from '../customAlert/index.js'
import type {
  PikasColor,
  FontSize as FontSizeByPikas,
  FontWeight as FontWeightByPikas,
  Color as ColorByPikas,
  PikasFontWeight,
  PikasFontSize,
  FontSizesRecord,
  FontWeightsRecord,
  PikasCSS,
  ColorsRecord,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import type { BaseAlertProps } from '../types.js'
import fontColorContrast from 'font-color-contrast'

export const AlertVariant = {
  info: true,
  success: true,
  warning: true,
  danger: true,
}
export type AlertVariant = keyof typeof AlertVariant

export interface AlertProps<
  CSS extends PikasCSS,
  FontSize extends FontSizeByPikas<FontSizesRecord>,
  FontWeight extends FontWeightByPikas<FontWeightsRecord>
> extends BaseAlertProps<CSS, FontSize, FontWeight> {
  variant?: AlertVariant
}

export const Alert = <
  CSS extends PikasCSS,
  Color extends ColorByPikas<ColorsRecord> = PikasColor,
  FontSize extends FontSizeByPikas<FontSizesRecord> = PikasFontSize,
  FontWeight extends FontWeightByPikas<FontWeightsRecord> = PikasFontWeight
>({
  variant = 'info',
  children,
  ...props
}: AlertProps<CSS, FontSize, FontWeight>): JSX.Element => {
  const theme = useTheme()

  const Icon: React.FC<IconProps<CSS, Color>> = (props) => {
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

  const getBackgroundColor = useCallback((): Color => {
    {
      switch (variant) {
        case 'success':
          return 'SUCCESS' as Color
        case 'warning':
          return 'WARNING' as Color
        case 'danger':
          return 'DANGER' as Color
        case 'info':
          return 'PRIMARY' as Color
        default:
          return 'PRIMARY' as Color
      }
    }
  }, [variant])

  return (
    <CustomAlert
      Icon={Icon}
      backgroundColorName={getBackgroundColor()}
      colorHex={
        theme &&
        fontColorContrast(
          theme.colors[getBackgroundColor() as PikasColor].value,
          0.7
        )
      }
      {...props}
    >
      {children}
    </CustomAlert>
  )
}

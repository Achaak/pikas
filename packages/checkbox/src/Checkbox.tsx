import type {
  BorderRadiusType,
  ColorsType,
  CSS,
  FontsSizesType,
  ShadowsType,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import type { IconStyleType } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import { Label, TextError } from '@pikas-ui/text'
import type { ReactNode } from 'react'
import { useEffect } from 'react'
import React, { useState } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import fontColorContrast from 'font-color-contrast'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
})

const CheckboxStyled = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderStyle: 'solid',

  variants: {
    focus: {
      true: {
        outline: 'solid',
        outlineColor: '$PRIMARY',
        outlineWidth: 2,
      },
    },
  },
})

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {})

const Element = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const CheckboxSide = {
  left: true,
  right: true,
}
export type CheckboxSideType = keyof typeof CheckboxSide

export interface CheckboxStylesType {
  container?: CSS
  label?: CSS
  checkboxRoot?: CSS
  checkboxIndicator?: CSS
  textError?: CSS
  icon?: IconStyleType
}

export interface CheckboxProps {
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  id?: string
  label?: string | ReactNode
  bgColor?: ColorsType
  bgColorChecked?: ColorsType
  textError?: string
  boxShadow?: ShadowsType | 'none'
  borderColor?: ColorsType
  borderWidth?: number
  borderRadius?: BorderRadiusType
  fontSize?: FontsSizesType
  size?: number
  checked?: boolean
  className?: string
  disabled?: boolean
  required?: boolean
  name?: string
  side?: CheckboxSideType
  outline?: boolean
  indeterminate?: boolean
  styles?: CheckboxStylesType
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  textError,
  fontSize,
  className,
  defaultChecked,
  checked,
  onChange,
  disabled,
  required,
  name,
  bgColor,
  bgColorChecked,
  borderRadius,
  boxShadow,
  borderColor,
  borderWidth,
  size,
  side,
  outline,
  indeterminate,
  styles,
}) => {
  const theme = useTheme()

  const [isChecked, setIsChecked] = useState<boolean | 'indeterminate'>(
    indeterminate ? 'indeterminate' : defaultChecked || 'indeterminate'
  )
  const [focus, setFocus] = useState(false)

  const handleChange = (checked: boolean): void => {
    setIsChecked(checked)

    if (onChange) {
      onChange(checked)
    }
  }

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked)
    }
  }, [checked])

  useEffect(() => {
    if (indeterminate) {
      setIsChecked('indeterminate')
    }
  }, [indeterminate])

  return (
    <Container
      className={className}
      css={{
        fontSize: `$${fontSize}`,
        cursor: disabled ? 'not-allowed' : undefined,
        opacity: disabled ? 0.5 : 1,

        '& > *': {
          pointerEvents: disabled ? 'none' : undefined,
        },

        ...styles?.container,
      }}
    >
      <Element>
        {label && side === 'left' ? (
          <Label
            htmlFor={id}
            style={{
              marginRight: 8,
              fontWeight: '$NORMAL',
              ...styles?.label,
            }}
          >
            {label}
          </Label>
        ) : null}

        <CheckboxStyled
          defaultChecked={defaultChecked}
          id={id}
          onCheckedChange={handleChange}
          checked={isChecked}
          disabled={disabled}
          required={required}
          name={name}
          focus={outline ? focus : undefined}
          onFocus={(): void => setFocus(true)}
          onBlur={(): void => setFocus(false)}
          css={{
            backgroundColor: `$${bgColor}`,
            br: borderRadius,
            boxShadow: `$${boxShadow}`,
            borderColor: `$${borderColor}`,
            borderWidth: borderWidth,
            width: size,
            height: size,

            '&[aria-checked="true"]': {
              backgroundColor: `$${bgColorChecked}`,
            },

            ...styles?.checkboxRoot,
          }}
        >
          <CheckboxIndicator
            css={{
              color:
                (theme &&
                  // @ts-ignore
                  fontColorContrast.default(
                    theme.colors[bgColorChecked || 'WHITE'].value,
                    0.7
                  )) ||
                undefined,

              ...styles?.checkboxIndicator,
            }}
          >
            {isChecked === 'indeterminate' && (
              <IconByName
                name="bx:minus"
                colorHex={
                  (theme &&
                    // @ts-ignore
                    fontColorContrast.default(
                      theme.colors[bgColor || 'BLACK'].value,
                      0.7
                    )) ||
                  ''
                }
                styles={{
                  container: {
                    opacity: 0.5,

                    ...styles?.icon?.container,
                  },
                  svg: {
                    ...styles?.icon?.svg,
                  },
                }}
                size={size ? size / 1.25 : undefined}
              />
            )}
            {isChecked === true && (
              <IconByName
                name="bx:check"
                size={size ? size / 1.25 : undefined}
                styles={{
                  ...styles?.icon,
                }}
              />
            )}
          </CheckboxIndicator>
        </CheckboxStyled>

        {label && side === 'right' ? (
          <Label
            htmlFor={id}
            style={{
              marginLeft: 8,
              fontWeight: '$NORMAL',
              ...styles?.label,
            }}
          >
            {label}
          </Label>
        ) : null}
      </Element>

      {textError ? (
        <TextError style={{ marginTop: 5, ...styles?.textError }}>
          {textError}
        </TextError>
      ) : null}
    </Container>
  )
}

Checkbox.defaultProps = {
  bgColor: 'WHITE',
  bgColorChecked: 'PRIMARY',
  boxShadow: 'DIMINUTION_1',
  borderRadius: 'md',
  size: 24,
  side: 'right',
  borderWidth: 0,
  outline: true,
  fontSize: 'EM-MEDIUM',
  disabled: false,
  required: false,
  indeterminate: false,
  defaultChecked: false,
}

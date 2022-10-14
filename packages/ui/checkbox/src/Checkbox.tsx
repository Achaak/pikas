import type {
  BorderRadius,
  PikasColor,
  PikasCSS,
  PikasFontSize,
  PikasShadow,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import type { IconCSS } from '@pikas-ui/icons'
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
export type CheckboxSide = keyof typeof CheckboxSide

export interface CheckboxCSS {
  container?: PikasCSS
  label?: PikasCSS
  checkboxRoot?: PikasCSS
  checkboxIndicator?: PikasCSS
  textError?: PikasCSS
  icon?: IconCSS
}

export interface CheckboxProps {
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  id?: string
  label?: string | ReactNode
  bgColor?: PikasColor
  bgColorChecked?: PikasColor
  textError?: string
  boxShadow?: PikasShadow | 'none'
  borderColor?: PikasColor
  borderWidth?: number
  borderRadius?: BorderRadius
  fontSize?: PikasFontSize
  size?: number
  checked?: boolean
  className?: string
  disabled?: boolean
  required?: boolean
  name?: string
  side?: CheckboxSide
  outline?: boolean
  indeterminate?: boolean
  css?: CheckboxCSS
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  textError,
  fontSize,
  className,
  defaultChecked = false,
  checked,
  onChange,
  disabled = false,
  required = false,
  name,
  bgColor = 'WHITE',
  bgColorChecked = 'PRIMARY',
  borderRadius = 'md',
  boxShadow = 'DIMINUTION_1',
  borderColor,
  borderWidth = 0,
  size = 24,
  side,
  outline = true,
  indeterminate = false,
  css,
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

        ...css?.container,
      }}
    >
      <Element>
        {label && side === 'left' ? (
          <Label
            htmlFor={id}
            css={{
              marginRight: 8,
              fontWeight: '$NORMAL',
              ...css?.label,
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

            ...css?.checkboxRoot,
          }}
        >
          <CheckboxIndicator
            css={{
              color:
                (theme &&
                  fontColorContrast(
                    theme.colors[bgColorChecked || 'WHITE'].value,
                    0.7
                  )) ||
                undefined,

              ...css?.checkboxIndicator,
            }}
          >
            {isChecked === 'indeterminate' && (
              <IconByName
                name="bx:minus"
                colorHex={
                  (theme &&
                    fontColorContrast(
                      theme.colors[bgColor || 'BLACK'].value,
                      0.7
                    )) ||
                  ''
                }
                css={{
                  container: {
                    opacity: 0.5,

                    ...css?.icon?.container,
                  },
                  svg: {
                    ...css?.icon?.svg,
                  },
                }}
                size={size ? size / 1.25 : undefined}
              />
            )}
            {isChecked === true && (
              <IconByName
                name="bx:check"
                size={size ? size / 1.25 : undefined}
                css={{
                  ...css?.icon,
                }}
              />
            )}
          </CheckboxIndicator>
        </CheckboxStyled>

        {label && side === 'right' ? (
          <Label
            htmlFor={id}
            css={{
              marginLeft: 8,
              fontWeight: '$NORMAL',
              ...css?.label,
            }}
          >
            {label}
          </Label>
        ) : null}
      </Element>

      {textError ? (
        <TextError css={{ marginTop: 5, ...css?.textError }}>
          {textError}
        </TextError>
      ) : null}
    </Container>
  )
}

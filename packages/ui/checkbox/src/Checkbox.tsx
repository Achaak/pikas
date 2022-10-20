import type { BorderRadius, PikasConfig, PikasShadow } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import type { IconCSS } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import { Label, TextError } from '@pikas-ui/text'
import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
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

const Item = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const checkboxSide = {
  left: true,
  right: true,
} as const
export type CheckboxSide = keyof typeof checkboxSide

export interface CheckboxCSS<Config extends PikasConfig = PikasConfig> {
  container?: Config['css']
  label?: Config['css']
  checkboxRoot?: Config['css']
  checkboxIndicator?: Config['css']
  textError?: Config['css']
  icon?: IconCSS<Config>
}

export interface CheckboxProps<Config extends PikasConfig = PikasConfig> {
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  id?: string
  label?: string | ReactNode
  bgColorName?: Config['color']
  bgColorNameChecked?: Config['color']
  textError?: string
  boxShadow?: PikasShadow | 'none'
  borderColorName?: Config['color']
  borderWidth?: number
  borderRadius?: BorderRadius
  fontSize?: Config['fontSize']
  size?: number
  checked?: boolean
  className?: string
  disabled?: boolean
  required?: boolean
  name?: string
  side?: CheckboxSide
  outline?: boolean
  indeterminate?: boolean
  css?: CheckboxCSS<Config>
}

export const Checkbox = <Config extends PikasConfig = PikasConfig>({
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
  bgColorName = 'WHITE',
  bgColorNameChecked = 'PRIMARY',
  borderRadius = 'md',
  boxShadow = 'DIMINUTION_1',
  borderColorName,
  borderWidth = 0,
  size = 24,
  side,
  outline = true,
  indeterminate = false,
  css,
}: CheckboxProps<Config>): JSX.Element => {
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
      <Item>
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
            backgroundColor: `$${bgColorName}`,
            br: borderRadius,
            boxShadow: `$${boxShadow}`,
            borderColor: `$${borderColorName}`,
            borderWidth: borderWidth,
            width: size,
            height: size,

            '&[aria-checked="true"]': {
              backgroundColor: `$${bgColorNameChecked}`,
            },

            ...css?.checkboxRoot,
          }}
        >
          <CheckboxIndicator
            css={{
              color:
                (theme &&
                  fontColorContrast(
                    theme.colors[bgColorNameChecked || 'WHITE'].value,
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
                      theme.colors[bgColorName || 'BLACK'].value,
                      0.7
                    )) ||
                  ''
                }
                css={{
                  ...css?.icon,
                  container: {
                    opacity: 0.5,

                    ...css?.icon?.container,
                  },
                }}
                size={size ? size / 1.25 : undefined}
              />
            )}
            {isChecked === true && (
              <IconByName<Config>
                name="bx:check"
                size={size ? size / 1.25 : undefined}
                css={css?.icon}
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
      </Item>

      {textError ? (
        <TextError css={{ marginTop: 5, ...css?.textError }}>
          {textError}
        </TextError>
      ) : null}
    </Container>
  )
}

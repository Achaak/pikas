import type { IconProps, IconCSS } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import type {
  PikasColor,
  BorderRadius,
  PikasCSS,
  PikasShadow,
  PikasFontSize,
} from '@pikas-ui/styles'
import { styled, useTheme } from '@pikas-ui/styles'
import { Description, Label, TextError } from '@pikas-ui/text'
import * as LabelPrimitive from '@radix-ui/react-label'
import fontColorContrast from 'font-color-contrast'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import React, { useRef, useState } from 'react'
import useMergedRef from '@react-hook/merged-ref'
import type { TooltipCSS } from '@pikas-ui/tooltip'
import { Tooltip } from '@pikas-ui/tooltip'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
})

const InputContainer = styled('div', {
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',

  variants: {
    focus: {
      true: {
        outline: 'solid',
        outlineColor: '$PRIMARY',
        outlineWidth: 2,
      },
    },

    gap: {
      xs: {
        customColumnGap: 2,
      },
      sm: {
        customColumnGap: 4,
      },
      md: {
        customColumnGap: 8,
      },
      lg: {
        customColumnGap: 16,
      },
      xl: {
        customColumnGap: 32,
      },
    },
  },
})

const Input = styled('input', {
  width: '100%',
  outline: 'none',
  fontSize: '$EM-SMALL',
  border: 'none',
  fontFamily: '$roboto',
  backgroundColor: '$TRANSPARENT',

  variants: {
    padding: {
      xs: {
        padding: '4px 8px',
      },
      sm: {
        padding: '6px 12px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '12px 24px',
      },
      xl: {
        padding: '16px 32px',
      },
    },
  },
})

const LeftContainer = styled(LabelPrimitive.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    padding: {
      xs: {
        padding: 2,
      },
      sm: {
        padding: 4,
      },
      md: {
        padding: 8,
      },
      lg: {
        padding: 16,
      },
      xl: {
        padding: 32,
      },
    },
  },
})

const RightContainer = styled(LabelPrimitive.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    padding: {
      xs: {
        padding: 2,
      },
      sm: {
        padding: 4,
      },
      md: {
        padding: 8,
      },
      lg: {
        padding: 16,
      },
      xl: {
        padding: 32,
      },
    },
  },
})

const LabelContainer = styled('div', {
  display: 'flex',
  marginBottom: 4,
})

const Required = styled('div', {
  color: '$WARNING',
  marginLeft: 4,
})

export const textfieldType = {
  color: true,
  date: true,
  'datetime-local': true,
  email: true,
  hidden: true,
  month: true,
  number: true,
  password: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true,
} as const
export type TextfieldType = keyof typeof textfieldType

export const textfieldPadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const
export type TextfieldPadding = keyof typeof textfieldPadding

export const textfieldGap = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const
export type TextfieldGap = keyof typeof textfieldGap

export type TextfieldCSS = {
  container?: PikasCSS
  inputContainer?: PikasCSS
  input?: PikasCSS
  left?: PikasCSS
  right?: PikasCSS
  leftIcon?: IconCSS
  rightIcon?: IconCSS
  infoTooltip?: TooltipCSS
  infoIcon?: IconCSS
  label?: PikasCSS
  description?: PikasCSS
  textError?: PikasCSS
  required?: PikasCSS
}

export type TextfieldProps = {
  type?: TextfieldType
  id?: string
  label?: string
  boxShadow?: PikasShadow | 'none'
  borderRadius?: BorderRadius
  padding?: TextfieldPadding
  gap?: TextfieldGap
  fontSize?: PikasFontSize
  borderColorName?: PikasColor
  borderColorHex?: string
  borderWidth?: number
  colorName?: PikasColor
  colorHex?: string
  placeholderColorName?: PikasColor
  placeholderColorHex?: string
  backgroundColorName?: PikasColor
  backgroundColorHex?: string
  textError?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  autoComplete?: string
  LeftIcon?: React.FC<IconProps>
  RightIcon?: React.FC<IconProps>
  leftIconColorName?: PikasColor
  leftIconColorHex?: string
  rightIconColorName?: PikasColor
  rightIconColorHex?: string
  leftIconSize?: number
  rightIconSize?: number
  leftChildren?: React.ReactNode
  rightChildren?: React.ReactNode
  css?: TextfieldCSS
  min?: number
  max?: number
  outline?: boolean
  description?: string
  width?: string | number
  maxWidth?: string | number
  minWidth?: string | number
  info?: React.ReactNode
  data?: DOMStringMap
} & InputHTMLAttributes<HTMLInputElement>

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  (
    {
      id,
      type = 'text',
      onChange,
      boxShadow = 'DIMINUTION_1',
      borderRadius = 'md',
      padding = 'md',
      fontSize = 'EM-MEDIUM',
      textError,
      label,
      css,
      borderColorName = 'TRANSPARENT',
      borderWidth = 0,
      autoComplete,
      min,
      max,
      LeftIcon,
      RightIcon,
      leftChildren,
      rightChildren,
      backgroundColorName = 'GRAY_LIGHTEST_1',
      outline = true,
      description,
      gap,
      width = '100%',
      maxWidth = '100%',
      minWidth,
      backgroundColorHex,
      borderColorHex,
      colorName,
      colorHex,
      placeholderColorName = 'BLACK_LIGHT',
      placeholderColorHex,
      leftIconColorName,
      leftIconColorHex,
      rightIconColorName,
      rightIconColorHex,
      leftIconSize,
      rightIconSize,
      required,
      info,
      disabled = false,
      data,
      ...props
    },
    ref
  ) => {
    const refInput = useRef<HTMLInputElement>(null)
    const multiRef = useMergedRef(ref, refInput)
    const [focus, setFocus] = useState(false)
    const theme = useTheme()

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (type === 'number' && refInput.current) {
        const value = parseInt(e.target.value)

        if (max !== undefined && value > max) {
          refInput.current.value = `${max}`
        } else if (min !== undefined && value < min) {
          refInput.current.value = `${min}`
        }
      }

      if (onChange) {
        onChange(e)
      }
    }

    const getColor = ({
      colorName,
      colorHex,
    }: {
      colorName?: PikasColor
      colorHex?: string
    }): string => {
      return (
        colorHex ||
        (colorName ? `$${colorName}` : undefined) ||
        (theme
          ? fontColorContrast(
              theme.colors[backgroundColorName || 'WHITE'].value,
              0.7
            )
          : undefined) ||
        ''
      )
    }

    return (
      <Container
        css={{
          fontSize: `$${fontSize}`,
          width: width,
          maxWidth: maxWidth,
          minWidth: minWidth,
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : undefined,

          '& > *': {
            pointerEvents: disabled ? 'none' : undefined,
          },
          ...css?.container,
        }}
      >
        {label ? (
          <LabelContainer>
            <Label htmlFor={id} css={css?.label}>
              {label}
            </Label>

            {required ? <Required css={css?.required}>*</Required> : null}
            {info ? (
              <Tooltip content={info} css={css?.infoTooltip}>
                <IconByName
                  name="bx:info-circle"
                  colorName="BLACK_LIGHT"
                  css={{
                    container: {
                      marginLeft: 4,
                      ...css?.infoIcon?.container,
                    },
                    svg: {
                      ...css?.infoIcon?.svg,
                    },
                  }}
                />
              </Tooltip>
            ) : null}
          </LabelContainer>
        ) : null}

        {description ? (
          <Description
            css={{
              marginBottom: 4,
              ...css?.description,
            }}
          >
            {description}
          </Description>
        ) : null}

        <InputContainer
          focus={outline ? focus : undefined}
          gap={gap}
          css={{
            br: borderRadius,
            borderColor:
              borderColorHex || borderColorName
                ? `$${borderColorName}`
                : undefined,
            backgroundColor:
              backgroundColorHex || backgroundColorName
                ? `$${backgroundColorName}`
                : undefined,
            boxShadow: `$${boxShadow}`,
            borderWidth: borderWidth,

            ...css?.inputContainer,
          }}
        >
          {leftChildren && (
            <LeftContainer
              htmlFor={id}
              padding={padding}
              css={{
                ...(id && {
                  cursor: 'pointer',
                }),
                ...css?.left,
              }}
            >
              {leftChildren}
            </LeftContainer>
          )}

          {LeftIcon && (
            <LeftContainer
              htmlFor={id}
              padding={padding}
              css={{
                ...(id && {
                  cursor: 'pointer',
                }),
                ...css?.left,
              }}
            >
              <LeftIcon
                size={leftIconSize || '1em'}
                colorHex={getColor({
                  colorName: leftIconColorName || colorName,
                  colorHex: leftIconColorHex || colorHex,
                })}
                css={css?.leftIcon}
              />
            </LeftContainer>
          )}

          <Input
            ref={multiRef}
            id={id}
            type={type}
            padding={padding}
            onChange={onChangeInput}
            autoComplete={autoComplete}
            min={min}
            max={max}
            onFocus={(): void => setFocus(true)}
            onBlur={(): void => setFocus(false)}
            disabled={disabled}
            required={required}
            css={{
              color: getColor({ colorName, colorHex }),

              '&::placeholder': {
                color: getColor({
                  colorName: placeholderColorName,
                  colorHex: placeholderColorHex,
                }),
              },

              ...css?.input,
            }}
            {...props}
            {...data}
          />

          {RightIcon && (
            <RightContainer
              htmlFor={id}
              padding={padding}
              css={{
                ...(id && {
                  cursor: 'pointer',
                }),
                ...css?.right,
              }}
            >
              <RightIcon
                size={rightIconSize || '1em'}
                colorHex={getColor({
                  colorName: rightIconColorName || colorName,
                  colorHex: rightIconColorHex || colorHex,
                })}
                css={css?.rightIcon}
              />
            </RightContainer>
          )}

          {rightChildren && (
            <RightContainer
              htmlFor={id}
              padding={padding}
              css={{
                ...(id && {
                  cursor: 'pointer',
                }),
                ...css?.right,
              }}
            >
              {rightChildren}
            </RightContainer>
          )}
        </InputContainer>

        {textError && (
          <TextError css={{ marginTop: 5, ...css?.textError }}>
            {textError}
          </TextError>
        )}
      </Container>
    )
  }
)

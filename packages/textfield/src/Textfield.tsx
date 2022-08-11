import type { IconProps, IconStyleType } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import type {
  ShadowsType,
  ColorsType,
  CSS,
  FontsSizesType,
  BorderRadiusType,
} from '@pikas-ui/styles'
import { styled, useTheme } from '@pikas-ui/styles'
import { Description, Label, TextError } from '@pikas-ui/text'
import * as LabelPrimitive from '@radix-ui/react-label'
import fontColorContrast from 'font-color-contrast'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import React, { useRef, useState } from 'react'
import useMergedRef from '@react-hook/merged-ref'
import type { TooltipStylesType } from '@pikas-ui/tooltip'
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
        padding: '2px 4px',
      },
      sm: {
        padding: '4px 8px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '16px 32px',
      },
      xl: {
        padding: '32px 64px',
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

export const TextfieldType = {
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
}
export type TextfieldTypeType = keyof typeof TextfieldType

export const TextfieldPadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
}
export type TextfieldPaddingType = keyof typeof TextfieldPadding

export const TextfieldGap = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
}
export type TextfieldGapType = keyof typeof TextfieldGap

export type TextfieldStylesType = {
  container?: CSS
  inputContainer?: CSS
  input?: CSS
  left?: CSS
  right?: CSS
  leftIcon?: IconStyleType
  rightIcon?: IconStyleType
  info?: TooltipStylesType
}

export type TextfieldProps = {
  type?: TextfieldTypeType
  id?: string
  label?: string
  boxShadow?: ShadowsType | 'none'
  borderRadius?: BorderRadiusType
  padding?: TextfieldPaddingType
  gap?: TextfieldGapType
  fontSize?: FontsSizesType
  borderColor?: ColorsType
  borderColorHex?: string
  borderWidth?: number
  color?: ColorsType
  colorHex?: string
  placeholderColor?: ColorsType
  placeholderColorHex?: string
  backgroundColor?: ColorsType
  backgroundColorHex?: string
  textError?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  autoComplete?: string
  LeftIcon?: React.FC<IconProps>
  RightIcon?: React.FC<IconProps>
  leftIconColor?: ColorsType
  leftIconColorHex?: string
  rightIconColor?: ColorsType
  rightIconColorHex?: string
  leftIconSize?: number
  rightIconSize?: number
  leftChildren?: React.ReactNode
  rightChildren?: React.ReactNode
  styles?: TextfieldStylesType
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
      type,
      onChange,
      boxShadow,
      borderRadius,
      padding,
      fontSize,
      textError,
      label,
      styles,
      borderColor,
      borderWidth,
      autoComplete,
      min,
      max,
      LeftIcon,
      RightIcon,
      leftChildren,
      rightChildren,
      backgroundColor,
      outline,
      description,
      gap,
      width,
      maxWidth,
      minWidth,
      backgroundColorHex,
      borderColorHex,
      color,
      colorHex,
      placeholderColor,
      placeholderColorHex,
      leftIconColor,
      leftIconColorHex,
      rightIconColor,
      rightIconColorHex,
      leftIconSize,
      rightIconSize,
      required,
      info,
      disabled,
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
      color,
      colorHex,
    }: {
      color?: string
      colorHex?: string
    }): string => {
      return (
        colorHex ||
        (color ? `$${color}` : undefined) ||
        (theme
          ? fontColorContrast(
              theme.colors[backgroundColor || 'WHITE'].value,
              0.7
            )
          : undefined) ||
        ''
      )
    }

    return (
      <Container
        css={{
          fontSize: `${fontSize}`,
          width: width,
          maxWidth: maxWidth,
          minWidth: minWidth,
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : undefined,

          '& > *': {
            pointerEvents: disabled ? 'none' : undefined,
          },
          ...styles?.container,
        }}
      >
        {label ? (
          <LabelContainer>
            <Label htmlFor={id}>{label}</Label>

            {required ? <Required>*</Required> : null}
            {info ? (
              <Tooltip content={info} styles={styles?.info}>
                <IconByName
                  name="bx:info-circle"
                  color="BLACK_LIGHT"
                  styles={{
                    container: {
                      marginLeft: 4,
                    },
                  }}
                />
              </Tooltip>
            ) : null}
          </LabelContainer>
        ) : null}

        {description ? (
          <Description
            style={{
              marginBottom: 4,
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
              borderColorHex || borderColor ? `$${borderColor}` : undefined,
            backgroundColor:
              backgroundColorHex || backgroundColor
                ? `$${backgroundColor}`
                : undefined,
            boxShadow: `$${boxShadow}`,
            borderWidth: borderWidth,

            ...styles?.inputContainer,
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
                ...styles?.left,
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
                ...styles?.left,
              }}
            >
              <LeftIcon
                size={leftIconSize || '1em'}
                colorHex={getColor({
                  color: leftIconColor || color,
                  colorHex: leftIconColorHex || colorHex,
                })}
                styles={styles?.leftIcon}
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
              color: getColor({ color, colorHex }),

              '&::placeholder': {
                color: getColor({
                  color: placeholderColor,
                  colorHex: placeholderColorHex,
                }),
              },

              ...styles?.input,
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
                ...styles?.right,
              }}
            >
              <RightIcon
                size={rightIconSize || '1em'}
                colorHex={getColor({
                  color: rightIconColor || color,
                  colorHex: rightIconColorHex || colorHex,
                })}
                styles={styles?.rightIcon}
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
                ...styles?.right,
              }}
            >
              {rightChildren}
            </RightContainer>
          )}
        </InputContainer>

        {textError && (
          <TextError style={{ marginTop: 5 }}>{textError}</TextError>
        )}
      </Container>
    )
  }
)

Textfield.defaultProps = {
  padding: 'md',
  borderRadius: 'md',
  borderColor: 'TRANSPARENT',
  borderWidth: 0,
  backgroundColor: 'GRAY_LIGHTEST_1',
  boxShadow: 'DIMINUTION_1',
  outline: true,
  disabled: false,
  type: 'text',
  fontSize: 'EM-MEDIUM',
  width: '100%',
  maxWidth: '100%',
}

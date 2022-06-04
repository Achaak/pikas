import type { IconProps } from '@pikas-ui/icons'
import type {
  ShadowsType,
  ColorsType,
  CSS,
  FontsSizesType,
  BorderRadiusType,
} from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { Description, Label, TextError } from '@pikas-ui/text'
import * as LabelPrimitive from '@radix-ui/react-label'
import fontColorContrast from 'font-color-contrast'
import React, { useRef, useState } from 'react'

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
})

const InputContainer = styled('div', {
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',

  variants: {
    padding: {
      sm: {
        padding: '4px 8px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '16px 32px',
      },
    },
    focus: {
      true: {
        outline: 'solid',
        outlineColor: '$PRIMARY',
        outlineWidth: 2,
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
})

const LeftContainer = styled(LabelPrimitive.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    padding: {
      sm: {
        marginRight: 4,
      },
      md: {
        marginRight: 8,
      },
      lg: {
        marginRight: 16,
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
      sm: {
        marginLeft: 4,
      },
      md: {
        marginLeft: 8,
      },
      lg: {
        marginLeft: 16,
      },
    },
  },
})

export const TextfieldTypeType = {
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

export const TextfieldPaddingType = {
  sm: true,
  md: true,
  lg: true,
}

export type TextfieldProps = {
  placeholder?: string
  type?: keyof typeof TextfieldTypeType
  id?: string
  label?: string
  name?: string
  boxShadow?: ShadowsType | 'none'
  borderRadius?: BorderRadiusType
  padding?: keyof typeof TextfieldPaddingType
  fontSize?: FontsSizesType
  borderColor?: ColorsType
  borderWidth?: number
  backgroundColor?: ColorsType
  textError?: string

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  defaultValue?: string | number
  autoComplete?: string
  LeftIcon?: React.FC<IconProps>
  RightIcon?: React.FC<IconProps>
  leftChildren?: React.ReactNode
  rightChildren?: React.ReactNode
  styles?: {
    container?: CSS
    inputContainer?: CSS
    input?: CSS
  }
  min?: number
  max?: number
  outline?: boolean
  description?: string
  disabled?: boolean
}

export const Textfield: React.FC<TextfieldProps> = ({
  id,
  name,
  type,
  onChange,
  placeholder,
  boxShadow,
  borderRadius,
  padding,
  fontSize,
  textError,
  label,
  styles,
  borderColor,
  borderWidth,
  defaultValue,
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
  disabled,
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const [focus, setFocus] = useState(false)

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (type === 'number' && ref.current) {
      const value = parseInt(e.target.value)

      if (max !== undefined && value > max) {
        ref.current.value = `${max}`
      } else if (min !== undefined && value < min) {
        ref.current.value = `${min}`
      }
    }

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <Container
      css={{
        fontSize: `${fontSize}`,
        ...styles?.container,
      }}
    >
      {label ? (
        <Label
          htmlFor={id}
          style={{
            marginBottom: 4,
          }}
        >
          {label}
        </Label>
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
        padding={padding}
        focus={outline ? focus : undefined}
        css={{
          br: borderRadius,
          borderColor: `$${borderColor}`,
          backgroundColor: `$${backgroundColor}`,
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
            }}
          >
            <LeftIcon
              size="1em"
              colorHex={fontColorContrast(
                theme.colors[backgroundColor || 'WHITE'].value,
                0.7
              )}
            />
          </LeftContainer>
        )}

        <Input
          ref={ref}
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChangeInput}
          name={name}
          defaultValue={defaultValue}
          autoComplete={autoComplete}
          min={min}
          max={max}
          disabled={disabled}
          onFocus={(): void => setFocus(true)}
          onBlur={(): void => setFocus(false)}
          css={{
            ...styles?.input,
            color: fontColorContrast(
              theme.colors[backgroundColor || 'WHITE'].value,
              0.7
            ),
          }}
        />

        {RightIcon && (
          <RightContainer
            htmlFor={id}
            padding={padding}
            css={{
              ...(id && {
                cursor: 'pointer',
              }),
            }}
          >
            <RightIcon
              size="1em"
              colorHex={fontColorContrast(
                theme.colors[backgroundColor || 'WHITE'].value,
                0.7
              )}
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
            }}
          >
            {rightChildren}
          </RightContainer>
        )}
      </InputContainer>

      {textError && <TextError style={{ marginTop: 5 }}>{textError}</TextError>}
    </Container>
  )
}

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
}

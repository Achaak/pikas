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
import { Label, TextError } from '@pikas-ui/text'
import * as LabelPrimitive from '@radix-ui/react-label'
import fontColorContrast from 'font-color-contrast'
import React, { useRef } from 'react'

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

  variants: {
    borderWidth: {
      sm: {
        borderWidth: 1,
      },
      md: {
        borderWidth: 2,
      },
      lg: {
        borderWidth: 3,
      },
    },
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

export const TextfieldBorderWidthType = {
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
  backgroundColor?: ColorsType
  borderWidth?: keyof typeof TextfieldBorderWidthType
  textError?: string

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  defaultValue?: string | number
  autoComplete?: string
  LeftIcon?: React.FC<IconProps>
  RightIcon?: React.FC<IconProps>
  styles?: {
    container?: CSS
    inputContainer?: CSS
    input?: CSS
  }
  min?: number
  max?: number
}

export const Textfield: React.FC<TextfieldProps> = ({
  id = '',
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
  backgroundColor,
}) => {
  const ref = useRef<HTMLInputElement>(null)

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
      {label ? <Label htmlFor={id}>{label}</Label> : null}

      <InputContainer
        borderWidth={borderWidth}
        padding={padding}
        css={{
          br: borderRadius,
          borderColor: `$${borderColor}`,
          backgroundColor: `$${backgroundColor}`,
          boxShadow: `$${boxShadow}`,
          ...styles?.inputContainer,
        }}
      >
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
              styles={{
                svg: {
                  height: `1em`,
                  width: `1em`,
                  color: fontColorContrast(
                    theme.colors[backgroundColor || 'WHITE'].value,
                    0.7
                  ),
                },
              }}
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
              styles={{
                svg: {
                  height: `1em`,
                  width: `1em`,
                  color: fontColorContrast(
                    theme.colors[backgroundColor || 'WHITE'].value,
                    0.7
                  ),
                },
              }}
            />
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
  backgroundColor: 'GRAY_LIGHTEST_1',
  boxShadow: 'DIMINUTION_1',
}

import type { BorderRadiusType, CSS, FontsSizesType } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { Label, TextError } from '@pikas-ui/text'
import * as LabelPrimitive from '@radix-ui/react-label'
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
  backgroundColor: '$GRAY_LIGHTEST_1',

  variants: {
    variant: {
      'box-inside': {
        boxShadow: '$DIMINUTION_2',
      },
    },
    borderColor: {
      primary: {
        borderColor: '$PRIMARY',
      },
    },
    borderSize: {
      sm: {
        border: '1px solid',
      },
      md: {
        border: '2px solid',
      },
      lg: {
        border: '3px solid',
      },
    },
    padding: {
      sm: {
        padding: '4px 12px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '16px 24px',
      },
    },
  },

  defaultVariants: {
    variant: 'box-inside',
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
})

const RightContainer = styled(LabelPrimitive.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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

interface TextfieldDefaultProps {
  placeholder?: string
  type?: keyof typeof TextfieldTypeType
  id?: string
  label?: string
  name?: string
  variant?: 'box-inside' // Todo
  borderRadius?: BorderRadiusType
  padding?: 'sm' | 'md' | 'lg' // Todo
  fontSize?: FontsSizesType
  borderColor?: 'primary' // Todo
  borderSize?: 'sm' | 'md' | 'lg' // Todo
  textError?: string

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  defaultValue?: string | number
  autoComplete?: string
  left?: React.ReactNode
  right?: React.ReactNode
  styles?: {
    container?: CSS
    inputContainer?: CSS
    input?: CSS
  }
}

interface TextfieldTypeNumberProps extends TextfieldDefaultProps {
  type?: 'number'
  min?: number
  max?: number
}

export type TextfieldProps = TextfieldDefaultProps & TextfieldTypeNumberProps

export const Textfield: React.FC<TextfieldProps> = ({
  id = '',
  name,
  type,
  onChange,
  placeholder,
  variant,
  borderRadius,
  padding,
  fontSize,
  textError,
  label,
  styles,
  borderColor,
  borderSize,
  defaultValue,
  autoComplete,
  min,
  max,
  left,
  right,
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
        borderColor={borderColor}
        borderSize={borderSize}
        variant={variant}
        padding={padding}
        css={{
          br: borderRadius,
          ...styles?.inputContainer,
        }}
      >
        {left && <LeftContainer htmlFor={id}>{left}</LeftContainer>}
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
          }}
        />
        {right && <RightContainer htmlFor={id}>{right}</RightContainer>}
      </InputContainer>

      {textError && <TextError style={{ marginTop: 5 }}>{textError}</TextError>}
    </Container>
  )
}

Textfield.defaultProps = {
  padding: 'md',
  borderRadius: 'md',
}

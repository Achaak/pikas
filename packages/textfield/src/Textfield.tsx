import type { CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import * as LabelPrimitive from '@radix-ui/react-label'
import React, { useRef } from 'react'

import { Text } from '../../text'

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  variants: {
    fontSize: {
      sm: {
        fontSize: '$EM-SMALL',
      },
      md: {
        fontSize: '$EM-MEDIUM',
      },
      lg: {
        fontSize: '$EM-LARGE',
      },
    },
  },
})

const InputContainer = styled('div', {
  width: '100%',
  overflow: 'hidden',
  br: 'lg',
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
    borderRadius: {
      1: {
        br: 'sm',
      },
      2: {
        br: 'md',
      },
      3: {
        br: 'lg',
      },
      round: {
        br: 'round',
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

const Label = styled(LabelPrimitive.Root, {
  fontSize: '$EM-SMALL',
  fontWeight: '$MEDIUM',
  marginBottom: 4,
  cursor: 'pointer',
  display: 'block',
})

const RightContainer = styled(LabelPrimitive.Root, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

interface CustomProps {
  placeholder?: string
  type?: string
  id?: string
  label?: string
  name?: string
  variant?: 'box-inside'
  borderRadius?: 1 | 2 | 3 | 'round'
  padding?: 'sm' | 'md' | 'lg'
  fontSize?: 'sm' | 'md' | 'lg'
  borderColor?: 'primary'
  borderSize?: 'sm' | 'md' | 'lg'
  textError?: string

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  setFieldValue?: (id: string, res: string) => void
  styles?: {
    container?: CSS
    inputContainer?: CSS
    input?: CSS
  }
  defaultValue?: string | number
  autoComplete?: string
  min?: number
  max?: number
  right?: React.ReactNode
}

export const Textfield: React.FC<CustomProps> = ({
  setFieldValue,
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

    if (setFieldValue && id) {
      setFieldValue(id, e.target.value)
    }

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <Container
      fontSize={fontSize}
      css={{
        ...styles?.container,
      }}
    >
      {label ? <Label htmlFor={id}>{label}</Label> : null}

      <InputContainer
        borderRadius={borderRadius}
        borderColor={borderColor}
        borderSize={borderSize}
        variant={variant}
        padding={padding}
        css={{
          ...styles?.inputContainer,
        }}
      >
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

      {textError && (
        <Text style={{ marginTop: 5 }} component="p" variant="error">
          {textError}
        </Text>
      )}
    </Container>
  )
}

Textfield.defaultProps = {
  padding: 'md',
}

import type {
  ShadowsType,
  ColorsType,
  CSS,
  FontsSizesType,
  BorderRadiusType,
} from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { Label, TextError, Description } from '@pikas-ui/text'
import fontColorContrast from 'font-color-contrast'
import React, { useState } from 'react'

const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
})

const TextareaContainer = styled('div', {
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

const TextareaStyled = styled('textarea', {
  width: '100%',
  outline: 'none',
  fontSize: '$EM-SMALL',
  border: 'none',
  fontFamily: '$roboto',
  backgroundColor: '$TRANSPARENT',
})

export const TextareaPaddingType = {
  sm: true,
  md: true,
  lg: true,
}

export const TextareaResizeType = {
  none: true,
  vertical: true,
  horizontal: true,
  both: true,
}

export type TextareaProps = {
  placeholder?: string
  id?: string
  label?: string
  name?: string
  boxShadow?: ShadowsType | 'none'
  borderRadius?: BorderRadiusType
  padding?: keyof typeof TextareaPaddingType
  fontSize?: FontsSizesType
  borderColor?: ColorsType
  borderWidth?: number
  backgroundColor?: ColorsType
  textError?: string

  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  defaultValue?: string | number
  styles?: {
    container?: CSS
    inputContainer?: CSS
    input?: CSS
  }
  outline?: boolean
  resize?: keyof typeof TextareaResizeType
  description?: string
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
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
  backgroundColor,
  outline,
  resize,
  description,
}) => {
  const [focus, setFocus] = useState(false)

  const onChangeTextarea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
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

      <TextareaContainer
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
        <TextareaStyled
          id={id}
          placeholder={placeholder}
          onChange={onChangeTextarea}
          name={name}
          defaultValue={defaultValue}
          onFocus={(): void => setFocus(true)}
          onBlur={(): void => setFocus(false)}
          css={{
            ...styles?.input,
            resize: resize,
            color: fontColorContrast(
              theme.colors[backgroundColor || 'WHITE'].value,
              0.7
            ),
          }}
        />
      </TextareaContainer>

      {textError && <TextError style={{ marginTop: 5 }}>{textError}</TextError>}
    </Container>
  )
}

Textarea.defaultProps = {
  padding: 'md',
  borderRadius: 'md',
  borderColor: 'TRANSPARENT',
  borderWidth: 0,
  backgroundColor: 'GRAY_LIGHTEST_1',
  boxShadow: 'DIMINUTION_1',
  outline: true,
}

import type {
  ShadowsType,
  ColorsType,
  CSS,
  FontsSizesType,
  BorderRadiusType,
} from '@pikas-ui/styles'
import { styled, useTheme } from '@pikas-ui/styles'
import { Label, TextError, Description } from '@pikas-ui/text'
import fontColorContrast from 'font-color-contrast'
import type { TextareaHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import React, { useState } from 'react'
import type { IconStyleType } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import type { TooltipStylesType } from '@pikas-ui/tooltip'
import { Tooltip } from '@pikas-ui/tooltip'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
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

const LabelContainer = styled('div', {
  display: 'flex',
  marginBottom: 4,
})

const Required = styled('div', {
  color: '$WARNING',
  marginLeft: 4,
})

export const TextareaPadding = {
  sm: true,
  md: true,
  lg: true,
}
export type TextareaPaddingType = keyof typeof TextareaPadding

export const TextareaResize = {
  none: true,
  vertical: true,
  horizontal: true,
  both: true,
}
export type TextareaResizeType = keyof typeof TextareaResize

export interface TextareaStylesType {
  container?: CSS
  textareaContainer?: CSS
  textarea?: CSS
  infoTooltip?: TooltipStylesType
  infoIcon?: IconStyleType
  label?: CSS
  description?: CSS
  textError?: CSS
  required?: CSS
}

export type TextareaProps = {
  id?: string
  label?: string
  boxShadow?: ShadowsType | 'none'
  borderRadius?: BorderRadiusType
  padding?: TextareaPaddingType
  fontSize?: FontsSizesType
  textError?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  styles?: TextareaStylesType
  outline?: boolean
  resize?: TextareaResizeType
  description?: string
  width?: string | number
  maxWidth?: string | number
  height?: string | number
  maxHeight?: string | number
  minHeight?: string | number
  minWidth?: string | number
  borderColor?: ColorsType
  borderColorHex?: string
  borderWidth?: number
  color?: ColorsType
  colorHex?: string
  placeholderColor?: ColorsType
  placeholderColorHex?: string
  backgroundColor?: ColorsType
  backgroundColorHex?: string
  info?: React.ReactNode
  data?: DOMStringMap
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
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
      backgroundColor,
      outline,
      resize,
      description,
      width,
      maxWidth,
      height,
      maxHeight,
      minHeight,
      minWidth,
      backgroundColorHex,
      borderColorHex,
      color,
      colorHex,
      placeholderColor,
      placeholderColorHex,
      info,
      required,
      disabled,
      data,
      ...props
    },
    ref
  ) => {
    const [focus, setFocus] = useState(false)
    const theme = useTheme()

    const onChangeTextarea = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
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
      return colorHex || color
        ? `$${color}`
        : undefined ||
            (theme &&
              // @ts-ignore
              fontColorContrast.default(
                theme.colors[backgroundColor || 'WHITE'].value,
                0.7
              )) ||
            ''
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

          ...styles?.container,
        }}
      >
        {label ? (
          <LabelContainer>
            <Label htmlFor={id} style={styles?.label}>
              {label}
            </Label>

            {required ? <Required css={styles?.required}>*</Required> : null}
            {info ? (
              <Tooltip content={info} styles={styles?.infoTooltip}>
                <IconByName
                  name="bx:info-circle"
                  color="BLACK_LIGHT"
                  styles={{
                    container: {
                      marginLeft: 4,
                      ...styles?.infoIcon?.container,
                    },
                    svg: {
                      ...styles?.infoIcon?.svg,
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
              ...styles?.description,
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
            borderColor:
              borderColorHex || borderColor ? `$${borderColor}` : undefined,
            backgroundColor:
              backgroundColorHex || backgroundColor
                ? `$${backgroundColor}`
                : undefined,
            boxShadow: `$${boxShadow}`,
            borderWidth: borderWidth,

            ...styles?.textareaContainer,
          }}
        >
          <TextareaStyled
            ref={ref}
            id={id}
            onChange={onChangeTextarea}
            onFocus={(): void => setFocus(true)}
            onBlur={(): void => setFocus(false)}
            required={required}
            disabled={disabled}
            css={{
              resize: resize,
              height: height,
              maxHeight: maxHeight,
              minHeight: minHeight,
              color: getColor({ color: color, colorHex: colorHex }),

              '&::placeholder': {
                color: getColor({
                  color: placeholderColor,
                  colorHex: placeholderColorHex,
                }),
              },

              ...styles?.textarea,
            }}
            {...props}
            {...data}
          />
        </TextareaContainer>

        {textError && (
          <TextError style={{ marginTop: 5, ...styles?.textError }}>
            {textError}
          </TextError>
        )}
      </Container>
    )
  }
)

Textarea.defaultProps = {
  padding: 'md',
  borderRadius: 'md',
  borderColor: 'TRANSPARENT',
  borderWidth: 0,
  backgroundColor: 'GRAY_LIGHTEST_1',
  boxShadow: 'DIMINUTION_1',
  fontSize: 'EM-MEDIUM',
  outline: true,
  disabled: false,
  width: '100%',
  maxWidth: '100%',
  height: 300,
}

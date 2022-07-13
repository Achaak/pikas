import type {
  BorderRadiusType,
  ColorsType,
  CSS,
  FontsSizesType,
} from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { Description, Label, TextError } from '@pikas-ui/text'
import type { ReactNode } from 'react'
import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
})

const SliderStyled = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
})

const Track = styled(SliderPrimitive.Track, {
  position: 'relative',
  flexGrow: 1,
})

const Range = styled(SliderPrimitive.Range, {
  position: 'absolute',
  height: '100%',
})

const Thumb = styled(SliderPrimitive.Thumb, {
  all: 'unset',
  display: 'block',
  boxShadow: '$ELEVATION_1',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',

  '&:focus': { boxShadow: 'ELEVATION_2' },
})

const Element = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingTop: 8,
  paddingBottom: 8,
})

export const SliderDirection = {
  ltr: true,
  rtl: true,
}
export type SliderDirectionType = keyof typeof SliderDirection

export const SliderOrientation = {
  horizontal: true,
  vertical: true,
}
export type SliderOrientationType = keyof typeof SliderOrientation

export interface SliderStylesType {
  container?: CSS
  label?: CSS
  description?: CSS
  textError?: CSS
  element?: CSS
  slider?: CSS
  track?: CSS
  range?: CSS
  thumb?: CSS
}

export interface SliderProps {
  defaultValue?: number[]
  onChange?: (value: number[]) => void
  id?: string
  label?: string | ReactNode
  textError?: string
  fontSize?: FontsSizesType
  className?: string
  description?: string
  value?: number[]
  disabled?: boolean
  min?: number
  max?: number
  name?: string
  direction?: SliderDirectionType
  orientation?: SliderOrientationType
  step?: number
  minStepsBetweenThumbs?: number
  size?: string | number
  maxSize?: string | number
  minSize?: string | number
  weight?: number
  thumbSize?: number
  thumbColor?: string
  thumbBorderColor?: ColorsType
  thumbBorderColorHex?: string
  thumbBorderColorHover?: ColorsType
  thumbBorderColorHoverHex?: string
  thumbBorderWidth?: number
  thumbBorderRadius?: BorderRadiusType
  trackColor?: ColorsType
  trackColorHex?: string
  rangeColor?: ColorsType
  rangeColorHex?: string
  sliderBorderRadius?: BorderRadiusType
  styles?: SliderStylesType
}

export const Slider: React.FC<SliderProps> = ({
  id,
  label,
  textError,
  fontSize,
  className,
  description,
  defaultValue,
  onChange,
  value,
  direction,
  disabled,
  max,
  min,
  minStepsBetweenThumbs,
  name,
  orientation,
  step,
  weight,
  maxSize,
  minSize,
  size,
  thumbSize,
  thumbColor,
  thumbBorderColor,
  thumbBorderColorHex,
  thumbBorderColorHover,
  thumbBorderColorHoverHex,
  thumbBorderWidth,
  thumbBorderRadius,
  trackColor,
  trackColorHex,
  rangeColor,
  rangeColorHex,
  sliderBorderRadius,
  styles,
}) => {
  return (
    <Container
      className={className}
      css={{
        fontSize: `$${fontSize}`,
        width: orientation === 'horizontal' ? size : undefined,
        maxWidth: orientation === 'horizontal' ? maxSize : undefined,
        minWidth: orientation === 'horizontal' ? minSize : undefined,
        height: orientation === 'vertical' ? size : undefined,
        maxHeight: orientation === 'vertical' ? maxSize : undefined,
        minHeight: orientation === 'vertical' ? minSize : undefined,
        ...styles?.container,
      }}
    >
      {label ? (
        <Label
          htmlFor={id}
          style={{
            marginBottom: 4,
            ...styles?.label,
          }}
        >
          {label}
        </Label>
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

      <Element
        css={{
          height: orientation === 'vertical' ? '100%' : undefined,
          width: orientation === 'horizontal' ? '100%' : undefined,
          ...styles?.element,
        }}
      >
        <SliderStyled
          defaultValue={defaultValue}
          onValueChange={onChange}
          value={value}
          disabled={disabled}
          max={max}
          min={min}
          name={name}
          orientation={orientation}
          step={step}
          minStepsBetweenThumbs={minStepsBetweenThumbs}
          dir={direction}
          id={id}
          css={{
            '&[data-orientation="horizontal"]': {
              height: thumbSize,
              width: '100%',
            },

            '&[data-orientation="vertical"]': {
              flexDirection: 'column',
              width: thumbSize,
              height: '100%',
            },

            ...styles?.slider,
          }}
        >
          <Track
            css={{
              br: sliderBorderRadius,
              backgroundColor:
                trackColorHex || trackColor ? `$${trackColor}` : undefined,

              '&[data-orientation="horizontal"]': { height: weight },
              '&[data-orientation="vertical"]': { width: weight },

              ...styles?.track,
            }}
          >
            <Range
              css={{
                br: sliderBorderRadius,
                backgroundColor:
                  rangeColorHex || rangeColor ? `$${rangeColor}` : undefined,

                ...styles?.range,
              }}
            />
          </Track>
          <Thumb
            css={{
              br: thumbBorderRadius,
              width: thumbSize,
              height: thumbSize,
              backgroundColor:
                thumbColor || thumbColor ? `$${thumbColor}` : undefined,
              borderColor:
                thumbBorderColorHex || thumbBorderColor
                  ? `$${thumbBorderColor}`
                  : undefined,
              borderWidth: thumbBorderWidth,
              borderRadius: thumbBorderRadius,

              '&:hover': {
                backgroundColor:
                  thumbBorderColorHoverHex || thumbBorderColorHover
                    ? `$${thumbBorderColorHover}`
                    : undefined,
              },

              ...styles?.thumb,
            }}
          />
        </SliderStyled>
      </Element>

      {textError ? (
        <TextError style={{ marginTop: 5, ...styles?.textError }}>
          {textError}
        </TextError>
      ) : null}
    </Container>
  )
}

Slider.defaultProps = {
  fontSize: 'EM-MEDIUM',
  direction: 'ltr',
  orientation: 'horizontal',
  step: 1,
  minStepsBetweenThumbs: 1,
  min: 0,
  max: 100,
  disabled: false,
  size: '100%',
  maxSize: '100%',
  weight: 4,
  thumbSize: 16,
  thumbBorderRadius: 'round',
  sliderBorderRadius: 'round',
  trackColor: 'GRAY_LIGHTER',
  rangeColor: 'PRIMARY',
  thumbColor: 'WHITE',
  thumbBorderColorHover: 'GRAY_LIGHTER',
}

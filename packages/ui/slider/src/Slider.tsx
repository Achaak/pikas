import type { BorderRadius, PikasConfigRecord } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { Description, Label, TextError } from '@pikas-ui/text'
import type { ReactNode } from 'react'
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
  br: 'round',

  '&:focus': { boxShadow: 'ELEVATION_2' },
})

const Item = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingTop: 8,
  paddingBottom: 8,
})

export const sliderDirection = {
  ltr: true,
  rtl: true,
} as const
export type SliderDirection = keyof typeof sliderDirection

export const sliderOrientation = {
  horizontal: true,
  vertical: true,
} as const
export type SliderOrientation = keyof typeof sliderOrientation

export interface SliderCSS<Config extends PikasConfigRecord = any> {
  container?: Config['CSS']
  label?: Config['CSS']
  description?: Config['CSS']
  textError?: Config['CSS']
  element?: Config['CSS']
  slider?: Config['CSS']
  track?: Config['CSS']
  range?: Config['CSS']
  thumb?: Config['CSS']
}

export interface SliderProps<Config extends PikasConfigRecord = any> {
  defaultValue?: number[]
  onChange?: (value: number[]) => void
  id?: string
  label?: string | ReactNode
  textError?: string
  fontSize?: Config['theme']['fontSize']
  className?: string
  description?: string
  value?: number[]
  disabled?: boolean
  min?: number
  max?: number
  name?: string
  direction?: SliderDirection
  orientation?: SliderOrientation
  step?: number
  minStepsBetweenThumbs?: number
  size?: string | number
  maxSize?: string | number
  minSize?: string | number
  weight?: number
  thumbSize?: number
  thumbColorName?: keyof Config['theme']['colors']
  thumbColorHex?: string
  thumbBorderColorName?: keyof Config['theme']['colors']
  thumbBorderColorHex?: string
  thumbBorderColorNameHover?: keyof Config['theme']['colors']
  thumbBorderColorHoverHex?: string
  thumbBorderWidth?: number
  thumbBorderRadius?: BorderRadius
  trackColorName?: keyof Config['theme']['colors']
  trackColorHex?: string
  rangeColorName?: keyof Config['theme']['colors']
  rangeColorHex?: string
  sliderBorderRadius?: BorderRadius
  css?: SliderCSS<Config>
  inverted?: boolean
  onValueCommit?: (value: number[]) => void
}

export const Slider = <Config extends PikasConfigRecord>({
  id,
  label,
  textError,
  fontSize = 'EM-MEDIUM' as Config['theme']['fontSize'],
  className,
  description,
  defaultValue,
  onChange,
  value,
  direction = 'ltr',
  disabled = false,
  max = 100,
  min = 0,
  minStepsBetweenThumbs = 1,
  name,
  orientation = 'horizontal',
  step = 1,
  weight = 4,
  maxSize = '100%',
  minSize,
  size = '100%',
  thumbSize = 16,
  thumbColorName = 'WHITE_FIX' as keyof Config['theme']['colors'],
  thumbColorHex,
  thumbBorderColorName,
  thumbBorderColorHex,
  thumbBorderColorNameHover = 'GRAY_LIGHTER' as keyof Config['theme']['colors'],
  thumbBorderColorHoverHex,
  thumbBorderWidth,
  thumbBorderRadius,
  trackColorName = 'GRAY_LIGHTER' as keyof Config['theme']['colors'],
  trackColorHex,
  rangeColorName = 'PRIMARY' as keyof Config['theme']['colors'],
  rangeColorHex,
  sliderBorderRadius,
  css,
  inverted,
  onValueCommit,
}: SliderProps<Config>): JSX.Element => {
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
        ...css?.container,
      }}
    >
      {label ? (
        <Label<Config>
          htmlFor={id}
          css={{
            marginBottom: 4,
            ...css?.label,
          }}
        >
          {label}
        </Label>
      ) : null}

      {description ? (
        <Description<Config>
          css={{
            marginBottom: 4,
            ...css?.description,
          }}
        >
          {description}
        </Description>
      ) : null}

      <Item
        css={{
          height: orientation === 'vertical' ? '100%' : undefined,
          width: orientation === 'horizontal' ? '100%' : undefined,
          ...css?.element,
        }}
      >
        <SliderStyled
          defaultValue={defaultValue}
          onValueChange={onChange}
          onValueCommit={onValueCommit}
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
          inverted={inverted}
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

            ...css?.slider,
          }}
        >
          <Track
            css={{
              br: sliderBorderRadius,
              backgroundColor:
                trackColorHex || trackColorName
                  ? `$${trackColorName}`
                  : undefined,

              '&[data-orientation="horizontal"]': { height: weight },
              '&[data-orientation="vertical"]': { width: weight },

              ...css?.track,
            }}
          >
            <Range
              css={{
                br: sliderBorderRadius,
                backgroundColor:
                  rangeColorHex || rangeColorName
                    ? `$${rangeColorName}`
                    : undefined,

                ...css?.range,
              }}
            />
          </Track>
          <Thumb
            css={{
              br: thumbBorderRadius,
              width: thumbSize,
              height: thumbSize,
              backgroundColor:
                thumbColorHex || thumbColorName
                  ? `$${thumbColorName}`
                  : undefined,
              borderColor:
                thumbBorderColorHex || thumbBorderColorName
                  ? `$${thumbBorderColorName}`
                  : undefined,
              borderWidth: thumbBorderWidth,
              borderRadius: thumbBorderRadius,

              '&:hover': {
                backgroundColor:
                  thumbBorderColorHoverHex || thumbBorderColorNameHover
                    ? `$${thumbBorderColorNameHover}`
                    : undefined,
              },

              ...css?.thumb,
            }}
          />
        </SliderStyled>
      </Item>

      {textError ? (
        <TextError<Config> css={{ marginTop: 5, ...css?.textError }}>
          {textError}
        </TextError>
      ) : null}
    </Container>
  )
}

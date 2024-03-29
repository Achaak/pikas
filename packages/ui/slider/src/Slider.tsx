import type {
  PikasRadius,
  PikasColor,
  PikasCSS,
  PikasFontSize,
} from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { Description, Label, TextError } from '@pikas-ui/text';
import type { ReactNode } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
});

const SliderStyled = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
});

const Track = styled(SliderPrimitive.Track, {
  position: 'relative',
  flexGrow: 1,
});

const Range = styled(SliderPrimitive.Range, {
  position: 'absolute',
  height: '100%',
});

const Thumb = styled(SliderPrimitive.Thumb, {
  all: 'unset',
  display: 'block',
  boxShadow: '$bottom-md',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  borderRadius: '$xl',
});

const Item = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingTop: 8,
  paddingBottom: 8,
});

export const sliderDirection = {
  ltr: true,
  rtl: true,
} as const;
export type SliderDirection = keyof typeof sliderDirection;

export const sliderOrientation = {
  horizontal: true,
  vertical: true,
} as const;
export type SliderOrientation = keyof typeof sliderOrientation;

export type SliderCSS = {
  container?: PikasCSS;
  label?: PikasCSS;
  description?: PikasCSS;
  textError?: PikasCSS;
  element?: PikasCSS;
  slider?: PikasCSS;
  track?: PikasCSS;
  range?: PikasCSS;
  thumb?: PikasCSS;
};

export type SliderProps = {
  defaultValue?: number[];
  onChange?: (value: number[]) => void;
  id?: string;
  label?: ReactNode | string;
  textError?: string;
  fontSize?: PikasFontSize;
  className?: string;
  description?: string;
  value?: number[];
  disabled?: boolean;
  min?: number;
  max?: number;
  name?: string;
  direction?: SliderDirection;
  orientation?: SliderOrientation;
  step?: number;
  minStepsBetweenThumbs?: number;
  size?: number | string;
  maxSize?: number | string;
  minSize?: number | string;
  weight?: number;
  thumbSize?: number;
  thumbColorName?: PikasColor;
  thumbColorHex?: string;
  thumbBorderColorName?: PikasColor;
  thumbBorderColorHex?: string;
  thumbBorderColorNameHover?: PikasColor;
  thumbBorderColorHoverHex?: string;
  thumbBorderWidth?: number;
  thumbBorderRadius?: PikasRadius;
  trackColorName?: PikasColor;
  trackColorHex?: string;
  rangeColorName?: PikasColor;
  rangeColorHex?: string;
  sliderBorderRadius?: PikasRadius;
  css?: SliderCSS;
  inverted?: boolean;
  onValueCommit?: (value: number[]) => void;
};

export const Slider: FC<SliderProps> = ({
  id,
  label,
  textError,
  fontSize = 'em-base',
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
  thumbColorName = 'white-fixed',
  thumbColorHex,
  thumbBorderColorName,
  thumbBorderColorHex,
  thumbBorderColorNameHover = 'gray-lighter',
  thumbBorderColorHoverHex,
  thumbBorderWidth,
  thumbBorderRadius,
  trackColorName = 'gray-lighter',
  trackColorHex,
  rangeColorName = 'primary',
  rangeColorHex,
  sliderBorderRadius,
  css,
  inverted,
  onValueCommit,
}) => (
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
      <Label
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
      <Description
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
            borderRadius: sliderBorderRadius
              ? `$${sliderBorderRadius}`
              : undefined,
            backgroundColor: trackColorHex ?? `$${trackColorName}`,

            '&[data-orientation="horizontal"]': { height: weight },
            '&[data-orientation="vertical"]': { width: weight },

            ...css?.track,
          }}
        >
          <Range
            css={{
              borderRadius: sliderBorderRadius
                ? `$${sliderBorderRadius}`
                : undefined,
              backgroundColor: rangeColorHex ?? `$${rangeColorName}`,
              ...css?.range,
            }}
          />
        </Track>
        <Thumb
          css={{
            borderRadius: thumbBorderRadius
              ? `$${thumbBorderRadius}`
              : undefined,
            width: thumbSize,
            height: thumbSize,
            backgroundColor: thumbColorHex ?? `$${thumbColorName}`,
            borderColor:
              thumbBorderColorHex ??
              (thumbBorderColorName ? `$${thumbBorderColorName}` : undefined),
            borderWidth: thumbBorderWidth,

            '&:hover': {
              backgroundColor:
                thumbBorderColorHoverHex ?? `$${thumbBorderColorNameHover}`,
            },

            ...css?.thumb,
          }}
        />
      </SliderStyled>
    </Item>

    {textError ? (
      <TextError css={{ marginTop: 5, ...css?.textError }}>
        {textError}
      </TextError>
    ) : null}
  </Container>
);

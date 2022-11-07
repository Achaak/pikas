import type {
  BorderRadius,
  PikasColor,
  PikasCSS,
  PikasFontSize,
} from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { Description, Label, TextError } from '@pikas-ui/text';
import type { ReactNode } from 'react';
import {
  Root,
  Track as SliderPrimitiveTrack,
  Range as SliderPrimitiveRange,
  Thumb as SliderPrimitiveThumb,
} from '@radix-ui/react-slider';
import { FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',
});

const SliderStyled = styled(Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
});

const Track = styled(SliderPrimitiveTrack, {
  position: 'relative',
  flexGrow: 1,
});

const Range = styled(SliderPrimitiveRange, {
  position: 'absolute',
  height: '100%',
});

const Thumb = styled(SliderPrimitiveThumb, {
  all: 'unset',
  display: 'block',
  boxShadow: '$ELEVATION_1',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  br: 'round',

  '&:focus': { boxShadow: 'ELEVATION_2' },
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
  thumbBorderRadius?: BorderRadius;
  trackColorName?: PikasColor;
  trackColorHex?: string;
  rangeColorName?: PikasColor;
  rangeColorHex?: string;
  sliderBorderRadius?: BorderRadius;
  css?: SliderCSS;
  inverted?: boolean;
  onValueCommit?: (value: number[]) => void;
};

export const Slider: FC<SliderProps> = ({
  id,
  label,
  textError,
  fontSize = 'EM-MEDIUM',
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
  thumbColorName = 'WHITE_FIX',
  thumbColorHex,
  thumbBorderColorName,
  thumbBorderColorHex,
  thumbBorderColorNameHover = 'GRAY_LIGHTER',
  thumbBorderColorHoverHex,
  thumbBorderWidth,
  thumbBorderRadius,
  trackColorName = 'GRAY_LIGHTER',
  trackColorHex,
  rangeColorName = 'PRIMARY',
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
            br: sliderBorderRadius,
            backgroundColor: trackColorHex ?? `$${trackColorName}`,

            '&[data-orientation="horizontal"]': { height: weight },
            '&[data-orientation="vertical"]': { width: weight },

            ...css?.track,
          }}
        >
          <Range
            css={{
              br: sliderBorderRadius,
              backgroundColor: rangeColorHex ?? `$${rangeColorName}`,
              ...css?.range,
            }}
          />
        </Track>
        <Thumb
          css={{
            br: thumbBorderRadius,
            width: thumbSize,
            height: thumbSize,
            backgroundColor: thumbColorHex ?? `$${thumbColorName}`,
            borderColor:
              thumbBorderColorHex ??
              (thumbBorderColorName ? `$${thumbBorderColorName}` : undefined),
            borderWidth: thumbBorderWidth,
            borderRadius: thumbBorderRadius,

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

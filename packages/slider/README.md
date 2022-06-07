# @pikas-ui/slider

This package contains a slider component.

This library is based on [Radix Ui](https://www.radix-ui.com/).

## Getting Started

You need to install the [@pikas-ui/styles](../styles/README.md) package to use this package.

### Installation

With npm:

```
npm install @pikas-ui/slider
```

With yarn:

```
yarn add @pikas-ui/slider
```

With pnpm:

```
pnpm add @pikas-ui/slider
```

---

## Usage

### Slider

```tsx
import { Slider } from `@pikas-ui/slider`

const Example: React.FC = () => (
  <Slider />
)
```

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
}


#### Props

| Prop                       | Description                                                     | Type                        | Default          |
| :------------------------- | :-------------------------------------------------------------- | :-------------------------- | :--------------- |
| `defaultValue`             | The initial value of the slider.                                | `number[]`                  | -                |
| `onChange`                 | Callback function that is called when the slider value changes. | `(value: number[]) => void` | -                |
| `id`                       | The id of the slider.                                           | `string`                    | -                |
| `label`                    | The label of the slider.                                        | `string or ReactNode`       | -                |
| `textError`                | The error text of the slider.                                   | `string`                    | -                |
| `fontSize`                 | The font size of the slider.                                    | `FontsSizesType`            | `EM-MEDIUM`      |
| `className`                | The class name of the slider.                                   | `string`                    | -                |
| `description`              | The description of the slider.                                  | `string`                    | -                |
| `value`                    | The value of the slider.                                        | `number[]`                  | -                |
| `disabled`                 | If the slider is disabled.                                      | `boolean`                   | `false`          |
| `min`                      | The minimum value of the slider.                                | `number`                    | `0`              |
| `max`                      | The maximum value of the slider.                                | `number`                    | `100`            |
| `name`                     | The name of the slider.                                         | `string`                    | -                |
| `direction`                | The direction of the slider.                                    | `SliderDirectionType`       | `ltr`            |
| `orientation`              | The orientation of the slider.                                  | `SliderOrientationType`     | `horizontal`     |
| `step`                     | The step of the slider.                                         | `number`                    | `1`              |
| `minStepsBetweenThumbs`    | The minimum number of steps between thumbs.                     | `number`                    | `1`              |
| `size`                     | The size of the slider.                                         | `string or number`          | `100%`           |
| `maxSize`                  | The max size of the slider.                                     | `string or number`          | `100%`           |
| `minSize`                  | The min size of the slider.                                     | `string or number`          | -                |
| `weight`                   | The weight of the slider.                                       | `number`                    | `4`              |
| `thumbSize`                | The size of the thumb.                                          | `number`                    | `16`             |
| `thumbColor`               | The color of the thumb.                                         | `ColorsType`                | `"WHITE"`        |
| `thumbColorHex`            | The hex color of the thumb.                                     | `string`                    | -                |
| `thumbBorderColor`         | The color of the thumb border.                                  | `ColorsType`                | -                |
| `thumbBorderColorHex`      | The color of the thumb border in hexadecimal                    | `string`                    | -                |
| `thumbBorderColorHover`    | The color of the thumb border on hover.                         | `ColorsType`                | `"GRAY_LIGHTER"` |
| `thumbBorderColorHoverHex` | The color of the thumb border on hover in hexadecimal.          | `string`                    | -                |
| `thumbBorderWidth`         | The width of the thumb border.                                  | `number`                    | -                |
| `thumbBorderRadius`        | The radius of the thumb border.                                 | `BorderRadiusType`          | `"round"`        |
| `trackColor`               | The color of the track.                                         | `stColorsTypering`          | `"GRAY_LIGHTER"` |
| `trackColorHex`            | The color of the track in hexadecimal.                          | `string`                    | -                |
| `rangeColor`               | The color of the range.                                         | `ColorsType`                | -                |
| `rangeColorHex`            | The color of the range in hexadecimal.                          | `string`                    | -                |
| `sliderBorderRadius`       | The radius of the slider border.                                | `BorderRadiusType`          | `"round"`        |

---

### Change Log
You can find the change log [here](CHANGELOG.md).
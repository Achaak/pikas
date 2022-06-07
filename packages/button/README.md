# @pikas-ui/button

This package contains a button components.

## Getting Started

You need to install the [@pikas-ui/styles](../styles/README.md) package to use this package.

### Installation

With npm:

```
npm install @pikas-ui/button
```

With yarn:

```
yarn add @pikas-ui/button
```

With pnpm:

```
pnpm add @pikas-ui/button
```

---

## Usage

### Button

```tsx
import { Button } from `@pikas-ui/button`;

const Example: React.FC = () => (
  <Button>Click me</Button>
)
```

#### Props
Props extends `ButtonHTMLAttributes<HTMLButtonElement>`

| Prop            | Description                                       | Type                      | Default       |
| :-------------- | :------------------------------------------------ | :------------------------ | :------------ |
| `children`      | The content of the button.                        | `React.ReactNode`         | -             |
| `type`          | The type of the button.                           | `ButtonTargetType`        | `"button"`    |
| `fullWidth`     | If the button should be full width.               | `boolean`                 | `false`       |
| `color`         | The color of the button.                          | `ColorsType`              | `"PRIMARY"`   |
| `colorHex`      | The color of the button (hex).                    | `string`                  | -             |
| `textColor`     | The color of the button.                          | `ColorsType`              | -             |
| `textColorHex`  | The color of the button (hex).                    | `string`                  | -             |
| `styles`        | The style of the button.                          | `object`                  | -             |
| `padding`       | The padding of the button.                        | `ButtonPaddingType`       | `"md"`        |
| `loading`       | If the button is loading.                         | `boolean`                 | `false`       |
| `disabled`      | If the button is disabled.                        | `boolean`                 | `false`       |
| `borderRadius`  | The border radius of the button.                  | `BorderRadiusType`        | `"md"`        |
| `fontSize`      | The font size of the button.                      | `FontsSizesType`          | `"EM-MEDIUM"` |
| `textTransform` | The text transform of the button.                 | `ButtonTextTransformType` | `"default"`   |
| `fontWeight`    | The font weight of the button.                    | `FontsWeightsType`        | `"NORMAL"`    |
| `effect`        | The effect of the button when hovered or clicked. | `ButtonEffectType`        | `"opacity"`   |
| `onClick`       | The function to call on click.                    | `function`                | -             |
| `gap`           | The gap of the button.                            | `ButtonGapType`           | `"md"`        |
| `LeftIcon`      | The left icon of the button.                      | `React.FC<IconProps>`     | -             |
| `RightIcon`     | The right icon of the button.                     | `React.FC<IconProps>`     | -             |
| `outlined`      | If the button is outlined.                        | `boolean`                 | `false`       |
| `borderWidth`   | The border width of the button.                   | `number`                  | `2`           |

---

### ButtonLink

```tsx
import { ButtonLink } from `@pikas-ui/button`;

const Example: React.FC = () => (
  <ButtonLink href="#">Click me</ButtonLink>
)
```

#### Props
Props extends `AnchorHTMLAttributes<HTMLAnchorElement>`

| Prop            | Description                                       | Type                      | Default       |
| :-------------- | :------------------------------------------------ | :------------------------ | :------------ |
| `children`      | The content of the button.                        | `React.ReactNode`         | -             |
| `fullWidth`     | If the button should be full width.               | `boolean`                 | `false`       |
| `color`         | The color of the button.                          | `ColorsType`              | `"PRIMARY"`   |
| `colorHex`      | The color of the button (hex).                    | `string`                  | -             |
| `textColor`     | The color of the button.                          | `ColorsType`              | -             |
| `textColorHex`  | The color of the button (hex).                    | `string`                  | -             |
| `styles`        | The style of the button.                          | `object`                  | -             |
| `padding`       | The padding of the button.                        | `ButtonPaddingType`       | `"md"`        |
| `loading`       | If the button is loading.                         | `boolean`                 | `false`       |
| `disabled`      | If the button is disabled.                        | `boolean`                 | `false`       |
| `borderRadius`  | The border radius of the button.                  | `BorderRadiusType`        | `"md"`        |
| `fontSize`      | The font size of the button.                      | `FontsSizesType`          | `"EM-MEDIUM"` |
| `textTransform` | The text transform of the button.                 | `ButtonTextTransformType` | `"default"`   |
| `fontWeight`    | The font weight of the button.                    | `FontsWeightsType`        | `"NORMAL"`    |
| `effect`        | The effect of the button when hovered or clicked. | `ButtonEffectType`        | `"opacity"`   |
| `onClick`       | The function to call on click.                    | `function`                | -             |
| `gap`           | The gap of the button.                            | `ButtonGapType`           | `"md"`        |
| `href`          | The href of the button.                           | `string`                  | -             |
| `LeftIcon`      | The left icon of the button.                      | `React.FC<IconProps>`     | -             |
| `RightIcon`     | The right icon of the button.                     | `React.FC<IconProps>`     | -             |
| `outlined`      | If the button is outlined.                        | `boolean`                 | `false`       |
| `borderWidth`   | The border width of the button.                   | `number`                  | `2`           |
| `target`        | The target of the button.                         | `ButtonTargetType`        | `"_self"`     |

---

### ButtonIcon

```tsx
import { ButtonIcon } from `@pikas-ui/button`;

const IconExample: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

const Example: React.FC = () => (
  <ButtonIcon icon={IconExample} />
)
```

#### Props
Props extends `ButtonHTMLAttributes<HTMLButtonElement>`

| Prop           | Description                                       | Type                | Default     |
| :------------- | :------------------------------------------------ | :------------------ | :---------- |
| `type`         | The type of the button.                           | `ButtonTargetType`  | `"button"`  |
| `color`        | The color of the button.                          | `ColorsType`        | `"PRIMARY"` |
| `colorHex`     | The color of the button (hex).                    | `string`            | -           |
| `iconColor`    | The color of the button.                          | `ColorsType`        | -           |
| `iconColorHex` | The color of the button (hex).                    | `string`            | -           |
| `styles`       | The style of the button.                          | `object`            | -           |
| `padding`      | The padding of the button.                        | `ButtonPaddingType` | `"md"`      |
| `loading`      | If the button is loading.                         | `boolean`           | `false`     |
| `disabled`     | If the button is disabled.                        | `boolean`           | `false`     |
| `borderRadius` | The border radius of the button.                  | `BorderRadiusType`  | `"md"`      |
| `effect`       | The effect of the button when hovered or clicked. | `ButtonEffectType`  | `"opacity"` |
| `onClick`      | The function to call on click.                    | `function`          | -           |
| `outlined`     | If the button is outlined.                        | `boolean`           | `false`     |
| `borderWidth`  | The border width of the button.                   | `number`            | `2`         |
| `size`         | The size of the button.                           | `SizesType`         | `"md"`      |

---

### ButtonIconLink

```tsx
import { ButtonIconLink } from `@pikas-ui/button`;

const IconExample: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

const Example: React.FC = () => (
  <ButtonIconLink icon={IconExample} href="#" />
)
```

#### Props
Props extends `AnchorHTMLAttributes<HTMLAnchorElement>`

| Prop           | Description                                       | Type                | Default     |
| :------------- | :------------------------------------------------ | :------------------ | :---------- |
| `color`        | The color of the button.                          | `ColorsType`        | `"PRIMARY"` |
| `colorHex`     | The color of the button (hex).                    | `string`            | -           |
| `iconColor`    | The color of the button.                          | `ColorsType`        | -           |
| `iconColorHex` | The color of the button (hex).                    | `string`            | -           |
| `styles`       | The style of the button.                          | `object`            | -           |
| `padding`      | The padding of the button.                        | `ButtonPaddingType` | `"md"`      |
| `loading`      | If the button is loading.                         | `boolean`           | `false`     |
| `disabled`     | If the button is disabled.                        | `boolean`           | `false`     |
| `borderRadius` | The border radius of the button.                  | `BorderRadiusType`  | `"md"`      |
| `effect`       | The effect of the button when hovered or clicked. | `ButtonEffectType`  | `"opacity"` |
| `onClick`      | The function to call on click.                    | `function`          | -           |
| `href`         | The href of the button.                           | `string`            | -           |
| `outlined`     | If the button is outlined.                        | `boolean`           | `false`     |
| `borderWidth`  | The border width of the button.                   | `number`            | `2`         |
| `size`         | The size of the button.                           | `SizesType`         | `"md"`      |
| `target`       | The target of the button.                         | `ButtonTargetType`  | `"_self"`   |

---

### Change Log
You can find the change log [here](CHANGELOG.md).
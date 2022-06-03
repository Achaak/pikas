# @pikas-ui/button

This package contains a button component.

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

```jsx
import { Button } from `@pikas-ui/button`;

const Example: React.FC = () => (
  <Button>Click me</Button>
)
```

#### Props

| Prop            | Description                                       | Type                                              | Default       |
|-----------------|---------------------------------------------------|---------------------------------------------------|---------------|
| `children`      | The content of the button.                        | `React.ReactNode`                                 | -             |
| `type`          | The type of the button.                           | `"button" | "submit" | "reset"`                   | `"button"`    |
| `fullWidth`     | If the button should be full width.               | `boolean`                                         | `false`       |
| `id`            | The id of the button.                             | `string`                                          | -             |
| `name`          | The name of the button.                           | `string`                                          | -             |
| `color`         | The color of the button.                          | `ColorsType`                                      | `"PRIMARY"`   |
| `style`         | The style of the button.                          | `CSS`                                             | -             |
| `padding`       | The padding of the button.                        | `"sm" | "md" | "lg"`                              | `"md"`        |
| `form`          | The form of the button.                           | `string`                                          | -             |
| `loading`       | If the button is loading.                         | `boolean`                                         | `false`       |
| `disabled`      | If the button is disabled.                        | `boolean`                                         | `false`       |
| `borderRadius`  | The border radius of the button.                  | `BorderRadiusType`                                | `"md"`        |
| `fontSize`      | The font size of the button.                      | `FontsSizesType`                                  | `"EM-MEDIUM"` |
| `textTransform` | The text transform of the button.                 | `"capitalize" | "uppercase" | "default" | "none"` | `"default"`   |
| `fontWeight`    | The font weight of the button.                    | `FontsWeightsType`                                | `"NORMAL"`    |
| `effect`        | The effect of the button when hovered or clicked. | `"globalScale" | "boxScale" | "opacity"`          | `"opacity"`   |
| `onClick`       | The function to call on click.                    | `function`                                        | -             |
| `gap`           | The gap of the button.                            | `"sm" | "md" | "lg"`                              | `"md"`        |
| `href`          | The href of the button.                           | `string`                                          | -             |
| `LeftIcon`      | The left icon of the button.                      | `React.FC<IconProps>`                             | -             |
| `RightIcon`     | The right icon of the button.                     | `React.FC<IconProps>`                             | -             |
| `outlined`      | If the button is outlined.                        | `boolean`                                         | `false`       |
| `borderWidth`   | The border width of the button.                   | `number`                                          | `2`           |

---

### ButtonIcon

```jsx
import { ButtonIcon } from `@pikas-ui/button`;

const IconExample: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

const Example: React.FC = () => (
  <ButtonIcon icon={IconExample} />
)
```

#### Props
| Prop           | Description                                       | Type                                     | Default     |
|----------------|---------------------------------------------------|------------------------------------------|-------------|
| `type`         | The type of the button.                           | `"button" | "submit" | "reset"`          | `"button"`  |
| `id`           | The id of the button.                             | `string`                                 | -           |
| `name`         | The name of the button.                           | `string`                                 | -           |
| `color`        | The color of the button.                          | `ColorsType`                             | `"PRIMARY"` |
| `style`        | The style of the button.                          | `CSS`                                    | -           |
| `padding`      | The padding of the button.                        | `"sm" | "md" | "lg"`                     | `"md"`      |
| `form`         | The form of the button.                           | `string`                                 | -           |
| `loading`      | If the button is loading.                         | `boolean`                                | `false`     |
| `disabled`     | If the button is disabled.                        | `boolean`                                | `false`     |
| `borderRadius` | The border radius of the button.                  | `BorderRadiusType`                       | `"md"`      |
| `effect`       | The effect of the button when hovered or clicked. | `"globalScale" | "boxScale" | "opacity"` | `"opacity"` |
| `onClick`      | The function to call on click.                    | `function`                               | -           |
| `href`         | The href of the button.                           | `string`                                 | -           |
| `outlined`     | If the button is outlined.                        | `boolean`                                | `false`     |
| `borderWidth`  | The border width of the button.                   | `number`                                 | `2`         |
| `size`         | The size of the button.                           | `SizesType`                              | `"md"`      |

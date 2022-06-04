# @pikas-ui/checkbox

This package contains a checkbox component.

This library is based on [Radix Ui](https://www.radix-ui.com/).

## Getting Started

You need to install the [@pikas-ui/styles](../styles/README.md) package to use this package.

### Installation

With npm:

```
npm install @pikas-ui/checkbox
```

With yarn:

```
yarn add @pikas-ui/checkbox
```

With pnpm:

```
pnpm add @pikas-ui/checkbox
```

---

## Usage

### Button

```tsx
import { Checkbox } from `@pikas-ui/checkbox`

const Example: React.FC = () => (
  <Checkbox />
)
```

#### Props

| Prop             | Description                                        | Type                         | Default          |
|:-----------------|:---------------------------------------------------|:-----------------------------|:-----------------|
| `defaultChecked` | The default checked of the checkbox.               | `boolean`                    | `false`          |
| `onChange`       | The callback when the checkbox is changed.         | `(checked: boolean) => void` | -                |
| `id`             | The id of the checkbox.                            | `string`                     | -                |
| `label`          | The label of the checkbox.                         | `string` or `ReactNode`      | -                |
| `bgColor`        | The background color of the checkbox.              | `ColorsType`                 | `"WHITE"`        |
| `bgColorChecked` | The background color of the checkbox when checked. | `ColorsType`                 | `"PRIMARY"`      |
| `textError`      | The error text of the checkbox.                    | `string`                     | -                |
| `boxShadow`      | The box shadow of the checkbox.                    | `ShadowsType` or `"none"`    | `"DIMINUTION_1"` |
| `borderColor`    | The border color of the checkbox.                  | `ColorsType`                 | -                |
| `borderWidth`    | The border width of the checkbox.                  | `number`                     | `0`              |
| `borderRadius`   | The border radius of the checkbox.                 | `BorderRadiusType`           | `"md"`           |
| `fontSize`       | The font size of the checkbox.                     | `FontsSizesType`             | `"EM_MEDIUM"`    |
| `size`           | The size of the checkbox.                          | `number`                     | `24`             |
| `checked`        | The checked of the checkbox.                       | `boolean`                    | -                |
| `className`      | The class name of the checkbox.                    | `string`                     | -                |
| `disabled`       | The disabled of the checkbox.                      | `boolean`                    | `false`          |
| `required`       | The required of the checkbox.                      | `boolean`                    | `false`          |
| `name`           | The name of the checkbox.                          | `string`                     | -                |
| `side`           | The side of the checkbox.                          | `"left"` or `"right"`        | `"right"`        |
| `outline`        | The outline of the checkbox.                       | `boolean`                    | `true`           |
| `indeterminate`  | The indeterminate of the checkbox.                 | `boolean`                    | `false`          |

---

### Change Log
You can find the change log [here](CHANGELOG.md).
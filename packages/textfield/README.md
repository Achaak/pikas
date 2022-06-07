# @pikas-ui/textfield

This package contains a textfield component.

This library is based on [Radix Ui](https://www.radix-ui.com/).

## Getting Started

You need to install the [@pikas-ui/styles](../styles/README.md) package to use this package.

### Installation

With npm:

```
npm install @pikas-ui/textfield
```

With yarn:

```
yarn add @pikas-ui/textfield
```

With pnpm:

```
pnpm add @pikas-ui/textfield
```

---

## Usage

### Textfield
```tsx
import { Textfield } from `@pikas-ui/textfield`;

const Example: React.FC = () => {
  return <Textfield />
}
```

#### Props
Props extends `InputHTMLAttributes<HTMLInputElement>`

| Prop              | Description                            | Type                                                     | Default             |
| :---------------- | :------------------------------------- | :------------------------------------------------------- | :------------------ |
| `type`            | The type of the textfield.             | `TextfieldTypeType`                                      | `"text"`            |
| `label`           | The label of the textfield.            | `string`                                                 | -                   |
| `boxShadow`       | The box shadow of the textfield.       | `ShadowsType`                                            | `"DIMINUTION_1"`    |
| `borderRadius`    | The border radius of the textfield.    | `BorderRadiusType`                                       | `"md"`              |
| `padding`         | The padding of the textfield.          | `TextfieldPaddingType`                                   | `"md"`              |
| `gap`             | The gap of the textfield.              | `TextfieldGapType`                                       | -                   |
| `fontSize`        | The font size of the textfield.        | `FontsSizesType`                                         | `"EM-MEDIUM"`       |
| `borderColor`     | The border color of the textfield.     | `ColorsType`                                             | `"TRANSPARENT"`     |
| `borderWidth`     | The border width of the textfield.     | `number`                                                 | `0`                 |
| `backgroundColor` | The background color of the textfield. | `ColorsType`                                             | `"GRAY_LIGHTEST_1"` |
| `textError`       | The error text of the textfield.       | `string`                                                 | -                   |
| `onChange`        | The onChange event of the textfield.   | `(e: React.ChangeEvent<HTMLInputElement>) => void`       | -                   |
| `defaultValue`    | The default value of the textfield.    | `string`                                                 | -                   |
| `autoComplete`    | The autoComplete of the textfield.     | `string`                                                 | -                   |
| `LeftIcon`        | The left icon of the textfield.        | `React.FC<IconProps>`                                    | -                   |
| `RightIcon`       | The right icon of the textfield.       | `React.FC<IconProps>`                                    | -                   |
| `leftChildren`    | The left children of the textfield.    | `React.ReactNode`                                        | -                   |
| `rightChildren`   | The right children of the textfield.   | `React.ReactNode`                                        | -                   |
| `styles`          | The styles of the textfield.           | `{ container?: CSS, inputContainer?: CSS, input?: CSS }` | -                   |
| `outline`         | The outline of the textfield.          | `boolean`                                                | `true`              |
| `description`     | The description of the textfield.      | `string`                                                 | -                   |

---

### Change Log
You can find the change log [here](CHANGELOG.md).
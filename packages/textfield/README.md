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

| Prop              | Description                           | Type                                                                                                                                    | Default             |
| :---------------- | :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------- | :------------------ |
| `placeholder`     | The placeholder of the textarea.      | `string`                                                                                                                                | -                   |
| `type`            | The type of the textarea.             | `"color", "date", "datetime-local", "email", "hidden", "month", "number", "password", "search", "tel", "text", "time", "url" or "week"` | `"text"`            |
| `id`              | The id of the textarea.               | `string`                                                                                                                                | -                   |
| `label`           | The label of the textarea.            | `string`                                                                                                                                | -                   |
| `name`            | The name of the textarea.             | `string`                                                                                                                                | -                   |
| `boxShadow`       | The box shadow of the textarea.       | `ShadowsType`                                                                                                                           | `"DIMINUTION_1"`    |
| `borderRadius`    | The border radius of the textarea.    | `BorderRadiusType`                                                                                                                      | `"md"`              |
| `padding`         | The padding of the textarea.          | `"sm", "md" or "lg"`                                                                                                                    | `"md"`              |
| `fontSize`        | The font size of the textarea.        | `FontsSizesType`                                                                                                                        | -                   |
| `borderColor`     | The border color of the textarea.     | `ColorsType`                                                                                                                            | `"TRANSPARENT"`     |
| `borderWidth`     | The border width of the textarea.     | `number`                                                                                                                                | `0`                 |
| `backgroundColor` | The background color of the textarea. | `ColorsType`                                                                                                                            | `"GRAY_LIGHTEST_1"` |
| `textError`       | The error text of the textarea.       | `string`                                                                                                                                | -                   |
| `onChange`        | The onChange event of the textarea.   | `(e: React.ChangeEvent<HTMLInputElement>) => void`                                                                                      | -                   |
| `defaultValue`    | The default value of the textarea.    | `string`                                                                                                                                | -                   |
| `autoComplete`    | The autoComplete of the textarea.     | `string`                                                                                                                                | -                   |
| `LeftIcon`        | The left icon of the textarea.        | `React.FC<IconProps>`                                                                                                                   | -                   |
| `RightIcon`       | The right icon of the textarea.       | `React.FC<IconProps>`                                                                                                                   | -                   |
| `leftChildren`    | The left children of the textarea.    | `React.ReactNode`                                                                                                                       | -                   |
| `rightChildren`   | The right children of the textarea.   | `React.ReactNode`                                                                                                                       | -                   |
| `styles`          | The styles of the textarea.           | `{ container?: CSS, inputContainer?: CSS, input?: CSS }`                                                                                | -                   |
| `min`             | The min of the textarea.              | `number`                                                                                                                                | -                   |
| `max`             | The max of the textarea.              | `number`                                                                                                                                | -                   |
| `outline`         | The outline of the textarea.          | `boolean`                                                                                                                               | `true`              |
| `description`     | The description of the textarea.      | `string`                                                                                                                                | -                   |
| `disabled`        | The disabled of the textarea.         | `boolean`                                                                                                                               | `false`             |

---

### Change Log
You can find the change log [here](CHANGELOG.md).
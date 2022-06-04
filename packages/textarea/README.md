# @pikas-ui/textarea

This package contains a textarea component.

This library is based on [Radix Ui](https://www.radix-ui.com/).

## Getting Started

You need to install the [@pikas-ui/styles](../styles/README.md) package to use this package.

### Installation

With npm:

```
npm install @pikas-ui/textarea
```

With yarn:

```
yarn add @pikas-ui/textarea
```

With pnpm:

```
pnpm add @pikas-ui/textarea
```

---

## Usage

### Textarea
```tsx
import { Textarea } from `@pikas-ui/textarea`;

const Example: React.FC = () => {
  return <Textarea />
}
```

| Prop              | Description                           | Type                                                           | Default          |
| :---------------- | :------------------------------------ | :------------------------------------------------------------- | :--------------- |
| `placeholder`     | The placeholder of the textarea.      | `string`                                                       | -                |
| `id`              | The id of the textarea.               | `string`                                                       | -                |
| `label`           | The label of the textarea.            | `string`                                                       | -                |
| `name`            | The name of the textarea.             | `string`                                                       | -                |
| `boxShadow`       | The box shadow of the textarea.       | `ShadowsType`                                                  | `"DIMINUTION_1"` |
| `borderRadius`    | The border radius of the textarea.    | `BorderRadiusType`                                             | `"md"`           |
| `padding`         | The padding of the textarea.          | `"sm", "md" or "lg"`                                           | `"md"`           |
| `fontSize`        | The font size of the textarea.        | `FontsSizesType`                                               | -                |
| `borderColor`     | The border color of the textarea.     | `ColorsType`                                                   | `"GRAY_LIGHTER"` |
| `borderWidth`     | The border width of the textarea.     | `number`                                                       | -                |
| `backgroundColor` | The background color of the textarea. | `ColorsType`                                                   | -                |
| `textError`       | The error text of the textarea.       | `string`                                                       | -                |
| `onChange`        | The onChange event of the textarea.   | `(e: React.ChangeEvent<HTMLTextAreaElement>) => void`          | -                |
| `defaultValue`    | The default value of the textarea.    | `string`                                                       | -                |
| `styles`          | The styles of the textarea.           | `{ container?: CSS, textareaContainer?: CSS, textarea?: CSS }` | -                |
| `outline`         | The outline of the textarea.          | `boolean`                                                      | `true`           |
| `resize`          | The resize of the textarea.           | `"none", "vertical", "horizontal" or "both"`                   | `"none"`         |
| `description`     | The description of the textarea.      | `string`                                                       | -                |
| `disabled`        | The disabled of the textarea.         | `boolean`                                                      | `false`          |


---

### Change Log
You can find the change log [here](CHANGELOG.md).
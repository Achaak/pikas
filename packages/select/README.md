# @pikas-ui/select

This package contains a select component.

This library is based on [Radix Ui](https://www.radix-ui.com/).

## Getting Started

You need to install the [@pikas-ui/styles](../styles/README.md) package to use this package.

### Installation

With npm:

```
npm install @pikas-ui/select
```

With yarn:

```
yarn add @pikas-ui/select
```

With pnpm:

```
pnpm add @pikas-ui/select
```

---

## Usage

### Select
```tsx
import { Select } from `@pikas-ui/select`;

const Example: React.FC = () => {
  return (
    <Select
      data={
        [
          {
            name: 'Option 1',
            items: [
              {
                label: 'Option 1.1',
                value: 'option-1-1',
              },
              {
                label: 'Option 1.2',
                value: 'option-1-2',
              },
            ],
          }
        ]
      }
    />
  )
}
```


| Prop                | Description                                     | Type                                                                                                                                                  | Default |
| :------------------ | :---------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| `description`       | The description of the textarea.                | `string`                                                                                                                                              | -       |
| `styles`            | Custom styles for the component.                | `{ container?: CSS, trigger?: CSS }`                                                                                                                  | -       |
| `label`             | The label of the textarea.                      | `string`                                                                                                                                              | -       |
| `id`                | The id of the textarea.                         | `string`                                                                                                                                              | -       |
| `value`             | The value of the textarea.                      | `string`                                                                                                                                              | -       |
| `hasSearch`         | If the textarea has a search.                   | `boolean`                                                                                                                                             | `false` |
| `searchPlaceholder` | The placeholder of the search.                  | `string`                                                                                                                                              | -       |
| `onChange`          | The callback when the textarea changes.         | `(value: string) => void`                                                                                                                             | -       |
| `onOpenChange`      | The callback when the textarea opens or closes. | `(open: boolean) => void`                                                                                                                             | -       |
| `defaultOpen`       | If the textarea is open by default.             | `boolean`                                                                                                                                             | `false` |
| `direction`         | The direction of the textarea.                  | `SelectDirectionsType`                                                                                                                                | -       |
| `textError`         | The error of the textarea.                      | `string`                                                                                                                                              | -       |
| `ariaLabel`         | The aria-label of the textarea.                 | `string`                                                                                                                                              | -       |
| `outline`           | If the textarea has an outline.                 | `boolean`                                                                                                                                             | `true`  |
| `backgroundColor`   | The background color of the textarea.           | `string`                                                                                                                                              | -       |
| `boxShadow`         | The box shadow of the textarea.                 | `string`                                                                                                                                              | -       |
| `borderRadius`      | The border radius of the textarea.              | `string`                                                                                                                                              | -       |
| `borderColor`       | The border color of the textarea.               | `string`                                                                                                                                              | -       |
| `borderWidth`       | The border width of the textarea.               | `number`                                                                                                                                              | -       |
| `fontSize`          | The font size of the textarea.                  | `string`                                                                                                                                              | -       |
| `padding`           | The padding of the textarea.                    | `SelectPaddingType`                                                                                                                                   | -       |
| `data`              | The data of the textarea.                       | `{ name?: string, hidden?: boolean, items: Array<{ label: string, value: string, disabled?: boolean, searchValue?: string, hidden?: boolean }> }[] }` | -       |

---

### Change Log
You can find the change log [here](CHANGELOG.md).
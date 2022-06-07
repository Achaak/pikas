# @pikas-ui/text

This package contains a text components.

## Getting Started

You need to install the [@pikas-ui/styles](../styles/README.md) package to use this package.

### Installation

With npm:

```
npm install @pikas-ui/text
```

With yarn:

```
yarn add @pikas-ui/text
```

With pnpm:

```
pnpm add @pikas-ui/text
```

---

## Usage

### Label
```tsx
import { Label } from `@pikas-ui/text`;

const Example: React.FC = () => {
  return <Label>Label</Label>
}
```

#### Props

| Prop       | Description             | Type              | Default |
| :--------- | :---------------------- | :---------------- | :------ |
| `htmlFor`  | The id of the label.    | `string`          | -       |
| `style`    | The style of the label. | `CSS`             | -       |
| `children` | The text of the label.  | `React.ReactNode` | -       |

---

### Description
```tsx
import { Description } from `@pikas-ui/text`;

const Example: React.FC = () => {
  return <Description>Label</Description>
}
```

#### Props

| Prop       | Description                   | Type              | Default |
| :--------- | :---------------------------- | :---------------- | :------ |
| `style`    | The style of the description. | `CSS`             | -       |
| `children` | The text of the description.  | `React.ReactNode` | -       |

---

### TextError
```tsx
import { TextError } from `@pikas-ui/text`;

const Example: React.FC = () => {
  return <TextError>Label</TextError>
}
```

#### Props

| Prop       | Description                  | Type              | Default |
| :--------- | :--------------------------- | :---------------- | :------ |
| `style`    | The style of the text error. | `CSS`             | -       |
| `children` | The text of the text error.  | `React.ReactNode` | -       |

---

### Change Log
You can find the change log [here](CHANGELOG.md).
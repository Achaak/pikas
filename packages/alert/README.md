# @pikas-ui/alert

This package contains a alert component.

This library is based on [Radix Ui](https://www.radix-ui.com/).

## Getting Started

You need to install the [@pikas-ui/styles](../styles/README.md) package to use this package.

### Installation

With npm:

```
npm install @pikas-ui/alert
```

With yarn:

```
yarn add @pikas-ui/alert
```

With pnpm:

```
pnpm add @pikas-ui/alert
```

---

## Usage

### Alert
```tsx
import { Alert } from `@pikas-ui/alert`;

const Example: React.FC = () => {
  return <Alert>Ea Lorem fugiat aliquip irure aliquip quis mollit ullamco aliquip occaecat culpa.</Alert>
}
```

#### Props

| Prop           | Description                          | Type               | Default      |
| :------------- | :----------------------------------- | :----------------- | :----------- |
| `variant`      | Alert variant of the alert component | `AlertVariantType` | `'info'`     |
| `children`     | Alert content                        | `ReactNode`        | -            |
| `fontSize`     | Font size of the alert component     | `FontsSizesType`   | `'EM-SMALL'` |
| `fontWeight`   | Font weight of the alert component   | `FontsWeightsType` | `'NORMAL'`   |
| `borderRadius` | Border radius of the alert component | `BorderRadiusType` | `'md'`       |
| `iconSize`     | Icon size of the alert component     | `number`           | `24`         |
| `padding`      | Padding of the alert component       | `AlertPaddingType` | `'md'`       |
| `gap`          | Gap of the alert component           | `AlertGapType`     | `'sm'`       |
| `visible`      | Visibility of the alert component    | `boolean`          | `true`       |

---

### CustomAlert
```tsx
import { CustomAlert } from `@pikas-ui/alert`;

const Example: React.FC = () => {
  return <CustomAlert>Ea Lorem fugiat aliquip irure aliquip quis mollit ullamco aliquip occaecat culpa.</Alert>
}
```

#### Props

| Prop              | Description                             | Type                  | Default      |
| :---------------- | :-------------------------------------- | :-------------------- | :----------- |
| `children`        | Alert content                           | `ReactNode`           | -            |
| `fontSize`        | Font size of the alert component        | `FontsSizesType`      | `'EM-SMALL'` |
| `fontWeight`      | Font weight of the alert component      | `FontsWeightsType`    | `'NORMAL'`   |
| `borderRadius`    | Border radius of the alert component    | `BorderRadiusType`    | `'md'`       |
| `iconSize`        | Icon size of the alert component        | `number`              | `24`         |
| `padding`         | Padding of the alert component          | `AlertPaddingType`    | `'md'`       |
| `gap`             | Gap of the alert component              | `AlertGapType`        | `'sm'`       |
| `Icon`            | Icon of the alert component             | `React.FC<IconProps>` | -            |
| `backgroundColor` | Background color of the alert component | `ColorsType`          | -            |
| `color`           | Color of the alert component            | `ColorsType`          | -            |
| `visible`         | Visibility of the alert component       | `boolean`             | `true`       |

---

### Change Log
You can find the change log [here](CHANGELOG.md).
# @pikas-ui/dropdown-menu

This package contains a dropdown menu component.

This library is based on [Radix Ui](https://www.radix-ui.com/).

## Getting Started

You need to install the [@pikas-ui/styles](../styles/README.md) package to use this package.

### Installation

With npm:

```
npm install @pikas-ui/dropdown-menu
```

With yarn:

```
yarn add @pikas-ui/dropdown-menu
```

With pnpm:

```
pnpm add @pikas-ui/dropdown-menu
```

---
## Usage

### DropdownMenu

```tsx
import { ContextMenu } from `@pikas-ui/checkbox`

const Example: React.FC = () => {
  return (
    <ContextMenu
      data={
        [
          {
            label: 'Item 1',
            items: [
              {
                label: 'Item 1-1',
                type: 'item',
                onClick: console.log,
              },
              {
                type: 'checkbox',
                checked: true,
                label: 'Item 1-2',
                onCheckedChange: console.log,
                color: 'PRIMARY',
              },
            ],
          },
        ]
      }
    />
  )
}
```

#### Props

| Prop                   | Description                                                                                                                                                                                           | Type                             | Default |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------- | :------ |
| `datas`                | Menu datas                                                                                                                                                                                            | `MenuDatas`                      | -       |
| `styles`               | Styles of dropdown menu                                                                                                                                                                               | `object`                         | -       |
| `triggerContent`       | The content of the trigger                                                                                                                                                                            | `ReactNode`                      | -       |
| `iconColor`            | Icon color of trigger content                                                                                                                                                                         | `ColorsType`                     | -       |
| `iconSize`             | Icon size of trigger content                                                                                                                                                                          | `number`                         | 24      |
| `direction`            | The direction of the menu                                                                                                                                                                             | `DropdownMenuDirectionType`      | -       |
| `modal`                | The modality of the context menu. When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers. This prop is ignored within submenus. | `boolean`                        | `false` |
| `defaultOpen`          | The default open state of the menu                                                                                                                                                                    | `boolean`                        | `false` |
| `open`                 | The open state of the menu                                                                                                                                                                            | `boolean`                        | `false` |
| `onOpenChange`         | Event handler called when the open state of the context menu changes.                                                                                                                                 | `(open: boolean) => void`        | -       |
| `allowPinchZoom`       | The allowPinchZoom prop from react-remove-scroll. See their docs for information on functionality and limitations.                                                                                    | `boolean`                        | `false` |
| `loop`                 | When true, keyboard navigation will loop from last item to first, and vice versa.                                                                                                                     | `boolean`                        | `false` |
| `onCloseAutoFocus`     | Event handler called when focus moves back after closing. It can be prevented by calling event.preventDefault. This prop is ignored within submenus.                                                  | `(event: Event) => void`         | -       |
| `onEscapeKeyDown`      | Event handler called when the escape key is down. It can be prevented by calling event.                                                                                                               | `(event: KeyboardEvent) => void` | -       |
| `onPointerDownOutside` | Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.                                                            | `() => void`                     | -       |
| `onFocusOutside`       | Event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault.                                                                       | `() => void`                     | -       |
| `onInteractOutside`    | Event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault.                                                                       | `() => void`                     | -       |
| `portalled`            | Whether to render in a Portal when open. This prop is ignored within submenus.                                                                                                                        | `boolean`                        | `false` |
| `side`                 | The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled. This prop is ignored within submenus.                           | `DropdownMenuSideType`           | -       |
| `sideOffset`           | The horizontal distance in pixels from the anchor. This only applies within submenus.                                                                                                                 | `number`                         | -       |
| `align`                | The preferred alignment against the trigger. May change when collisions occur. This prop is ignored within submenus.                                                                                  | `DropdownMenuAlignType`          | -       |
| `alignOffset`          | The vertical distance in pixels from the anchor.                                                                                                                                                      | `number`                         | -       |
| `avoidCollisions`      | When true, overrides the side andalign preferences to prevent collisions with window edges.                                                                                                           | `boolean`                        | `false` |
| `collisionTolerance`   | The distance in pixels from window edges where collision detection should occur.                                                                                                                      | `number`                         | -       |

---

### Change Log
You can find the change log [here](CHANGELOG.md).
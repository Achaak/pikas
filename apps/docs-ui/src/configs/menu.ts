import type { Menu } from '@/types/menu'
import { getLink } from '@/utils/routes'

export const menu: Menu = [
  {
    label: 'Docs',
    items: [
      {
        label: 'Introduction',
        href: getLink('introduction'),
      },
      {
        label: 'Getting Started',
        href: '/docs/getting-started',
      },
    ],
  },
  {
    label: 'Components',
    items: [
      {
        label: 'Alert',
        href: getLink('alert'),
      },
      {
        label: 'Avatar',
        href: getLink('avatar'),
      },
      {
        label: 'Badge',
        href: getLink('badge'),
      },
      {
        label: 'Button',
        href: getLink('button'),
      },
      {
        label: 'Checkbox',
        href: getLink('checkbox'),
      },
      {
        label: 'Context Menu',
        href: getLink('contextMenu'),
      },
      {
        label: 'Dialog',
        href: getLink('dialog'),
      },
      {
        label: 'Dropdown Menu',
        href: getLink('dropdownMenu'),
      },
      {
        label: 'File Input (Coming soon)',
        href: getLink('fileInput'),
        disabled: true,
      },
      {
        label: 'Icons',
        href: getLink('icons'),
      },
      {
        label: 'Loader',
        href: getLink('loader'),
      },
      {
        label: 'Progress',
        href: getLink('progress'),
      },
      {
        label: 'Searchbar',
        href: getLink('searchbar'),
      },
      {
        label: 'Select',
        href: getLink('select'),
      },
      {
        label: 'Separator',
        href: getLink('separator'),
      },
      {
        label: 'Skeleton',

        href: getLink('skeleton'),
      },
      {
        label: 'Slider',

        href: getLink('slider'),
      },
      {
        label: 'Switch',

        href: getLink('switch'),
      },
      {
        label: 'Table',
        href: getLink('table'),
      },
      {
        label: 'Tabs',
        href: getLink('tabs'),
      },
      {
        label: 'Text',
        href: getLink('text'),
      },
      {
        label: 'Textarea',
        href: getLink('textarea'),
      },
      {
        label: 'Textfield',
        href: getLink('textfield'),
      },
      {
        label: 'Textfield Multiple (Coming soon)',
        href: getLink('textfieldMultiple'),
        disabled: true,
      },
      {
        label: 'Title',
        href: getLink('title'),
      },
      {
        label: 'Toast',
        href: getLink('toast'),
      },
      {
        label: 'Tooltip',
        href: getLink('tooltip'),
      },
      {
        label: 'Radio (Coming soon)',
        href: getLink('radio'),
        disabled: true,
      },
    ],
  },
  {
    label: 'Utilities',
    items: [
      {
        label: 'Styles',
        href: getLink('styles'),
      },
      {
        label: 'useTheme',
        href: getLink('useTheme'),
      },
    ],
  },
]

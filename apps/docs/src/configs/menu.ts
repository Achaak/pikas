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
        label: 'Dropdown Menu',
        href: getLink('dropdownMenu'),
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
        label: 'Tooltip',
        href: getLink('tooltip'),
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
    ],
  },
]

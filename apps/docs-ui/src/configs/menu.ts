import type { LayoutMenu } from '@pikas/docs-ui';
import { docsUtilsRoutes, docsUIRoutes } from '@pikas/docs-routes';
const { getLink: getLinkUtils } = docsUtilsRoutes;
const { getLink: getLinkUI } = docsUIRoutes;

export const menu: LayoutMenu = [
  {
    label: 'Docs',
    items: [
      {
        label: 'Introduction',
        href: getLinkUI('introduction'),
      },
      {
        label: 'Getting Started',
        href: getLinkUI('gettingStarted'),
      },
      // {
      //   label: 'Custom config',
      //   href: getLink('createPikas'),
      // },
    ],
  },
  {
    label: 'Components',
    items: [
      {
        label: 'Alert',
        href: getLinkUI('alert'),
      },
      {
        label: 'Avatar',
        href: getLinkUI('avatar'),
      },
      {
        label: 'Badge',
        href: getLinkUI('badge'),
      },
      {
        label: 'Button',
        href: getLinkUI('button'),
      },
      {
        label: 'Checkbox',
        href: getLinkUI('checkbox'),
      },
      {
        label: 'Context Menu',
        href: getLinkUI('contextMenu'),
      },
      {
        label: 'Dialog',
        href: getLinkUI('dialog'),
      },
      {
        label: 'Dropdown Menu',
        href: getLinkUI('dropdownMenu'),
      },
      {
        label: 'Dropzone',
        href: getLinkUI('dropzone'),
      },
      {
        label: 'Explorer',
        href: getLinkUI('explorer'),
      },
      {
        label: 'Grid',
        href: getLinkUI('grid'),
      },
      {
        label: 'Icons',
        href: getLinkUI('icons'),
      },
      {
        label: 'Loader',
        href: getLinkUI('loader'),
      },
      {
        label: 'Progress',
        href: getLinkUI('progress'),
      },
      {
        label: 'Searchbar',
        href: getLinkUI('searchbar'),
      },
      {
        label: 'Select',
        href: getLinkUI('select'),
      },
      {
        label: 'Separator',
        href: getLinkUI('separator'),
      },
      {
        label: 'Skeleton',

        href: getLinkUI('skeleton'),
      },
      {
        label: 'Slider',

        href: getLinkUI('slider'),
      },
      {
        label: 'Switch',

        href: getLinkUI('switch'),
      },
      {
        label: 'Table',
        href: getLinkUI('table'),
      },
      {
        label: 'Tabs',
        href: getLinkUI('tabs'),
      },
      {
        label: 'Text',
        href: getLinkUI('text'),
      },
      {
        label: 'Textarea',
        href: getLinkUI('textarea'),
      },
      {
        label: 'Textfield',
        href: getLinkUI('textfield'),
      },
      {
        label: 'Textfield Multiple (Coming soon)',
        href: getLinkUI('textfieldMultiple'),
        disabled: true,
      },
      {
        label: 'Title',
        href: getLinkUI('title'),
      },
      {
        label: 'Toast',
        href: getLinkUI('toast'),
      },
      {
        label: 'Tooltip',
        href: getLinkUI('tooltip'),
      },
      {
        label: 'Radio (Coming soon)',
        href: getLinkUI('radio'),
        disabled: true,
      },
    ],
  },
  {
    label: 'Utilities',
    items: [
      {
        label: 'Styles',
        href: getLinkUI('styles'),
      },
      {
        label: 'useTheme',
        href: getLinkUI('useTheme'),
      },
    ],
  },
  {
    label: 'Pikas',
    items: [
      {
        label: 'Pikas-Utils',
        href: getLinkUtils('introduction', { withOrigin: true }),
      },
    ],
  },
];

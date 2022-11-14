import type { LayoutMenu } from '@pikas/docs-ui';
import { docsUtilsRoutes } from '@pikas/docs-routes';
const { getLink } = docsUtilsRoutes;

export const menu: LayoutMenu = [
  {
    label: 'Docs',
    items: [
      {
        label: 'Screen',
        href: getLink('screen'),
      },
      {
        label: 'Router',
        href: getLink('router'),
      },
    ],
  },
];

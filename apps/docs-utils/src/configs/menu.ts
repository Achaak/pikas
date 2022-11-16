import type { LayoutMenu } from '@pikas/docs-ui';
import { docsUtilsRoutes, docsUIRoutes } from '@pikas/docs-routes';
const { getLink: getLinkUtils } = docsUtilsRoutes;
const { getLink: getLinkUI } = docsUIRoutes;

export const menu: LayoutMenu = [
  {
    label: 'Docs',
    items: [
      {
        label: 'File',
        href: getLinkUtils('file'),
      },
      {
        label: 'Keyboard',
        href: getLinkUtils('keyboard'),
      },
      {
        label: 'Router',
        href: getLinkUtils('router'),
      },
      {
        label: 'Screen',
        href: getLinkUtils('screen'),
      },
    ],
  },
  {
    label: 'Pikas',
    items: [
      {
        label: 'Pikas-UI',
        href: getLinkUI('introduction', { withOrigin: true }),
      },
    ],
  },
];

import type { Menu } from '@/types/menu'
import { getLink } from '@/utils/routes'

export const menu: Menu = [
  {
    label: 'Docs',
    items: [
      {
        label: 'Router',
        href: getLink('router'),
      },
    ],
  },
]
